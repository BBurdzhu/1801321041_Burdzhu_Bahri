package uni.pl.fmi.Appointments;

import static org.junit.Assert.assertEquals;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AppointmentSteps {

	AppointmentPageModel appointmentPageModel = new AppointmentPageModel();
	
	@Given("^Потребителя отваря страницата за запазване на час$")
	public void openAppointmentScreen() throws Throwable {
	    appointmentPageModel.navigateToMe();
	}

	@Given("^Отваря се формата за запазване на час$")
	public void openAppointmentForm() throws Throwable {
	    appointmentPageModel.navigateMeToForm();
	}
	
	@When("^Потребителя избира някои от предоставените свободни дати и часове \"([^\"]*)\"$")
	public void chooseDate(String date) throws Throwable {
	    appointmentPageModel.setDate(date);
	}

	@When("^Въвежда оплакване за зъбобол \"([^\"]*)\"$")
	public void addName(String name) throws Throwable {
	    appointmentPageModel.setName(name);
	}

	@When("^Натиска бутона за запазване на час$")
	public void clickAppointmentButton() throws Throwable {
	    appointmentPageModel.clickAppointmentButton();
	}

	@When("^Вижда линк за потвръждение$")
	public void checkLinkConfirmation() throws Throwable {
		appointmentPageModel.navigateToLinkConfirmation();
	}
	
	@Then("^Вижда съобщение \"([^\"]*)\" в емайла си$")
	public void checkAppointmentMessage(String message) throws Throwable {
	    assertEquals(message, appointmentPageModel.getAppointmentMessage());
	}
}
