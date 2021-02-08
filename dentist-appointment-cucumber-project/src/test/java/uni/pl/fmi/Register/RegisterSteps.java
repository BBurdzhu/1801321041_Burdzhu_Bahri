package uni.pl.fmi.Register;

import static org.junit.Assert.assertEquals;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class RegisterSteps {
	
	RegisterPageModel registerPageModel = new RegisterPageModel();
	
	@Given("^Потребителя отваря началната страница$")
	public void openRegisterScreen() throws Throwable {
	    registerPageModel.navigateToMe();
	}

	@Given("^Отваря се форма за регистрация в системата$")
	public void openRegisterForm() throws Throwable {
	    registerPageModel.navigateMeToForm();
	}

	@When("^Потребилеля въвежда име \"([^\"]*)\"$")
	public void addUsername(String username) throws Throwable {
	   registerPageModel.setUsername(username);
	}

	@When("^Потребителя въвежда парола \"([^\"]*)\"$")
	public void addPassword(String password) throws Throwable {
	    registerPageModel.setPassword(password);
	}

	@When("^Потребителя въвежда телефонен номер \"([^\"]*)\"$")
	public void addPhone(String phone) throws Throwable {
	    registerPageModel.setPhone(phone);
	}

	@When("^Потребителя въвежда е-mail \"([^\"]*)\"$")
	public void setEmail(String email) throws Throwable {
	   registerPageModel.setEmail(email);
	}

	@When("^Натиска бутона за регистрация?$")
	public void clickRegisterButton() throws Throwable {
	    registerPageModel.clickRegisterButton();
	}

	@Then("^Вижда съобщение \"([^\"]*)\"$")
	public void viewRegisterMessage(String message) throws Throwable {
	    assertEquals(message, registerPageModel.getRegisterMessage());
	}


}