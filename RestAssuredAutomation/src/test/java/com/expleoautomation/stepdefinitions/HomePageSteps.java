package com.expleoautomation.stepdefinitions;

import java.io.IOException;

import org.openqa.selenium.WebDriver;

import com.expleoautomation.commons.TestDataHolder;
import com.expleoautomation.stepdefinitions.startandcleansteps.DriverFactory;
import com.expleoautomation.stepdefinitions.startandcleansteps.SharedBrowserSteps;
import com.expleoautomation.utils.BrowserUtils;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class HomePageSteps extends DriverFactory {
	

       
    public HomePageSteps(SharedBrowserSteps sharedBrowsersSteps) {
		super(sharedBrowsersSteps);
		// TODO Auto-generated constructor stub
	}

	@And("user navigates to home page")
	public void user_navigates_to_home_page() throws Exception {
		homePage.nagivateToHomePage();
	}
	
	@Given("user navigates to the menuitem {string}")
	public void user_navigates_to_the_menuitem(String menuItem) throws InterruptedException, IOException {
         
		homePage.navigateToMenuItem(menuItem);
		BrowserUtils.waitForPageLoad(driver, 60);
	}
	
	@Then("get the caseID from the URL")
	public void get_the_caseID_from_the_URL() {
		
	  //homePage.getCaseIDFromURL() 
	  TestDataHolder.addTestDataRecord("CASE_ID",homePage.getCaseIDFromURL(), true,true);
	  System.out.println("case id is"+TestDataHolder.getTestDataRecord("CASE_ID"));
	}
	
	

  
}
