package com.automation.stepdefinition;

import org.openqa.selenium.WebDriver;

import com.autamation.helper.FileReaderManager1;
import com.autamation.helper.PageObjectManager1;
import com.automation.runner.Runner_Demo1;
import com.baseclassautomation.BaseeClass;
import com.pomclasses.PomAutomation2;
import com.pomclasses.Pom_Actionn;
import com.pomclasses.Pom_Clickk;
import com.pomclasses.Pom_Framee;

import cucumber.api.java.en.*;

public class StepDefinition extends BaseeClass{
	
	public static WebDriver driver = Runner_Demo1.driver;	
	
	PageObjectManager1 pom = new PageObjectManager1(driver);
	//PomAutomation2 pa = new PomAutomation2(driver);
	
	@Given("^user click the signin button to enter the login page$")
	public void user_click_the_signin_button_to_enter_the_login_page() throws Throwable {
	   
		String url = FileReaderManager1.getInstanceFR().getInstanceCR().getUrl();
		openUrl(url);
	   //openUrl("http://automationpractice.com/index.php");
	  //clickTheButton(pa.getSignIn());
		clickTheButton(pom.getInsatanceAutomation().getSignIn());
	}
	@When("^user enter the valid \"([^\"]*)\" in the username field$")
	public void user_enter_the_valid_in_the_username_field(String arg1) throws Throwable {
	  //sendTheValues(pa.getEmail(), arg1); 
	  sendTheValues(pom.getInsatanceAutomation().getEmail(), arg1);
	}

	@When("^user enter the valid \"([^\"]*)\" in the password field$")
	public void user_enter_the_valid_in_the_password_field(String arg1) throws Throwable {
	    //sendTheValues(pa.getPassword(), arg1);
	    sendTheValues(pom.getInsatanceAutomation().getPassword(), arg1);
	}

	//@When("^user enter the valid username in the username field$")
	//public void user_enter_the_valid_username_in_the_username_field() throws Throwable {
	 // sendTheValues(pa.getEmail(), "vibin123@gmail.com");
	//}

	//@When("^user enter the valid password in the password field$")
	//public void user_enter_the_valid_password_in_the_password_field() throws Throwable {
	    //sendTheValues(pa.getPassword(), "jenishaa");
	//}

	@Then("^user confirm it by clicking login button and navigated to the MyAccount page$")
	public void user_confirm_it_by_clicking_login_button_and_navigated_to_the_MyAccount_page() throws Throwable {
	    //clickTheButton(pa.getLogIn());
	    clickTheButton(pom.getInsatanceAutomation().getLogIn());
	}
    //Pom_Actionn pam = new Pom_Actionn(driver);
	@Given("^user  must click the login button$")
	public void user_must_click_the_login_button() throws Throwable {
	    
	}

	@When("^user drag the mouse to the women button to do mouse over action$")
	public void user_drag_the_mouse_to_the_women_button_to_do_mouse_over_action() throws Throwable {
	   // mouseOverAction(pam.getWomen());
	    mouseOverAction(pom.getInstanceAction().getWomen());
	}

	@When("^user click te Tops button$")
	public void user_click_te_Tops_button() throws Throwable {
	    //clickTheButton(pam.getTops());
	    clickTheButton(pom.getInstanceAction().getTops());
	}

	@When("^user click the image quick view$")
	public void user_click_the_image_quick_view() throws Throwable {
	   implicitlyWaitMethod();
		//clickTheButton(pam.getImage());
		clickTheButton(pom.getInstanceAction().getImage());
	}

	@Then("^user confirm it by clicking the image button and navigated to the frame$")
	public void user_confirm_it_by_clicking_the_image_button_and_navigated_to_the_frame() throws Throwable {
	    
	}
    //Pom_Framee pf = new Pom_Framee(driver);
	@Given("^user click the image$")
	public void user_click_the_image() throws Throwable {
	    
	}

	@When("^user enter in to the frame$")
	public void user_enter_in_to_the_frame() throws Throwable {
	   // frameUsingIndex(0);
	    frameUsingIndex(0);
	}

	@When("^user click the add to cart button$")
	public void user_click_the_add_to_cart_button() throws Throwable {
	    //clickTheButton(pf.getAddToCart());
	    clickTheButton(pom.getInstanceFrame().getAddToCart());
	}

	@Then("^user confirm it by clicking the proceed checkout button and navigated to the cart$")
	public void user_confirm_it_by_clicking_the_proceed_checkout_button_and_navigated_to_the_cart() throws Throwable {
	    
	}

	//Pom_Clickk pc = new Pom_Clickk(driver);
	@Given("^user click the checkout button$")
	public void user_click_the_checkout_button() throws Throwable {
	   Thread.sleep(5000);
		//clickTheButton(pc.getProceed());
		clickTheButton(pom.getInstanceClick().getProceed());
	}

	@When("^user click the checkout button to continue te shopping$")
	public void user_click_the_checkout_button_to_continue_te_shopping() throws Throwable {
	   Thread.sleep(5000);
		//clickTheButton(pc.getProceed1());
		clickTheButton(pom.getInstanceClick().getProceed1());
	}

	@When("^user click the checkout button to confim the address$")
	public void user_click_the_checkout_button_to_confim_the_address() throws Throwable {
	    Thread.sleep(5000);
		//clickTheButton(pc.getProceed2());
		clickTheButton(pom.getInstanceClick().getProceed2());
	}

	@When("^user click the checkbox$")
	public void user_click_the_checkbox() throws Throwable {
	    Thread.sleep(5000);
		//clickCheckBox(pc.getCheckBox());
		clickCheckBox(pom.getInstanceClick().getCheckBox());
	}

	@When("^user click the checkout button for shipping process$")
	public void user_click_the_checkout_button_for_shipping_process() throws Throwable {
	    Thread.sleep(5000);
		//clickTheButton(pc.getProceed3());
		clickTheButton(pom.getInstanceClick().getProceed3());
	}

	@When("^user click the bank mode to choose payment method$")
	public void user_click_the_bank_mode_to_choose_payment_method() throws Throwable {
	   Thread.sleep(5000);
		//clickTheButton(pc.getBank());
		clickTheButton(pom.getInstanceClick().getBank());
	}

	@Then("^user click confirm button to confirm the order and navigated to order confirmation$")
	public void user_click_confirm_button_to_confirm_the_order_and_navigated_to_order_confirmation() throws Throwable {
	    Thread.sleep(5000);
		//clickTheButton(pc.getConfirm());
		clickTheButton(pom.getInstanceClick().getConfirm());
	}



}
