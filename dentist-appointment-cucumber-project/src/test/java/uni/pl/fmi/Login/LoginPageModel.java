package uni.pl.fmi.Login;

public class LoginPageModel {

	
	private String username;
	private String password;
	private String message;

	public void navigateToMe() {
		System.out.println("Навигирано е до страницата за вход в системата.");
	}

	public void navigateMeToForm() {
		System.out.println("Навигирано е до формата за вход в системата.");		
	}
	public void setUsername(String username) {
		this.username =username;
	}

	public void setPassword(String password) {
		this.password=password;
	}

	public void clickLoginButton() {
		message = LoginService.login(username, password);
	}

	public Object getLoginMessage() {
		return message;
	}


}
