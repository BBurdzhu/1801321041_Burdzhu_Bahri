package uni.pl.fmi.AppointmentFromPhone;

public class PhoneModel {

	private String date;
	private String name;
	private String message;
	
	public void navigateToMe() {
		System.out.println("Звъни на рецепцията за запазване на час.");		
	}

	public void accept() {
		System.out.println("Телефона се вдига от рецепцията.");				
	}

	public void setDate(String date) {
		this.date = date;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Object getMessage() {
		message = AppointmentFromPhoneService.appointmentFromPhone(date, name);

		return message;
	}

}