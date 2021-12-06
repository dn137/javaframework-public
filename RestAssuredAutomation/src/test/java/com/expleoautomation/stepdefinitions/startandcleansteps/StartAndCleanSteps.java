package com.expleoautomation.stepdefinitions.startandcleansteps;

import java.io.IOException;
import java.math.BigDecimal;
import java.util.Collection;
import java.util.List;
import java.util.Set;

import org.apache.commons.lang3.StringUtils;
import org.apache.ibatis.datasource.pooled.PooledDataSource;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.assertj.core.api.Assumptions;
import org.junit.Assume;
import org.openqa.selenium.Cookie;
import org.openqa.selenium.WebDriver;

import com.expleoautomation.commons.AllowedEnvironments;
import com.expleoautomation.commons.ConstantsProvider;
import com.expleoautomation.commons.EnvironmentHandler;
import com.expleoautomation.commons.ScreenshotsFromSteps;
import com.expleoautomation.commons.TestDataHolder;
import com.google.common.base.Strings;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.*;
import io.cucumber.java.PendingException;
import io.cucumber.java.Scenario;
import io.restassured.RestAssured;
import io.restassured.config.EncoderConfig;
import io.restassured.config.SessionConfig;
import lombok.AllArgsConstructor;
import lombok.NonNull;
import lombok.extern.log4j.Log4j2;

/**
 * Steps Before And After Scenarios all scenarios
 *
 * @author youssef.abdalla
 */
@Log4j2
@AllArgsConstructor
public class StartAndCleanSteps {


    /**
     * Configure {@link RestAssured} before testing for INET applications. Including the collection of the cookies
     * 'DAFSSO' by first logon to SSO and setting the base URL
     */
    //@Before(value = { "@inet", "@api" }, order = 1)
    @Before(value = "@inet", order = 1)
    public void configureRestAssuredInet() throws Exception {
        String environment = TestDataHolder.getTestDataRecord(TestDataHolder.ENVIRONMENT);
        log.debug("Environment: " + environment);
        TestDataHolder.addTestDataRecord(TestDataHolder.ENVIRONMENT, environment, true, true);
        RestAssured.useRelaxedHTTPSValidation();
        configureRestAssuredSessionAndBaseUri(environment, true);
        RestAssured.basePath = ConstantsProvider.getREST_ASSURED_INET_BASE_PATH();
    }
    
    public void launchEDMSApplication()
    {
    	SharedBrowserSteps sharedBrowserSteps = new SharedBrowserSteps();
    	String env = TestDataHolder.getTestDataRecord(TestDataHolder.ENVIRONMENT);
    	String url = EnvironmentHandler.getEnvironmentBaseUrl(env);
        log.debug("URL: " + url);
        sharedBrowserSteps.getWebDriver().get(url);
    }

    private void configureRestAssuredSessionAndBaseUri(@NonNull String environment, boolean isForInet) throws Exception {

        SharedBrowserSteps sharedBrowserSteps = new SharedBrowserSteps();
        sharedBrowserSteps.startHeadlessChromeForCookiesRetriev();
        WebDriver webDriverForApiTest = sharedBrowserSteps.getWebDriver();
        try {
           /* if (isForInet) {
                new LoginFlow(sharedBrowserSteps).asAgent().clickLpisUrlAsAgent();
            } else {
                new LoginFlow(sharedBrowserSteps).asStaff().clickLpisUrl();
            }*/
            Set<Cookie> browserCookies = webDriverForApiTest.manage().getCookies();
            String dafSsoVal = null;
            String jessionIdVal = null;
            for (Cookie cookie : browserCookies) {
                String cookieName = cookie.getName();
                String cookieValue = cookie.getValue();
                if (cookieName.equals("DAFSSO")) {
                    dafSsoVal = cookieValue;
                }
                if (cookieName.equals("JSESSIONID")) {
                    jessionIdVal = cookieValue;
                }
            }
            log.debug("DAFSSO value is: " + dafSsoVal);
            log.debug("JESESSIONID value is: " + jessionIdVal);
            log.debug("Configure RestAssured");
            SessionConfig sessionConfig = new SessionConfig("DAFSSO", dafSsoVal);
            RestAssured.config = RestAssured.config()
                .encoderConfig(EncoderConfig.encoderConfig().defaultContentCharset("UTF-8"))
                .sessionConfig(sessionConfig);
            RestAssured.baseURI = EnvironmentHandler.getEnvironmentBaseUrl(environment, isForInet);
            RestAssured.given().cookie("JSESSIONID", jessionIdVal).log().all();
        } finally {
            if (webDriverForApiTest != null) {
                webDriverForApiTest.quit();
            }
        }
    }

    /**
     * Configure {@link RestAssured} for internal application testing
     */
    //@Before(value = { "@api", "not @inet" }, order = 2)
    @Before(value = "@api", order = 2)
    public void configureRestAssured() throws Exception {
        String environment = TestDataHolder.getTestDataRecord(TestDataHolder.ENVIRONMENT);
        log.debug("Environment: " + environment);
        RestAssured.useRelaxedHTTPSValidation();
        configureRestAssuredSessionAndBaseUri(environment, false);
        RestAssured.basePath = ConstantsProvider.getBASE_PATH();
    }

    /**
     * Force the environment for the scenario about to start to be 'DEV' regardless of the rest of the scenarios. This
     * is the same as setting the default environment to 'DEV' in the properties file.
     */
    @Before(value = "@dev-only", order = 1)
    public void setEnvironmentToDev() {
        String env = AllowedEnvironments.parseTestEnvironmentFromString(System.getProperty("env"));
        if (Strings.isNullOrEmpty(env)) {
            env = AllowedEnvironments.ENVIRONMENT_DEV;
        }
        log.debug("scenario should run on " + env);
        TestDataHolder.addTestDataRecord(TestDataHolder.ENVIRONMENT, env, true, true);
    }

    /**
     * Resets all test data lines in {@link TestDataHolder} and extract the Test ID in JIRA by scanning for the tag
     * '@Test#'
     */
    /*@Before(order = 0)
    public void prepareForScenario(Scenario scenario) {
        log.debug("start of test scenario: " + scenario.getName());
        // KillLegacyProcesses();
        TestDataHolder.resetAllDataValues();
        // extractJiraIssueId(scenario, "Test");
        extractJiraIssueId(scenario, "tmsLink");
    }*/

   /* @Before()
    public void listOpenDatabaseSessions() throws Exception {
        new DatabaseUtils(TestDataHolder.getTestDataRecord(TestDataHolder.ENVIRONMENT)).listOpenDatabaseSessions();

    }*/

    @SuppressWarnings("unused")
    private void KillLegacyProcesses() {
        // NOTE - these do not close the open db sessions
        Runtime rt = Runtime.getRuntime();
        try {
            log.info("Killing legacy browser processes");
            if (!ConstantsProvider.isSELENIUM_GRID_ACTIVE()) {
                rt.exec("taskkill /f /im iexplore.exe");
                rt.exec("taskkill /f /im IEDriverServer-32-3.9.0.exe");
                rt.exec("taskkill /f /im firefox.exe");
                rt.exec("taskkill /f /im geckodriver-64bits.exe");
                rt.exec("taskkill /f /im chrome.exe");
                rt.exec("taskkill /f /im chromedriver.exe");
            }
        } catch (IOException e) {
            e.printStackTrace();
            log.info("Continuing anyway despite exception thrown in KillLegacyProcesses()");
        }
    }

    private String extractJiraIssueId(Scenario scenario, String tagPrefix) {
        Collection<String> sourceTagNames = scenario.getSourceTagNames();
        sourceTagNames.forEach(tag -> log.debug("scenario has tag: " + tag));
        String tagContainsPrefix = sourceTagNames.stream().filter(tag -> tag.contains(tagPrefix))
            .findFirst().orElse("");
        // String testId = StringUtils.substringAfter(tagContainsPrefix, "#");
        String testId = StringUtils.substringAfter(tagContainsPrefix, "=");
        log.debug("Test ID: " + testId);
        TestDataHolder.addTestDataRecord(TestDataHolder.ZEPHYR_TEST_ID, testId, true, true);
        return testId;
    }

    /**
     * makes sure that scenarios marked as @ignore are skipped
     */
    @Before(value = "@ignore", order = 0)
    public void skipIgnoredScenario() {
        log.debug("skipping scenario");
        Assume.assumeTrue("Running scenario with @ignore tags?", false);
    }

    /*@After(value = "@qaqc", order = 2)
    public void deleteProjectAfterQAQCScenarios() throws Exception {
        String projectId = TestDataHolder.getTestDataRecord(TestDataHolder.PROJECT_ID);
        String parcelId = TestDataHolder.getTestDataRecord(TestDataHolder.PARCEL_ID);
        //new StoredProcedureSteps();
        ParcelUtils.deleteProjectParcelUsingSp(projectId, parcelId);
        ParcelUtils.deleteProjectUsingDbSp(projectId);
    }*/

    

    /**
     * Reports the test status to Jira after the test ends
     */
    //@After(order = 0)
    @After
    public void tearDownScenario(Scenario scenario) throws Exception {
        RestAssured.reset();
        log.debug("End of test scenario: " + scenario.getName());
        /*final Set<String> keys = TestDataHolder.getTestDataMap().keySet();
        String testdataLines = "";
        final Iterator<String> keysIterator = keys.iterator();
        while (keysIterator.hasNext()) {
            final String key = keysIterator.next();
            final String value = TestDataHolder.getTestDataRecord(key) + System.lineSeparator();
            testdataLines += key + ": " + value;
        }*/
        String testdataLines = "test";
        //scenario.write(testdataLines);
        addScreenShotToScenarioIfFound(scenario);
        //reportToJira(scenario, testdataLines);
        log.debug("End of test scenario: " + scenario.getName());
    }

    private void addScreenShotToScenarioIfFound(Scenario scenario) {
        final byte[] imageAsByteArray = ScreenshotsFromSteps.getImageAsByteArray();
        final List<byte[]> imagesAsByteArrays = ScreenshotsFromSteps.getImagesAsByteArrays();
        if (imageAsByteArray != null) {
            log.debug("adding screenshot to report");
            scenario.attach(imageAsByteArray, "image/png",scenario.getName());
        }
        if (imagesAsByteArrays != null) {
            log.debug("adding all screenshots to report");
            imagesAsByteArrays.forEach(image -> {
                if (image != null) {
                    log.debug("embed image in scenario result");
                    scenario.attach(image, "image/png",scenario.getName());
                }
            });
        }
        ScreenshotsFromSteps.setImageAsByteArray(null);
        ScreenshotsFromSteps.setImagesAsByteArrays(null);
    }

    /*private void reportToJira(Scenario scenario, String executionComment) throws Exception {
        String tagPrefix = "tmsLink";
        String testId = extractJiraIssueId(scenario, tagPrefix);
        if (!Strings.isNullOrEmpty(testId)) {
            try (JiraZephyrClient jiraClient = new JiraZephyrClient(ConstantsProvider.getJIRA_USER_NAME(),
                ConstantsProvider.getJIRA_PASSWORD())) {
                Issue testIssue = jiraClient.findIssue(testId);
                String projectId = testIssue.getProject().getId().toString();
                String testcaseId = testIssue.getId().toString();
                String cycleId = jiraClient.getExecutionCycleByProjectIdAndCycleNames(projectId,
                    ConstantsProvider.getTEST_CYCLE_NAME());
                String executionId = jiraClient.createNewExecution(cycleId, testcaseId, projectId);
                Collection<String> tagsCollection = scenario.getSourceTagNames();
                Set<String> tags = new HashSet<>(tagsCollection);
                tags.remove(tags.stream().filter(tag -> tag.contains(tagPrefix)).findFirst().get());
                String statusToZephyr = convertScenarioStatusToZephyrStatus(scenario);
                jiraClient.updateExecutionStatus(executionId, statusToZephyr, executionComment);
                // tags.add("Automation");
                // jiraClient.updateTestLabelsInJira(testId, tags);
            }
            RestAssured.reset();
        }
    }*/

    private String convertScenarioStatusToZephyrStatus(Scenario scenario) {
        String scenarioStatus = scenario.getStatus().toString();
        log.debug("Scenario Status: " + scenario.getStatus());
        String statusToZephyr = null;
        // DN - switch to UpperCase
        switch (scenarioStatus.toUpperCase()) {
	        case "PASSED":	statusToZephyr = ConstantsProvider.EXECUTION_STATUS_PASS;		break;
	        case "FAILED":	statusToZephyr = ConstantsProvider.EXECUTION_STATUS_FAIL;		break;
	        case "PENDING":
	        case "SKIPPED":	statusToZephyr = ConstantsProvider.EXECUTION_STATUS_BLOCKED;	break;
	        default:		statusToZephyr = ConstantsProvider.EXECUTION_STATUS_UNEXECUTED;
        }
        return statusToZephyr;
    }

}
