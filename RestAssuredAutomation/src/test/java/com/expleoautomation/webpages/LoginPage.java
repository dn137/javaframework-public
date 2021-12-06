package com.expleoautomation.webpages;

import com.expleoautomation.utils.BrowserUtils;
import com.google.common.base.Strings;
import com.paulhammant.ngwebdriver.NgWebDriver;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;

import java.io.IOException;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

 @RequiredArgsConstructor
public class LoginPage
{
	
 private final WebDriver webDriver;	
 
 private NgWebDriver ngwebDriver;
 
  @FindBy(id = "username")
  private WebElement userNameTextField;
  
  @FindBy(id = "password")
  private WebElement passwordTextField;
  
  @FindBy(name = "login")
  private WebElement loginButton;
	  

  public void login(String username, String password) throws Exception
  {
	  BrowserUtils.sendKeysToWebElement(webDriver, userNameTextField,username);
	  BrowserUtils.sendKeysToWebElement(webDriver, passwordTextField,password);
	  //BrowserUtils.sendKeysToWebElement(webDriver, userNameTextField,ConstantsProvider.getUSERNAME());
	  //BrowserUtils.sendKeysToWebElement(webDriver, passwordTextField, ConstantsProvider.getPASSWORD());
	  BrowserUtils.waitAndClickElement(webDriver, loginButton);
	  BrowserUtils.waitForPageLoad(webDriver, 20);
	  BrowserUtils.waitUntilAngular5Ready(webDriver);
  }
  
  
	
	

}
