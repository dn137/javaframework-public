package com.expleoautomation.webpages;

import com.expleoautomation.utils.BrowserUtils;
import com.google.common.base.Strings;
import com.paulhammant.ngwebdriver.NgWebDriver;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;

import java.io.IOException;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedConditions;

 @RequiredArgsConstructor
public class HomePage
{
	
 private final WebDriver webDriver;	
 

  @FindBy(xpath = "//a[contains(text(),'Home')]")
  private WebElement homeLink;
  
  @FindBy(xpath = "//mat-icon[text()='menu_open']")
  private WebElement menuOpenLink;
  
  @FindBy(xpath = "//mat-icon[text()='menu_open']/following-sibling::span[text()='Collapse Menu']")
  private WebElement menuCollapseLink;
  
  private By menuItemLinkBy;

  private WebElement menuItemLink;
	  

  public void nagivateToHomePage() throws Exception
  {
      BrowserUtils.waitAndClickElement(webDriver, homeLink);
	  BrowserUtils.waitUntilAngular5Ready(webDriver);
  }
  
  public void navigateToMenuItem(String menuName) throws InterruptedException, IOException
  {	  
	  menuItemLinkBy = By.xpath("//span[text()='"+menuName+"']/preceding-sibling::mat-icon/parent::a");
	
	  if (BrowserUtils.IsElementPresent(webDriver, menuItemLinkBy)) {
		  menuItemLink = webDriver.findElement(menuItemLinkBy);
		  BrowserUtils.clickElement(webDriver, menuItemLink);
		}
	  else {
		 BrowserUtils.clickElement(webDriver, menuOpenLink); 
		 menuItemLink = webDriver.findElement(menuItemLinkBy);
		 BrowserUtils.clickElement(webDriver, menuItemLink);
	}
  }
  
  public String getCaseIDFromURL()
  {
	  String URL = webDriver.getCurrentUrl();
	  String[] strURLArry = URL.split("/");
	  String caseID =  strURLArry[4];
	  System.out.println(caseID);
	  return caseID;
  }
  
  
	
	

}