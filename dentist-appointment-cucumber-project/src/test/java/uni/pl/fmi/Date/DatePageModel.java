package uni.pl.fmi.Date;

public class DatePageModel {

	private String data;
	private String message;
	
	public void navigateToMe() {
		System.out.println("Навигирано е до страницата за определяне на възможните периоди.");
	}

	public void navigateMeToForm() {
		System.out.println("Навигирано е до формата за определяне на възможните периоди.");		
	}

	public void setData(String data) {
		this.data = data;
	}

	public void clickDateButton() {
		message = DateService.date(data);
	}

	public Object getMessage() {
		return message;
	}

}
