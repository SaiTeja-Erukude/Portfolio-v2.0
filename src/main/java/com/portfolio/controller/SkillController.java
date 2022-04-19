package com.portfolio.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.portfolio.entity.Skill;
import com.portfolio.service.SkillService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/skills")
public class SkillController {

	@Autowired
	private SkillService skillService;
	
	@GetMapping("/")
	public List<Skill> getAll() {
		return skillService.getAll();
	}
	
	@GetMapping("/{id}")
	public Skill get(@PathVariable String id) {
		return skillService.getById(id);
	}
	
	@GetMapping("/delete/{id}")
	public ResponseEntity<Object> delete(@PathVariable String id) {
		return skillService.deleteById(id);
	}
	
	@PostMapping("/add")
	public Skill add(@RequestBody Skill skill) {
		return skillService.add(skill);
	}
}
