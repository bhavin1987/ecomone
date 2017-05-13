package com.selenium.cucumber.sample;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;
import org.openqa.selenium.JavascriptExecutor;


public class Stepdefination {
	
	WebDriver driver; 
	@Given("^Open Facebook And start application$")
	public void open_Facebook_And_start_application() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.setProperty("webdriver.chrome.driver", "C:\\SeleniumDrivers\\chromedriver.exe");
	    driver = new ChromeDriver();
	    driver.get("https://www.facebook.com/");
	    driver.manage().window().maximize();
	    
	}

	@When("^Enter valid \"([^\"]*)\" And valid \"([^\"]*)\"$")
	public void enter_valid_username_And_valid_password(String uname, String pwd) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    driver.findElement(By.id("email")).sendKeys(uname);
	    driver.findElement(By.id("pass")).sendKeys(pwd);
	}

	@Then("^user should be able to login successfully\\.$")
	public void user_should_be_able_to_login_successfully() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		
		 driver.findElement(By.id("loginbutton")).click();
		 Thread.sleep(5000);
		 ((JavascriptExecutor)driver).executeScript("scroll(0,200)");
		 Thread.sleep(5000);
		 driver.quit();
	}

}
