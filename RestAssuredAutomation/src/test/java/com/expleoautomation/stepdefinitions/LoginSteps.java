package com.expleoautomation.stepdefinitions;

import java.util.ArrayList;
import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.openqa.selenium.WebDriver;

import com.expleoautomation.commons.ConstantsProvider;
import com.expleoautomation.commons.TestDataHolder;
import com.expleoautomation.stepdefinitions.startandcleansteps.DriverFactory;
import com.expleoautomation.stepdefinitions.startandcleansteps.SharedBrowserSteps;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class LoginSteps extends DriverFactory {
	

       
    public LoginSteps(SharedBrowserSteps sharedBrowsersSteps) {
		super(sharedBrowsersSteps);
		// TODO Auto-generated constructor stub
	}

	@And("^DAFAM user has logged in with valid credentials$")
    public void userLogin() throws Throwable {
    	 loginPage.login(ConstantsProvider.getUSERNAME(),ConstantsProvider.getPASSWORD());
     	 System.out.println(TestDataHolder.getTestDataRecord(TestDataHolder.ENVIRONMENT));
    	 /*SqlSessionFactory sqlSessionFactory = new DatabaseUtils(
    	            TestDataHolder.getTestDataRecord(TestDataHolder.ENVIRONMENT))
    	                .getSessionFactory();*/
      }
	
	@Given("DAFAM senior profile user has logged in with valid credentials")
	public void dafam_senior_profile_user_has_logged_in_with_valid_credentials() throws Exception {
		loginPage.login(ConstantsProvider.getSENIORPROFILE_USERNAME(),ConstantsProvider.getPASSWORD());
	}

  
}
