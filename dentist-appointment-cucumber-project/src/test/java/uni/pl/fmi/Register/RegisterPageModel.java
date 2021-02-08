package uni.pl.fmi.Register;

public class RegisterPageModel {

	private String username;
	private String password;
	private String phone;
	private String email;
	private String message;
	
	public void navigateToMe() {
		System.out.println("Навигирано е до страницата за регистър в системата.");		
	}

	public void navigateMeToForm() {
		System.out.println("Навигирано е до формата за регистър в системата.");		
	}
	
	public void setUsername(String username) {
		this.username = username;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public void clickRegisterButton() {
		 message = RegisterService.register(username, password, phone, email);
	}

	public Object getRegisterMessage() {
		return message;
	}



}