package uni.pl.fmi.AppointmentFromPhone;

import static org.junit.Assert.assertEquals;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AppointmentFromPhoneSteps {
	
	PhoneModel phoneModel = new PhoneModel();
	
	@Given("^Потребителя звъни на рецепцията за запазване на час$")
	public void callDentist() throws Throwable {
	    phoneModel.navigateToMe();
	}

	@Given("^Отваря се телефона от рецепцията$")
	public void acceptCall() throws Throwable {
	    phoneModel.accept();
	}
	
	@When("^Избира някои от предоставените свободни дати и часове  \"([^\"]*)\"$")
	public void chooseDate(String date) throws Throwable {
		phoneModel.setDate(date);
	}

	@When("^Казва оплакване за зъбобол \"([^\"]*)\"$")
	public void addName(String name) throws Throwable {
	    phoneModel.setName(name);
	}

	@Then("^Чува съобщение \"([^\"]*)\"$")
	public void getMessage(String message) throws Throwable {
	    assertEquals(message, phoneModel.getMessage());
	}
	
}