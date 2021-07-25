package com.automation.runner;

import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;

import com.autamation.helper.FileReaderManager1;
import com.baseclassautomation.BaseeClass;

import cucumber.api.CucumberOptions;

import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src\\test\\java\\com\\automation\\feature\\Automation.feature"
,glue = "com\\automation\\stepdefinition"
,monochrome=true,dryRun=false,strict=true,
tags=("@~SmokeTest,@SanityTest"),
plugin= {"html:Report/Html_Report","pretty",
		"com.cucumber.listener.ExtentCucumberFormatter:Report/extentReport.html"})


public class Runner_Demo1 {
	public static WebDriver driver;
	
	@BeforeClass
	public static  void setUp() throws Throwable {
		String browser = FileReaderManager1.getInstanceFR().getInstanceCR().getBrowser();
		driver = BaseeClass.browserLaunch("Chrome");

	}

}
