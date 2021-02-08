package uni.pl.fmi.Date;

import java.util.ArrayList;
import java.util.List;

import uni.pl.fmi.Appointment;

public class DateService {

	public static String date(String data) {
		
		if(null == data || data.isEmpty()) {
			return "Грешка! Моля въведете нужните данни за определяне на период!";
		}
		
		List<Appointment> appointments = getAppointments();
		
		final boolean isAppointmentMatch = appointments.stream()
				.anyMatch(appointment -> appointment.getDate().equals(data));
		
		if(!isAppointmentMatch) {
			return "Грешка! Моля въведете валидни данни!";
		}
		
		return isAppointmentMatch ? "Добавен свободен период!" : "";

	}

	
	public static List<Appointment> getAppointments() {
		 final List<Appointment> result = new ArrayList<>();
		 final Appointment appointment = new Appointment();
		 
		 appointment.setDate("Зъболекарят е свободен на 07.02.2021 от 10:45");
		 
		 result.add(appointment);
		 return result;
	}
}
