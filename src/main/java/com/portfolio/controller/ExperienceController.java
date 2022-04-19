package com.portfolio.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.portfolio.entity.Experience;
import com.portfolio.service.ExperienceService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/experiences")
public class ExperienceController {

	@Autowired
	private ExperienceService experienceService;
	
	@GetMapping("/")
	public List<Experience> getAll() {
		return experienceService.getAll();
	}
	
	@GetMapping("/{id}")
	public Experience getById(@PathVariable String id) {
		return experienceService.getById(id);
	}
	
	@GetMapping("/delete/{id}")
	public ResponseEntity<Object> delete(@PathVariable String id) {
		return experienceService.deleteById(id);
	}
	
	@PostMapping(value = "/add", consumes = {"multipart/form-data", "application/json"})
	public Experience add(@RequestParam String id, MultipartFile image, String jobRole, String companyName, String startDate, String endDate, String description, String jobType) throws IOException {
		Experience experience = new Experience();
		experience.setId(id);
		experience.setJobRole(jobRole);
		experience.setCompanyName(companyName);
		experience.setStartDate(startDate);
		experience.setEndDate(endDate);
		experience.setDescription(description);
		experience.setJobType(jobType);		
		return experienceService.add(experience, image);
	}
}
