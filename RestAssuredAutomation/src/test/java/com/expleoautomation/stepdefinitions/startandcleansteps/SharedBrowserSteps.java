package com.expleoautomation.stepdefinitions.startandcleansteps;

import java.time.Duration;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Sleeper;

import com.expleoautomation.commons.ConstantsProvider;
import com.expleoautomation.commons.EnvironmentHandler;
import com.expleoautomation.utils.SeleniumDriverProvider;
import com.paulhammant.ngwebdriver.NgWebDriver;

import io.cucumber.java.PendingException;
import io.cucumber.java.Scenario;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.*;
import lombok.Getter;
import lombok.extern.log4j.Log4j2;

/**
 * General steps for browser based tests.
 */
@Log4j2
public class SharedBrowserSteps {

    @Getter
    private WebDriver webDriver; 
    
    @Getter
    private NgWebDriver ngwebDriver; 
    

    /**
     * Tagging the scenario with @ui-firefox will cause the firefox browser to start before the scenario starts. 
     * Same, if the step 'using browser firefox' is in the scenario firefox will start.
     */
    @Before("@ui-firefox")
    @Given("^using browser firefox$")
    public void startBrowserFf() throws Exception {
        log.debug("starting browser firefox");
        webDriver = new SeleniumDriverProvider().getWebDriver("firefox", ConstantsProvider.isSELENIUM_GRID_ACTIVE(), false);
    }

    /**
     * Tagging the scenario with @ui-ie will cause the IE browser to start before the scenario starts. 
     * Same, If the step 'using browser IE' is in the scenario IE will start.
     */
    @Before("@ui-ie")
    @Given("^using browser IE$")
    public void startBrowserIe() throws Exception {
        log.debug("starting browser IE");
        webDriver = new SeleniumDriverProvider().getWebDriver("ie", ConstantsProvider.isSELENIUM_GRID_ACTIVE(), false);
    }

    /**
     * Tagging the scenario with @ui-chrome will cause the chrome browser to start before the scenario starts. 
     * Same, If the step 'using browser chrome' is in the scenario chrome will start.
     */
    @Before("@ui-chrome")
    @Given("^using browser chrome$")
    public void startBrowserChrome() throws Exception {
        log.debug("starting browser chrome");
        webDriver = new SeleniumDriverProvider().getWebDriver("chrome", ConstantsProvider.isSELENIUM_GRID_ACTIVE(), false);
    }

    /**
     * starts default browser as from constants.properties
     */
    @Before("@ui")
     public void startBrowser() throws Exception {
        log.debug("starting browser");
        webDriver = new SeleniumDriverProvider().getWebDriver("chrome", true, true);
        //webDriver = new SeleniumDriverProvider()
                //.getLocalWebDriver("chrome",false);
        JavascriptExecutor js = (JavascriptExecutor)webDriver;
        ngwebDriver = new NgWebDriver(js);
        String url = EnvironmentHandler.getUrl();
        log.debug("URL: " + url);
        webDriver.manage().deleteAllCookies();
        webDriver.get(url); 
        webDriver.manage().window().maximize();
      }

    /**
     * starts the default browser with Logs enabled for logs inspection
     */
    @Before("@ui-with-logs")
    public void startBrowserWithLogs() throws Exception {
        log.debug("starting browser with logs");
        webDriver = new SeleniumDriverProvider().getWebDriver("chrome", ConstantsProvider.isSELENIUM_GRID_ACTIVE(), true);
    }

    /**
     * Takes screenshot after scenario ends regardless of status
     */
    @After(order = 5)
    public void takeScreenshotAfterTest(Scenario scenario) {
        try {
			log.debug("take screenshot after scenario: " + scenario.getName());
			if (null != webDriver) {
			    final byte[] screenshot = ((TakesScreenshot) webDriver).getScreenshotAs(OutputType.BYTES);
			    log.debug("embedding the screenshot");
			     scenario.attach(screenshot, "image/jpeg",scenario.getName());
			    //scenario.embed(screenshot, "image/png",);
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println(e.getMessage());
		}
    }

    /**
     * Quitting the browser after the test
     */
   /* @After(order = 4)
    public void quitBrowser() {
        log.debug("quit browser if found");
        if (webDriver != null) {
            webDriver.quit();
        }
    }*/

    @And("^browser page is reloaded$")
    public void reloadPage() throws InterruptedException {
        log.debug("wait 15 seconds before refresh the page");
        Sleeper.SYSTEM_SLEEPER.sleep(Duration.ofSeconds(15));
        log.debug("reload page..");
        webDriver.navigate().refresh();
        log.debug("reload page done!");
        log.debug("wait 10 seconds after refresh the page");
        Sleeper.SYSTEM_SLEEPER.sleep(Duration.ofSeconds(10));
        log.debug("Ready to continue with test!");
    }

    @Then("^Incomplete Test Exception$")
    public void incomplete_test_exception() throws Throwable {
        throw new PendingException("This test script has not been completed");
    }

    void startHeadlessChromeForCookiesRetriev() throws Exception {
        log.debug("starting chrome as headless");
        webDriver = new SeleniumDriverProvider().getWebDriver("chrome-headless", ConstantsProvider.isSELENIUM_GRID_ACTIVE(), false);
    }

}
