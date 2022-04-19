package com.portfolio.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "admins")
public class Admin {

	@Id
	public String email;
	public String password;	
	
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public Admin() {
		super();
	}
	public Admin(String email, String password) {
		super();
		this.email = email;
		this.password = password;
	}
}
