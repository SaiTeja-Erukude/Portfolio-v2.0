package com.portfolio.service;

import java.io.IOException;
import java.util.Base64;
import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.portfolio.entity.Experience;
import com.portfolio.repository.ExperienceRepo;

@Service
public class ExperienceService {

	@Autowired
	private ExperienceRepo experienceRepo;
	
	public Experience add(Experience experience, MultipartFile image) throws IOException {
		if(image != null)
			experience.setImage(Base64.getEncoder().encodeToString(image.getBytes()));
		return experienceRepo.save(experience);
	}
	
	public List<Experience> getAll() {
		return experienceRepo.findAll();
	}
	
	public Experience getById(String id) {
		return experienceRepo.findById(id).orElse(new Experience());
	}
	
	public ResponseEntity<Object> deleteById(String id) {
		HashMap<String, Object> map = new HashMap<>();
		try {
			experienceRepo.deleteById(id);
			map.put("message", "Project Deleted!");
			map.put("status", HttpStatus.OK);	
		}
		catch(Exception e) {
			map.put("message", "Project Not Found!");
			map.put("status", HttpStatus.NOT_FOUND);
			return new ResponseEntity<Object>(map, HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Object>(map, HttpStatus.OK);
	}	
}
