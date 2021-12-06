package com.expleoautomation.runner;

import org.junit.runner.RunWith;
import io.cucumber.junit.CucumberOptions;
import io.cucumber.junit.Cucumber;



@RunWith(Cucumber.class)

// find undefined scenarios
@CucumberOptions (dryRun=true,
features = {"classpath:features/service-features/my.feature",
	    "classpath:features/service-features/simplekart.feature",
	    "classpath:features/service-features/simplekart.feature2",
	    "classpath:features/service-features/simplekart.feature3",
	    "classpath:features/service-features/simplekart.feature4",
	    "classpath:features/service-features/simplekart.feature5",
	    "classpath:features/service-features/simplekart.feature6",
	    "classpath:features/service-features/simplekart.feature7",
	    "classpath:features/service-features/simplekart.feature8",
	    "classpath:features/service-features/simplekart.feature9",
	    "classpath:features/service-features/simplekart.feature10"  }
)



public class DryRunner {
	
		
}