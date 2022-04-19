package com.portfolio.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "skills")
public class Skill {

	@Id
	private String id;
	private String title;
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public Skill() {
		super();
	}
	public Skill(String id, String title) {
		super();
		this.id = id;
		this.title = title;
	}
}
