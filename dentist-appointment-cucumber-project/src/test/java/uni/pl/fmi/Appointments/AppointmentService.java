package uni.pl.fmi.Appointments;

import java.util.ArrayList;
import java.util.List;

import uni.pl.fmi.Appointment;

public class AppointmentService {

	public static String appointment(String date, String name) {
		
		if(date.isEmpty() && name.isEmpty()) {
			return "Моля въведете данни!";
		}
		
		if(null == date || date.isEmpty()) {
			return "Моля въведете дата и час!";
		}
		
		if(null == name || name.isEmpty()) {
			return "Моля въведете оплакване!";
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
		 
		 appointment.setDate("07.02.2021 10:30");
		 appointment.setName("Проблем с мъдреца");
		 
		 result.add(appointment);
		 return result;
	}
}
