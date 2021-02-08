package uni.pl.fmi.Appointments;

public class AppointmentPageModel {

	private String date;
	private String name;
	private String message;
	
	public void navigateToMe() {
		System.out.println("Навигирано е до страницата за запазване на час.");		
	}

	public void navigateMeToForm() {
		System.out.println("Навигирано е до формата за запазване на час.");			
	}

	public void setDate(String date) {
		this.date = date;
	}

	public void setName(String name) {
		this.name = name;
	}

	public void clickAppointmentButton() {
		message = AppointmentService.appointment(date, name);
	}

	public void navigateToLinkConfirmation() {
		System.out.println("Навигирано е до линка за потвръждение на час.");			
	}

	public Object getAppointmentMessage() {
		return message;
	}

}
