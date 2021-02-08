package uni.pl.fmi.Date;

import static org.junit.Assert.assertEquals;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class DateSteps {

	DatePageModel datePageModel = new DatePageModel();
	
	@Given("^Зъболекаря отваря началната страница$")
	public void openDatePage() throws Throwable {
			datePageModel.navigateToMe();
	}

	@Given("^Отваря се формата за определяне на възможните периоди$")
	public void openDateForm() throws Throwable {
	    	datePageModel.navigateMeToForm();
	}

	@When("^Въвеждане на валидни данни \"([^\"]*)\"$")
	public void addData(String data) throws Throwable {
	    	datePageModel.setData(data);
	}

	@When("^Натиска бутона за определяне на възможните периоди$")
	public void clickDateButton() throws Throwable {
	    	datePageModel.clickDateButton();
	}

	@Then("^Вижда  съобщение \"([^\"]*)\"$")
	public void checkDateMessage(String message) throws Throwable {
			assertEquals(message, datePageModel.getMessage());
	}
}
