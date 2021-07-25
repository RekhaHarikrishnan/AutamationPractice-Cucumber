package com.autamation.helper;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.util.Properties;

public class ConfigurationReader1 {
      public static Properties p;
	
	public ConfigurationReader1() throws Throwable {
		File f = new File("C:\\Users\\ranjithrekha\\eclipse-workspace-new\\Cucumber_Automation1\\src\\test\\java\\com\\automation\\properties\\configuration.properties");
		FileInputStream fis = new FileInputStream(f);
		
		p = new Properties();
		p.load(fis);
				
	}
	
	public String getBrowser() {
		String browser = p.getProperty("browser");
        return browser;  
	}
	
	
	public String getUrl() {
		String url = p.getProperty("url");
        return url;
	}
	
	
	public String getUsername() {
		String username = p.getProperty("username");
        return username; 
	}
	
	
	public String getPassword() {
	    String password = p.getProperty("password");	
        return password;
	}
	
	
}
