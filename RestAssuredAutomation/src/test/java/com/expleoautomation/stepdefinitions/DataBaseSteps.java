package com.expleoautomation.stepdefinitions;

import java.io.IOException;
import java.util.List;

import org.apache.bcel.generic.Select;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.openqa.selenium.WebDriver;
import com.expleoautomation.commons.TestDataHolder;
import com.expleoautomation.dao.TDED_SUSPECT_REPORTS;
import com.expleoautomation.utils.DatabaseUtils;
import com.expleoautomation.commons.ConstantsProvider;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class DataBaseSteps  {
	
	@Then("get the suspectReportID from the database table for the {string}")
	public void get_the_suspectReportID_from_the_database_table_for_the(String caseID) throws Exception {
		SqlSessionFactory sqlSessionFactory = new DatabaseUtils(ConstantsProvider.getENVIRONMENT()).getSessionFactory();
        SqlSession sqlSession = sqlSessionFactory.openSession(true);
        //TestDataHolder.addTestDataRecord("CASE_ID", "2100", true, true);
        caseID=TestDataHolder.getTestDataRecord("CASE_ID");
        List<TDED_SUSPECT_REPORTS> suspectReport = sqlSession.selectList("ie.gov.agriculture.edms.dao.TDED_SUSPECT_REPORTSMapper.selectSR_ID",Integer.parseInt(caseID));
        for (TDED_SUSPECT_REPORTS tded_SUSPECT_REPORTS : suspectReport) {
        	System.out.println(tded_SUSPECT_REPORTS.getSR_ID());
        	TestDataHolder.addTestDataRecord("SUSPECT_REPORT_ID", tded_SUSPECT_REPORTS.getSR_ID().toString(), true, true);
        	break;
		}
        sqlSession.close();
	}
	
	@Then("get a valid caseID from the database table")
	public void get_a_valid_caseID_from_the_database_table() throws Exception {
		SqlSessionFactory sqlSessionFactory = new DatabaseUtils(ConstantsProvider.getENVIRONMENT()).getSessionFactory();
        SqlSession sqlSession = sqlSessionFactory.openSession(true);
        List<TDED_SUSPECT_REPORTS> suspectReport = sqlSession.selectList("ie.gov.agriculture.edms.dao.TDED_SUSPECT_REPORTSMapper.selectSR_CASE_ID");
        for (TDED_SUSPECT_REPORTS tded_SUSPECT_REPORTS : suspectReport) {
        	System.out.println(tded_SUSPECT_REPORTS.getSR_CASE_ID());
        	TestDataHolder.addTestDataRecord("CASE_ID", tded_SUSPECT_REPORTS.getSR_CASE_ID().toString(), true, true);
        	break;
		}
        sqlSession.close();
	}
	
	

}
