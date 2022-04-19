package com.portfolio.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.portfolio.entity.Skill;
import com.portfolio.repository.SkillRepo;

@Service
public class SkillService {
	
	@Autowired
	private SkillRepo skillRepo;
	
	public List<Skill> getAll() {
		return skillRepo.findAll();
	}
	
	public Skill getById(String id) {
		return skillRepo.findById(id).orElse(new Skill());
	}
	
	public Skill add(Skill skill) {
		return skillRepo.save(skill);
	}
	
	public ResponseEntity<Object> deleteById(String id) {
		HashMap<String, Object> map = new HashMap<>();
		try {
			skillRepo.deleteById(id);
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
