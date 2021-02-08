package uni.pl.fmi;


import java.util.*;


public class Appointment {

    private String name;
    private String location;
    private Dentist dentist;
    private User user;
    private Type type;
    private String Date;
    public Set<User> users;
    public Set<Dentist> dentists;


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public Set<Dentist> getDentists() {
        return dentists;
    }

    public void setDentist(Set<Dentist> dentists) {
       this.dentists = dentists;
    }

    public Set<User> getUsers() {
        return users;
    }

    public void setUsers(Set<User> users) {
    	this.users = users;
    }

    public Type getType() {
        return type;
    }

    public void setType(Type type) {
        this.type = type;
    }

    public String getDate() {
        return Date;
    }

  
    public void setDate(String date) {
        this.Date = date;
    }

    
    public Appointment() {
    }

    public Appointment(String date, String name) {
    	super();
    	this.Date = date;
    	this.name = name;
    }
}