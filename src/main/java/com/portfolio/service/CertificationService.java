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

import com.portfolio.entity.Certification;
import com.portfolio.repository.CertificationRepo;

@Service
public class CertificationService {

	@Autowired
	private CertificationRepo certificationRepo;
	
	public List<Certification> getAll() {
		return certificationRepo.findAll();
	}
	
	public Certification add(Certification certification, MultipartFile image) throws IOException{
		if(image != null)
			certification.setImage(Base64.getEncoder().encodeToString(image.getBytes()));
		return certificationRepo.save(certification);
	}
	
	public Certification getById(String id) {
		return certificationRepo.findById(id).orElse(new Certification());
	}
	
	public ResponseEntity<Object> deleteById(String id) {
		HashMap<String, Object> map = new HashMap<>();
		try {
			certificationRepo.deleteById(id);
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
