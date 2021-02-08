package uni.pl.fmi.Login;

import static org.junit.Assert.assertEquals;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginSteps {


	LoginPageModel loginPageModel = new LoginPageModel();
	
	@Given("^Потребителя отваря екрана за вход$")
	public void openLoginScreen() throws Throwable {
	    loginPageModel.navigateToMe();
	}

	@Given("^Отваря се форма за вход в системата$")
	public void openLoginForm() throws Throwable {
	   loginPageModel.navigateMeToForm();
	}

	@When("^Въвежда валидно потребителско име \"([^\"]*)\"$")
	public void addUsername(String username) throws Throwable {
	    loginPageModel.setUsername(username);
	}

	@When("^Въвежда валидна парола \"([^\"]*)\"$")
	public void addPassword(String password) throws Throwable {
	    loginPageModel.setPassword(password);
	}

	@When("^Натиска бутона за вход в системата$")
	public void clickLoginButton() throws Throwable {
	   loginPageModel.clickLoginButton();
	}

	@Then("^Вижда съобщение  \"([^\"]*)\"$")
	public void checkLoginMessage(String message) throws Throwable {
	   assertEquals(message, loginPageModel.getLoginMessage());
	}
}