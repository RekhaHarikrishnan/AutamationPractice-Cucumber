package com.autamation.helper;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import com.pomclasses.PomAutomation2;
import com.pomclasses.Pom_Actionn;
import com.pomclasses.Pom_Clickk;
import com.pomclasses.Pom_Framee;

public class PageObjectManager1 {
	public static WebDriver driver;

	public PageObjectManager1(WebDriver driver2) {
		this.driver = driver2;
		PageFactory.initElements(driver2, this);
	}

	private PomAutomation2 pa;
	public PomAutomation2 getInsatanceAutomation() {
		pa = new PomAutomation2(driver);
		return pa;
	}
	
	private Pom_Actionn pam;
	public Pom_Actionn getInstanceAction() {
		pam = new Pom_Actionn(driver);
		return pam;

	}
	private Pom_Framee pf;
	public Pom_Framee getInstanceFrame() {
		pf = new Pom_Framee(driver);
		return pf;

	}
	
	Pom_Clickk pc;
	public Pom_Clickk getInstanceClick() {
		pc= new Pom_Clickk(driver);
		return pc;

	}
	
}
