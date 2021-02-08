package uni.pl.fmi;

import java.util.*;

public class User {


    private String username;
    private String password;
    private String email;
    private String phone;
    private Appointment Аppointment;
    public Set<Appointment> appointments;
    

    public String getUsername() {
       return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

 
    public String getPassword() {
       return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
       return email;
    }

    public void setEmail(String email) {
       this.email = email;
    }

    public String getPhone() {
       return phone;
    }

    public void setPhone(String phone) {
       this.phone = phone;
    }
    
    public Set<Appointment> getAppointments() {
        return appointments;
    }

    public void setAppointments(Set<Appointment> appointments) {
        this.appointments = appointments;
    }
 
    public void addAppointment(Appointment appointment) {
        this.appointments.add(appointment);
    }
	
    public User() {
    }

 
    public User(String email) {
    	super();
    	this.email = email;
    }

    
    public User(String username, String password) {
    	super();
    	this.username = username;
    	this.password = password;
    }

    
    public User(String username, String password, String phone, String email){
    	super();
    	this.username = username;
    	this.password = password;
    	this.phone = phone;
    	this.email = email;
    }

}