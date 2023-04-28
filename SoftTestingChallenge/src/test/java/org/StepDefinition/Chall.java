package org.StepDefinition;

import java.awt.AWTException;
import java.awt.Robot;
import java.awt.event.KeyEvent;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

public class Chall {

	WebDriver d;

@When("launch the Softound Url")
public void launch_the_Softound_Url() {
	d.get("https://softound.com/challenges/challenge2.php");
}

@Then("Enter the {string}FirstName")
public void enter_the_FirstName(String f) {
	WebElement first = d.findElement(By.name("first_name"));
	first.sendKeys(f);
}

@Then("Enter the {string}LastName")
public void enter_the_LastName(String l) {
	WebElement last = d.findElement(By.name("last_name"));
	last.sendKeys(l);
}

@Then("Enter the {string}EmailAddress")
public void enter_the_EmailAddress(String e) {
	WebElement email = d.findElement(By.name("email"));
	email.sendKeys(e);
}

@Then("select Your {string}BirthDate")
public void select_Your_BirthDate(String date) throws InterruptedException {
	WebElement DOB = d.findElement(By.name("dob"));
	DOB.sendKeys(date);
	Thread.sleep(500);
}

@Then("click SubmitButton")
public void click_SubmitButton() {
	WebElement sub = d.findElement(By.name("submit"));
	sub.click();
}
@Then("Print The Submission Message")
public void print_The_Submission_Message() {
	WebElement text = d.findElement(By.tagName("Body"));
	String txt = text.getText();
	System.out.println(txt);
}

@Given(": launch the browser")
public void launch_the_browser() {
	WebDriverManager.chromedriver().setup();
	d = new ChromeDriver();
	d.manage().window().maximize();
}

@Then("close the Browser")
public void close_the_Browser() throws InterruptedException {
	System.out.println("values Entered");
	Thread.sleep(3000);
	d.close();
}
}
