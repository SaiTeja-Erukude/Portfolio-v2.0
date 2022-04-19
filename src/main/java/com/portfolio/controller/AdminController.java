package com.portfolio.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.portfolio.entity.Admin;
import com.portfolio.service.AdminService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/admin")
public class AdminController {

	@Autowired
	private AdminService adminService;
	
	@PostMapping("/login")
	public ResponseEntity<Object> login(@RequestBody Admin admin) {
		return adminService.login(admin);
	}
	
	@PostMapping("/add")
	public Admin add(@RequestBody Admin admin) {
		return adminService.add(admin);
	}
}
