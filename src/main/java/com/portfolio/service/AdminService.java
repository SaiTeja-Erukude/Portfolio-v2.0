package com.portfolio.service;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.portfolio.entity.Admin;
import com.portfolio.repository.AdminRepo;

@Service
public class AdminService {

	@Autowired
	private AdminRepo adminRepo;
	
	public ResponseEntity<Object> login(Admin admin) {
		Admin res = adminRepo.findByEmailAndPassword(admin.getEmail(), admin.getPassword());
		HashMap<String, Object> map = new HashMap<>();
		
		if(res == null) {
			map.put("message", "Admin Not Found!");
			map.put("status", HttpStatus.NOT_FOUND);
			return new ResponseEntity<Object>(map, HttpStatus.NOT_FOUND);
		}	
		map.put("message", "Admin Logged In!");
		map.put("status", HttpStatus.OK);			
		return new ResponseEntity<Object>(map, HttpStatus.OK);	
	}
	
	public Admin add(Admin admin) {
		return adminRepo.save(admin);
	}
}
