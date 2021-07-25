package com.autamation.helper;

public class FileReaderManager1 {
	public FileReaderManager1() {
		
	}
  public static FileReaderManager1 getInstanceFR() {
	FileReaderManager1 fr = new FileReaderManager1();
	return fr;
	
	}
  
  //configurationReader consturctor object
  
  public ConfigurationReader1 getInstanceCR() throws Throwable {
	ConfigurationReader1 cr = new ConfigurationReader1();
    return cr;
}
}