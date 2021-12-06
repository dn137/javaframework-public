package com.expleoautomation.commons;

/**
 * constants names to be used mainly by the ConstantsProvider. The values of these properties are stored in
 * {@value #CONSTANTS_FILE_NAME}. Some are provided here to standardize names
 *
 * @author youssef.abdalla
 */
public class ConstantsNames {
	
    // preventing instantiation and extension
    private ConstantsNames() {
    }

    public static final String URL = "url";
    public static final String EIRCODE = "eircode";
    public static final String ADDRESS = "address";
    public static final String CONTACTNUMBER = "contactnumber";
    public static final String BASEURL = "baseUrl";
    public static final String USERNAME = "username";
    public static final String SENIORPROFILE_USERNAME = "seniorprofileusername";
    public static final String PASSWORD = "password";
    public static final String CLIENTID = "clientID";
    public static final String GRANT_TYPE = "grantType";
    public static final String ACCESS_TOKEN_URL = "accessTokenURL";
    public static final String SIMPLE_KART_SERVICE_URL = "simpleKartServiceURL";
    public static final String SUSPECT_REPORT_SERVICE_URL = "suspectReportServiceURL";
    public static final String DATA_INTEGRATION_SERVICE_URL = "dataIntegrationServiceURL";		
    public static final String LOOKUPS_SERVICE_URL = "lookUpsServiceURL";	
    public static final String CASES_SERVICE_URL = "casesServiceURL";
    public static final String HOLDINGS_SERVICE_URL = "holdingsServiceURL";
	public static final String SUFFIX_CONNECT = "-connect";
    public static final String SUFFIX_META_DATA = "-meta";
    public static final String SUFFIX_IMAP = "-imap";
    public static final String SUFFIX_IFORIS = "-iforis";
    static final String REST_ASSURED_BASE_URLS_START = "restAssuredBaseUrlsStart";
    static final String REST_ASSURED_BASE_URLS_END = "restAssuredBaseUrlsEnd";
    static final String REST_ASSURED_INET_BASE_URLS_START = "restAssuredInetBaseUrlStart";
    static final String REST_ASSURED_INET_BASE_PATH = "iNetBasePath";
    static final String BASE_PATH = "internalApplicationBasePath";
    static final String JIRA_URL = "jiraUrl";	    // This is the Jira instance used for the iSmart workflow. This is different from Jira instance the one used for controlling issues
    static final String ZAPI_PATH = "zapiPath";
    static final String TEST_CYCLE_NAME = "testcycle";
    static final String USE_SELENIUM_GRID = "seleniumGridOn";
    static final String SELENIUM_VM_IP = "seleniumVmIp";
    static final String SELENIUM_HUB_PORT = "seleniumHubPort";
    static final String SELENIUM_DRIVER_PATH = "seleniumDriverPath";
    static final String LOCAL_FIREFOX_BINARY_ABSOLUTE_PATH = "localFirefoxBinaryAbsolutePath";
    static final String WEB_BROWSER = "browser";
    static final String SSO_LOGIN_URL = "ssoLoginUrl";
    static final String SSO_AGENT_LOGIN_URL = "ssoAgentLoginUrl";
    static final String SSO_LOGIN_USERNAME = "ssoLoginUsername";
    static final String SSO_AGENT_LOGIN_USERNAME = "ssoAgentLoginUsername";
    static final String SSO_LOGIN_PASSWORD_DEV = "ssoLoginPasswordDev";
    static final String SSO_LOGIN_PASSWORD_UAT = "ssoLoginPasswordUat";
    static final String SSO_LOGIN_PASSWORD_CENTEST = "ssoLoginPasswordCentest";
    static final String SSO_LOGIN_PASSWORD_PRELIVE = "ssoLoginPasswordPrelive";
    static final String PROJECT_PARCEL_DELETE_PATH = "projectParcelDeletePath";
    static final String WINDOWS_USER_NAME = "windowsUsername";
    static final String WINDOWS_PASSWORD = "windowsPassword";
    static final String JIRA_USER_NAME = "jiraUsername";
    static final String JIRA_PASSWORD = "jiraPassword";
    static final String JIRA_ASSIGNEE_NAME = "jiraAssigneeName";
	static final String ENVIRONMENT ="environment";
	static final String CONSTANTS_FILE_NAME = "resources/constants.properties";
	static final String ENV_PROPERTIES_FILE_NAME = "resources/config.properties";
	static final String GLOBAL_TIMEOUT_IN_SECONDS = "globalTimeOutInSecs";


}
