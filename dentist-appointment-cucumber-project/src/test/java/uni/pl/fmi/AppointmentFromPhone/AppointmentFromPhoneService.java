package uni.pl.fmi.AppointmentFromPhone;

import java.util.ArrayList;
import java.util.List;

import uni.pl.fmi.Appointment;

public class AppointmentFromPhoneService {

	public static String appointmentFromPhone(String date, String name) {
		if(date.isEmpty() && name.isEmpty()) {
			return "Моля въведете данни!";
		}
		
		if(null == date || date.isEmpty()) {
			return "Моля изберете дата и час!";
		}
		
		if(null == name || name.isEmpty()) {
			return "Моля кажете оплакване!";
		}
		
		List<Appointment> appointments = getAppointments();
		
		final boolean isAppointmentMatch = appointments.stream()
				.anyMatch(appointment -> appointment.getDate().equals(date)
						&& appointment.getName().equals(name));
		
		return isAppointmentMatch ? "Успешно си запазихте час!" : "";
				
	}
	
	public static List<Appointment> getAppointments() {
		 final List<Appointment> result = new ArrayList<>();
		 final Appointment appointment = new Appointment();
		 
		 appointment.setDate("09.02.2021 10:30");
		 appointment.setName("Проблем с венците");
		 
		 result.add(appointment);
		 return result;
	}
}
