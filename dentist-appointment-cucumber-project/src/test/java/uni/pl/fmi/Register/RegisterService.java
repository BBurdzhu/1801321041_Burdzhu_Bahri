package uni.pl.fmi.Register;

import java.util.ArrayList;
import java.util.List;

import uni.pl.fmi.User;

public class RegisterService {

	public static String register(String username, String password, String phone, String email) {
		 if(username.isEmpty() && password.isEmpty() && email.isEmpty()
				&& phone.isEmpty()) {
			 return "Моля въведете валидни дании!";
		 }
		
		if(null == username || username.isEmpty()) {
			return "Моля въведете потребителско име!";
		}
		
		if(null == password || password.isEmpty()) {
			return "Моля въведете парола!";
		}
		
		if(null == email || email.isEmpty()) {
			return "Моля въведете е-mail!";
		}
		if(null == phone || phone.isEmpty()) {
			return "Моля въведете телефонен номер!";
		}
		
		final User newUser = new User(username, password, phone, email);		

		List<User> users = getUsers();
	
		final boolean isPhoneMatch = users.stream().
				anyMatch(user -> user.getPhone().equals(phone));
		if(!isPhoneMatch) {
			return "Невалиден телефонен номер!";
		}
		
		final boolean isUsernameMatch = users.stream()
				.anyMatch(user -> user.getUsername().equals(username));

		if(!isUsernameMatch) {
			return "Невалидно потребителско име!";
		}
		
		final boolean isPasswordMatch = users.stream().
				anyMatch(user -> user.getPassword().equals(password));
		
		if(!isPasswordMatch) {
			return "Невалидна парола!";
		}
		
		final boolean isUserMatch = users.stream().
				anyMatch(user -> user.getUsername().equals(username) && user.getPassword().equals(password) && 
						user.getPhone().equals(phone) && user.getEmail().equals(email));
		if(isUserMatch) {
			return "Успешно се регистрирахте!";
		}
		
		users.add(newUser);
		return users.contains(newUser) ? "Успешно се регистрирахте!" : "";
	}

	private static List<User> getUsers() {

		final List<User> result = new ArrayList<>();
		final User user = new User();
		
		user.setUsername("Petranka");
		user.setPassword("adminpass");
		user.setPhone("0891245630");
		user.setEmail("petranka_c@gmail.com");
		
		result.add(user);

		return result;
	}
}