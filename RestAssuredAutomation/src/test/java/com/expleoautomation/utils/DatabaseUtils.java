package com.expleoautomation.utils;

import static org.assertj.core.api.Assertions.assertThat;

import java.io.IOException;
import java.io.InputStream;
import java.io.StringWriter;
import java.math.BigDecimal;
import java.sql.CallableStatement;
import java.sql.Clob;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.Struct;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.apache.commons.io.IOUtils;
import org.apache.ibatis.datasource.pooled.PooledDataSource;
import org.apache.ibatis.io.Resources;
import org.apache.ibatis.jdbc.SQL;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;
import org.joda.time.LocalDate;
import org.json.JSONArray;
import org.junit.AssumptionViolatedException;

import com.expleoautomation.commons.ConstantsProvider;
import com.expleoautomation.commons.EnvironmentHandler;
import com.google.common.base.Strings;
import lombok.NonNull;
import lombok.extern.log4j.Log4j2;

@Log4j2
public class DatabaseUtils {

    @NonNull
    private String environment;

    /*public DatabaseUtils(String environment) {
       String initStatmt = "select pkco_audit.set_audit('TEST','TEST') from dual";
        this.environment = environment;
        try {
            try (ResultSet rs = this.executeQueryInDb(initStatmt)) {
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
    }*/
    
    public DatabaseUtils(String environment)
    {
    	this.environment = environment;
    
    }

    public ResultSet executeQueryInDb(String Stmt) throws Exception {
        log.debug("Executing Statement in database: " + Stmt);
        Statement statement = getSessionFactory().openSession(true).getConnection().createStatement();
        return statement.executeQuery(Stmt);
    }

    public SqlSessionFactory getSessionFactory() {
        SqlSessionFactory sqlSessionFactory = null;
        try (InputStream configsIs = Resources.getResourceAsStream(ConstantsProvider.getMYBATIS_CONFIG_FILE_PATH())) 
        {
            sqlSessionFactory = new SqlSessionFactoryBuilder().build(configsIs, environment);
        } catch (IOException ioe) 
        {
            throw new AssumptionViolatedException("can't read the Mybatis config file");
        }
        log.debug("Getting SqlSessionFactor for the environment: " + environment);
        return sqlSessionFactory;
    }

    
    public SqlSessionFactory getMetaDataSessionFactory() throws IOException {

        String metaDataEnvironment = EnvironmentHandler.getMetaDataEnvironment(environment);
        SqlSessionFactory sqlSessionFactory = null;
        try (InputStream configsIs = Resources.getResourceAsStream(ConstantsProvider.getMYBATIS_CONFIG_FILE_PATH())) 
        {
            sqlSessionFactory = new SqlSessionFactoryBuilder().build(configsIs, metaDataEnvironment);
        }
        log.debug("Getting SqlSessionFactor for the environment: " + metaDataEnvironment);
        return sqlSessionFactory;
    }

    
    public BigDecimal getNextValFromSequence(String sequenceName) throws Exception 
    {
        ResultSet nextValRes = null;
        BigDecimal result = null;
        SqlSessionFactory sqlSessionFactory = this.getSessionFactory();
        try (SqlSession sqlSession = sqlSessionFactory.openSession(true)) {
            try (Statement stmt = sqlSession.getConnection().createStatement()) {
                nextValRes = stmt.executeQuery("select " + sequenceName + ".nextval from dual");
                nextValRes.next();
                result = nextValRes.getBigDecimal(1);
                log.debug("Next value from sequence " + sequenceName + ":" + result);
            } catch (SQLException se) {
                log.fatal("error while getting next value from sequence " + sequenceName);
                se.printStackTrace();
            } finally {
                if (nextValRes != null && !nextValRes.isClosed()) {
                    nextValRes.close();
                }
            }
            return result;
        } finally {
            ((PooledDataSource) sqlSessionFactory.getConfiguration().getEnvironment().getDataSource()).forceCloseAll();
        }
    }

    public void listOpenDatabaseSessions() throws Exception {
        ResultSet resultSet = null;
        List<String> result = new ArrayList<>();
        SqlSessionFactory sqlSessionFactory = this.getSessionFactory();
        try (SqlSession sqlSession = sqlSessionFactory.openSession(true)) {
            try (Statement stmt = sqlSession.getConnection().createStatement()) {
                resultSet = stmt.executeQuery(
                    "select sid,serial#,inst_id from  gv$session where machine like 'WDBAH28933' and program NOT LIKE 'SQL Developer'");
                while (resultSet.next()) {
                    BigDecimal sid = resultSet.getBigDecimal("sid");
                    BigDecimal serialNumber = resultSet.getBigDecimal("serial#");
                    BigDecimal instID = resultSet.getBigDecimal("inst_id");
                    result.add(sid + "|" + serialNumber + "|" + instID);
                    log.debug("sid = " + sid + ", serial# = " + serialNumber + ", inst_id = " + instID);
                }
            } catch (SQLException se) {
                log.fatal("error while getting count of open sessions");
                se.printStackTrace();
            } finally {
                if (resultSet != null && !resultSet.isClosed()) {
                    resultSet.close();
                }
            }

        } finally {
            ((PooledDataSource) sqlSessionFactory.getConfiguration().getEnvironment().getDataSource()).forceCloseAll();
        }
    }

    /**
     * calls a database function with a single int parameter and return the result
     *
     * @param functionName
     *            the fully qualified name of the function
     * @param inputParamToFunction
     *            int parameter to the function as String
     * @param oracleType
     *            as in {@link oracle.jdbc.OracleTypes} for the return value
     * @return ResultSet in the form of List of Maps
     */
    public List<Map<String, Object>> callDbFunctionWithSingleIntParam(String functionName,
        String inputParamToFunction, int oracleType) throws SQLException, IOException {
        List<Map<String, Object>> rows = null;
        String functionCall = "{?=call " + functionName + "(?)}";
        try (CallableStatement ctmt = this.getSessionFactory().openSession(true).getConnection()
            .prepareCall(functionCall)) {
            ctmt.registerOutParameter(1, oracleType);
            ctmt.setInt(2, Integer.parseInt(inputParamToFunction));
            ctmt.execute();
            ResultSet resultSet = (ResultSet) ctmt.getObject(1);
            rows = convertResultSetToListOfMaps(resultSet);
        }
        return rows;
    }

    public static List<Map<String, Object>> convertResultSetToListOfMaps(ResultSet resultSet)
        throws SQLException, IOException {
        ResultSetMetaData resMetaData = resultSet.getMetaData();
        int numColumns = resMetaData.getColumnCount();
        List<Map<String, Object>> rows = new ArrayList<>();
        while (resultSet.next()) {
            Map<String, Object> row = new HashMap<>(numColumns);
            for (int i = 1; i <= numColumns; ++i) {
                String columnName = resMetaData.getColumnName(i);
                log.debug("copy column " + columnName + " from ResultSet");
                if (columnName.equals("SPF_FEATURE_ATTRIBUTES")) {
                    Object jsonAsObject = resultSet.getObject(i);
                    String jsonAsString = getStringFromClobAsObject(jsonAsObject);
                    row.put(columnName, jsonAsString);
                } else {
                    row.put(columnName, resultSet.getObject(i));
                }
            }
            rows.add(row);
        }
        return rows;
    }

    private static String getStringFromClobAsObject(Object clobAsObject)
        throws SQLException, IOException {
        Clob clob = (Clob) clobAsObject;
        InputStream in = clob.getAsciiStream();
        StringWriter stringWriter = new StringWriter();
        IOUtils.copy(in, stringWriter);
        return stringWriter.toString();
    }

    public <T> T callDbFunctionWithSingleIntParam(String functionName, String inputParamToFunction,
        int oracleType, Class<T> returnTypeClass) throws Exception {
        String functionCall = "{?=call " + functionName + "(?)}";
        try (CallableStatement ctmt = this.getSessionFactory().openSession(true).getConnection()
            .prepareCall(functionCall)) {
            ctmt.registerOutParameter(1, oracleType);
            ctmt.setInt(2, Integer.parseInt(inputParamToFunction));
            ctmt.execute();
            return returnTypeClass.cast(ctmt.getObject(1));
        }
    }

    /*public byte[] callDbFunctionWithoutParams(String functionName) throws Exception {
        String functionCall = "{?=call " + functionName + "()}";
        try (CallableStatement ctmt = this.getSessionFactory().openSession(true).getConnection()
            .prepareCall(functionCall)) {
            ctmt.registerOutParameter(1, OracleTypes.BLOB);
            ctmt.execute();
            return ctmt.getBytes(1);
        }
    }*/

    public SqlSessionFactory getImapDataSessionFactory() {
        String imapDataEnvironment = EnvironmentHandler.getImapDataEnvironment(environment);
        SqlSessionFactory sqlSessionFactory = null;
        try (InputStream configsIs = Resources
            .getResourceAsStream(ConstantsProvider.getMYBATIS_CONFIG_FILE_PATH())) {
            sqlSessionFactory = new SqlSessionFactoryBuilder().build(configsIs, imapDataEnvironment);
        } catch (IOException e) {
            throw new AssumptionViolatedException("can't read the MyBatis Config file" + e.getMessage());
        }
        log.debug("Getting SqlSessionFactor for the environment: " + environment);
        return sqlSessionFactory;
    }

    public SqlSessionFactory getIforisSessionFactorty() throws IOException {
        String iforisDataEnvironment = EnvironmentHandler.getIforisDataEnvironment(environment);
        SqlSessionFactory sqlSessionFactory = null;
        try (InputStream configsIs = Resources
            .getResourceAsStream(ConstantsProvider.getMYBATIS_CONFIG_FILE_PATH())) {
            sqlSessionFactory = new SqlSessionFactoryBuilder().build(configsIs, iforisDataEnvironment);
        }
        return sqlSessionFactory;
    }

   
    
   /* public String getJiraKeyFromJiraCreationTable(BigDecimal TDC_ID, int sleepBeforePollingDbInMs,
        int trialsLimit) throws Exception {
        String jiraKey = "";
        String jsonString = "";
        int trials = 0;
        try (SqlSession sqlSession = getConnectDataSessionFactory().openSession()) {
            JiraCreationExample jiraCreationExample = new JiraCreationExample();
            jiraCreationExample.createCriteria().andTDC_IDEqualTo(TDC_ID);
            JiraCreationMapper jiraCreationMapper = sqlSession.getMapper(JiraCreationMapper.class);
            while (Strings.isNullOrEmpty(jiraKey) && Strings.isNullOrEmpty(jsonString)
                && trials < trialsLimit) {
                trials++;
                sqlSession.clearCache();
                Thread.sleep(sleepBeforePollingDbInMs);
                List<JiraCreation> jiraCreations = jiraCreationMapper.selectByExample(jiraCreationExample);
                if (jiraCreations.isEmpty()) {
                    throw new SQLException("No Jira creation rows found with ID: " + TDC_ID.toString());
                }
                jiraKey = jiraCreations.get(0).getTDC_JIRA_KEY();
                jsonString = jiraCreations.get(0).getTDC_JIRA_JSON();
            }
        }
        log.debug("Jira key= " + jiraKey);
        return jiraKey;
    }*/



    public SqlSessionFactory getConnectDataSessionFactory() throws IOException {

        String connectDataEnvironment = EnvironmentHandler.getConnectDataEnvironment(environment);
        SqlSessionFactory sqlSessionFactory = null;
        try (InputStream configsIs = Resources
            .getResourceAsStream(ConstantsProvider.getMYBATIS_CONFIG_FILE_PATH())) {
            sqlSessionFactory = new SqlSessionFactoryBuilder().build(configsIs, connectDataEnvironment);
        }
        log.debug("Getting SqlSessionFactor for the environment: " + connectDataEnvironment);
        return sqlSessionFactory;
    }

    /**
     * Convert the ResultSet to a List of Maps, where each Map represents a row with columnNames and columValues
     */
    List<Map<String, Object>> resultSetToListOfMaps(ResultSet rs) throws SQLException {
        try {
            ResultSetMetaData md = rs.getMetaData();
            int columns = md.getColumnCount();
            List<Map<String, Object>> rows = new ArrayList<>();
            while (!rs.isClosed() && rs.next()) {
                Map<String, Object> row = new HashMap<>(columns);
                for (int i = 1; i <= columns; ++i) {
                    row.put(md.getColumnName(i), rs.getObject(i));
                }
                rows.add(row);
            }
            return rows;
        } finally {
            if (rs != null) {
                if (!rs.isClosed()) {
                    rs.close();
                }
            }
        }
    }

   
    public int executeUpdateInDb(String Stmt) throws Exception {
        try (Statement stmt = getSessionFactory().openSession(true).getConnection().createStatement()) {
            log.debug("Executing Statement in database: " + Stmt);
            int numberOfUpdatedRows = stmt.executeUpdate(Stmt);
            log.debug("number of rows updated: " + numberOfUpdatedRows);
            return numberOfUpdatedRows;
        }
    }

   
}
