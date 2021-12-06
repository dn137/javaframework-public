package com.expleoautomation.stepdefinitions;

import java.io.IOException;

import com.expleoautomation.stepdefinitions.startandcleansteps.DriverFactory;
import com.expleoautomation.stepdefinitions.startandcleansteps.SharedBrowserSteps;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.When;

public class CreatePageSteps extends DriverFactory {
	
	public CreatePageSteps(SharedBrowserSteps sharedBrowsersSteps) {
		super(sharedBrowsersSteps);
		// TODO Auto-generated constructor stub
	}

	@Given("^user selects a \"([^\"]*)\"$")
    public void user_selects_a_disease_type(String diseasetype ) throws InterruptedException, IOException {
		
		createPage.selectDiseaseType(diseasetype);
    }
	
	@And("^user selects a premises type \"([^\"]*)\"$")
    public void user_selects_a_premises_type(String premisestype ) throws InterruptedException, IOException {
		
        createPage.selectPremisesType(premisestype);
    }

    @When("^the user clicks on the Create Suspect Report button$")
    public void the_user_clicks_on_the_create_suspect_report_button() throws Throwable {
       createPage.clickCreateSuspectReport();
    }
    

}
