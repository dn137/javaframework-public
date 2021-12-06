package com.expleoautomation.runner;

import org.junit.runner.RunWith;
import io.cucumber.junit.CucumberOptions;
import io.cucumber.junit.Cucumber;


@RunWith(Cucumber.class)


@CucumberOptions (
		monochrome = true,
	    features = {"classpath:features/service-features/my.feature",
    		    "classpath:features/service-features/simplekart.feature",
    		    "classpath:features/service-features/simplekart2.feature",
    		    "classpath:features/service-features/simplekart3.feature",
    		    "classpath:features/service-features/simplekart4.feature",
    		    "classpath:features/service-features/simplekart5.feature",
    		    "classpath:features/service-features/simplekart6.feature",
    		    "classpath:features/service-features/simplekart7.feature",
    		    "classpath:features/service-features/simplekart8.feature",
    		    "classpath:features/service-features/simplekart9.feature",
    		    "classpath:features/service-features/simplekart10.feature"  },
    	    glue = {"com.expleoautomation.mystuff",
    	    		"com.expleoautomation.stepdefinitions"},
	    tags = {},
	    
	    plugin = {"pretty", 
	    		  "json:target/jsonReports/cucumber-report.json",
				  "junit:target/cucumber.xml",		
				  "html:target/native-cucumber-report",
				},


	    strict = true
	 )



public class TestRunner2 {

}