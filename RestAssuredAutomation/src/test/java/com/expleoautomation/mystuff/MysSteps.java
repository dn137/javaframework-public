package com.expleoautomation.mystuff;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class MysSteps {

	
	private int value = 0;

@Given("that I have {int} {string} {string}")
public void that_I_have_red_balls(Integer int1, String colour, String thing) {
	
	value = 1;
	if (int1>5)
	{
	// do some automation stuff
	}
	else
	{
		// other automation stuff
	}
	
}

@Given("some other precondition")
public void some_other_precondition() {
	// do some automation stuff
	if (value == 1)
	{
	 value = 2;	
	}
	else
	{
	value = 3;	
	}
	
}

@When("I complete action")
public void i_complete_action() {
	System.out.println(value); 
}

@When("some other action")
public void some_other_action() {
	// do some automation stuff
}

@When("yet another action")
public void yet_another_action() {
	// do some automation stuff
}

@Then("I validate the outcomes")
public void i_validate_the_outcomes() {
	// do some automation stuff
}

@Then("check more outcomes")
public void check_more_outcomes() {
	// do some automation stuff
}

}
