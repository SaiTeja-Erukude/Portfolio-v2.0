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

import com.portfolio.entity.Project;
import com.portfolio.service.ProjectService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/projects")
public class ProjectController {

	@Autowired
	private ProjectService projectService;
	
	@GetMapping("/")
	public List<Project> getAll() {
		return projectService.getAll();
	}
	
	@GetMapping("/{id}")
	public Project get(@PathVariable String id) {
		return projectService.getById(id);
	}
	
	@GetMapping("/delete/{id}")
	public ResponseEntity<Object> delete(@PathVariable String id) {
		return projectService.deleteById(id);
	}
	
	@PostMapping(value = "/add", consumes = {"multipart/form-data", "application/json"})	
	public Project add(@RequestParam String id, String title, MultipartFile image, String description, String hostLink, String githubLink) throws IOException {
		Project project = new Project();
		project.setId(id);
		project.setTitle(title);
		project.setDescription(description);
		project.setHostLink(hostLink);
		project.setGithubLink(githubLink);
		
		return projectService.add(project, image);
	}
}
