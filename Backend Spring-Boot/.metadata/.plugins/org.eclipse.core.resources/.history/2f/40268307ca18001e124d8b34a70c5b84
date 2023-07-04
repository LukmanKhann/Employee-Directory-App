package org.jsp.springboot.model;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "employees")
public class Employee {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
private int id;
	@Column(name = "first_name")
private String firstname;
	@Column(name = "last_name")
private String lastname;
private String email;
private long mobile;
@Column(name = "date_of_birth")
private LocalDate dateofbirth;
private String gender;
private String address;
private String State;
private String city;
private String skills;
 public Employee() {
	 
 }
public Employee(String firstname, String lastname, String email, long mobile, LocalDate dateofbirth, String gender,
		String address, String state, String city, String skills) {
	super();
	this.firstname = firstname;
	this.lastname = lastname;
	this.email = email;
	this.mobile = mobile;
	this.dateofbirth = dateofbirth;
	this.gender = gender;
	this.address = address;
	State = state;
	this.city = city;
	this.skills = skills;
}
public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
public String getFirstname() {
	return firstname;
}
public void setFirstname(String firstname) {
	this.firstname = firstname;
}
public String getLastname() {
	return lastname;
}
public void setLastname(String lastname) {
	this.lastname = lastname;
}
public String getEmail() {
	return email;
}
public void setEmail(String email) {
	this.email = email;
}
public long getMobile() {
	return mobile;
}
public void setMobile(long mobile) {
	this.mobile = mobile;
}
public LocalDate getDateofbirth() {
	return dateofbirth;
}
public void setDateofbirth(LocalDate dateofbirth) {
	this.dateofbirth = dateofbirth;
}
public String getGender() {
	return gender;
}
public void setGender(String gender) {
	this.gender = gender;
}
public String getAddress() {
	return address;
}
public void setAddress(String address) {
	this.address = address;
}
public String getState() {
	return State;
}
public void setState(String state) {
	State = state;
}
public String getCity() {
	return city;
}
public void setCity(String city) {
	this.city = city;
}
public String getSkills() {
	return skills;
}
public void setSkills(String skills) {
	this.skills = skills;
}
}
