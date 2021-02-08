package uni.pl.fmi.Login;

import java.util.ArrayList;
import java.util.List;

import uni.pl.fmi.*;

public class LoginService {

	public  static String login(String username, String password) {
		
		if (username.isEmpty() && password.isEmpty()) {
			return "Моля въведете потребителско име и парола!";
		}

		if (null == username || username.isEmpty()) {
			return "Моля въведете потребителско име!";
		}

		if (null == password || password.isEmpty()) {
			return "Моля въведете парола!";
		}

				
		List<User> users = getUsers();
		
		final boolean isPasswordMatch = users.stream()
				.anyMatch(user -> user.getPassword().equals(password));
		if(!isPasswordMatch) {
			return "Моля въведете правилна парола!";
		}
		
		final boolean isUsernameMatch = users.stream()
				.anyMatch(user -> user.getUsername().equals(username));
		if(!isUsernameMatch) {
			return "Моля въведете правилно потребителско име!";
		}
		
		final boolean isUserMatch = users.stream()
				.anyMatch(user -> user.getUsername().equals(username) && user.getPassword().equals(password));

		return isUserMatch ? "Успешно влезнахте в акаунта си!" : "";
	}
	
	private static List<User> getUsers() {
		
		final List<User> result = new ArrayList<>();
		final User user = new User();
		
		user.setUsername("Petranka");
		user.setPassword("adminpass");
		
		result.add(user);
		return result;
	}
}
