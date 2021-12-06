package com.expleoautomation.stepdefinitions.startandcleansteps;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import com.expleoautomation.webpages.CreatePage;
import com.expleoautomation.webpages.HomePage;
import com.expleoautomation.webpages.LoginPage;
import com.paulhammant.ngwebdriver.NgWebDriver;
import lombok.RequiredArgsConstructor;

//@RequiredArgsConstructor
public class DriverFactory {
public WebDriver driver;
public NgWebDriver ngwebDriver;
public JavascriptExecutor js;
public LoginPage loginPage;
public HomePage homePage;
public CreatePage createPage;


public SharedBrowserSteps sharedBrowsersSteps;


public DriverFactory(SharedBrowserSteps sharedBrowsersSteps)
{
  this.sharedBrowsersSteps = sharedBrowsersSteps;
  driver = returnWebDriver();
  ngwebDriver = returnNgWebDriver();
  loginPage  = PageFactory.initElements(driver, LoginPage.class);
  homePage   = PageFactory.initElements(driver, HomePage.class);
  createPage = PageFactory.initElements(driver, CreatePage.class);
}
	
	public WebDriver returnWebDriver()
	{
		driver = sharedBrowsersSteps.getWebDriver();
		return driver;
	}
	
	public NgWebDriver returnNgWebDriver()
	{
		ngwebDriver = sharedBrowsersSteps.getNgwebDriver();
		return ngwebDriver;
		
		
	}

	

}
