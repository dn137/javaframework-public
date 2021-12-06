package com.expleoautomation.webpages;

import com.expleoautomation.utils.BrowserUtils;
import com.google.common.base.Strings;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;

import java.io.IOException;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

@Log4j2
@RequiredArgsConstructor
public class CreatePage {

  private final WebDriver webDriver;
  
  @FindBy(xpath = "//div[@class='suspect-report-module-container']")
  private WebElement createSuspectReportLink;
  
  @FindBy(xpath = "//a[contains(text(),'Create')]")
  private WebElement createLink;
  
  //select list id doesn't has numbers
  @FindBy(xpath = "//mat-select[@placeholder='Disease Type']")
  private WebElement diseaseTypeSelect;
  
  @FindBy(id = "premisesType")
  private WebElement premisesTypeSelect;
  
  //button doesn't have an unique identifier
  @FindBy(xpath = "//span[contains(text(),'Create Suspect Report')]/parent::button")
  private WebElement createsuspectReportButton;
  
  //button doesn't have an unique identifier
  @FindBy(xpath = "//span[contains(text(),'Cancel')]/parent::button")
  private WebElement cancelButton;
  
  @FindBy(xpath = "//span[contains(text(),'Foot & Mouth Disease')]")
  private WebElement diseaseOption;
  
  private WebElement premisesOption;
  
  
  public void selectDiseaseAndClickCreateSuspect(String diseasetype, String premisestype) throws InterruptedException, IOException
  {
	  BrowserUtils.waitAndClickElement(webDriver, createSuspectReportLink);
	  BrowserUtils.waitForAngularLoad(webDriver);
	  BrowserUtils.clickElement(webDriver,diseaseTypeSelect);
	  diseaseOption = webDriver.findElement(By.xpath("//span[contains(text(),'"+diseasetype+"')]"));
	  BrowserUtils.waitAndClickElement(webDriver,diseaseOption);
	  BrowserUtils.waitAndClickElement(webDriver,premisesTypeSelect);
	  premisesOption = webDriver.findElement(By.xpath("//span[contains(text(),'"+premisestype+"')]"));
	  BrowserUtils.waitAndClickElement(webDriver,premisesOption);
	  BrowserUtils.waitAndClickElement(webDriver,createsuspectReportButton);

  }
  
  public void selectDiseaseType(String diseasetype) throws InterruptedException, IOException
  {
	  BrowserUtils.clickElement(webDriver, createSuspectReportLink);
	  BrowserUtils.waitForAngularLoad(webDriver);
	  BrowserUtils.waitAndClickElement(webDriver,diseaseTypeSelect);
	  diseaseOption = webDriver.findElement(By.xpath("//span[contains(text(),'"+diseasetype+"')]"));
	  BrowserUtils.waitAndClickElement(webDriver,diseaseOption);
	  
  }
  
  public void selectPremisesType(String premisestype) throws InterruptedException, IOException
  {
	  BrowserUtils.waitAndClickElement(webDriver,premisesTypeSelect);
	  premisesOption = webDriver.findElement(By.xpath("//span[contains(text(),'"+premisestype+"')]"));
	  BrowserUtils.waitAndClickElement(webDriver,premisesOption);
	  
  }
  
  public void clickCreateSuspectReport() throws InterruptedException, IOException
  {
	  BrowserUtils.waitAndClickElement(webDriver,createsuspectReportButton);
	  BrowserUtils.waitForPageLoad(webDriver, 30);
	  BrowserUtils.waitUntilAngular5Ready(webDriver);
	  
  }
  
  



}
