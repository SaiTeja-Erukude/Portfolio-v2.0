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

import com.portfolio.entity.Project;
import com.portfolio.repository.ProjectRepo;

@Service
public class ProjectService {

	@Autowired
	private ProjectRepo projectRepo;
	
	public List<Project> getAll() {
		return projectRepo.findAll();
	}
	
	public Project getById(String id) {
		return projectRepo.findById(id).orElse(new Project());
	}
	
	public ResponseEntity<Object> deleteById(String id) {
		HashMap<String, Object> map = new HashMap<>();
		try {
			projectRepo.deleteById(id);
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
	
	public Project add(Project project, MultipartFile image) throws IOException {
		if(image != null)
			project.setImage(Base64.getEncoder().encodeToString(image.getBytes()));
		return projectRepo.save(project);
	}
}
