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

import com.portfolio.entity.Certification;
import com.portfolio.service.CertificationService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/certifications")
public class CertificationController {
	
	@Autowired
	private CertificationService certificationService;
	
	@GetMapping("/")
	public List<Certification> getAll() {
		return certificationService.getAll();
	}
	
	@GetMapping("/{id}")
	public Certification get(@PathVariable String id) {
		return certificationService.getById(id);
	}
	
	@GetMapping("/delete/{id}")
	public ResponseEntity<Object> delete(@PathVariable String id) {
		return certificationService.deleteById(id);
	}
	
	@PostMapping(value = "/add", consumes = {"multipart/form-data", "application/json"})
	public Certification add(@RequestParam String id, String title, MultipartFile image, String description, String link) throws IOException {
		Certification certification = new Certification();
		certification.setId(id);
		certification.setTitle(title);
		certification.setDescription(description);
		certification.setLink(link);
		
		return certificationService.add(certification, image);
	}
}
