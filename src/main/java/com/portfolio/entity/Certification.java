package com.portfolio.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "certifications")
public class Certification {

	@Id
	private String id;
	private String title;
	private String description;
	private String image;
	private String link;
	
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
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getImage() { 
		return image; 
	} 
	public void setImage(String image) {
		this.image = image; 
	}	 
	public String getLink() {
		return link;
	}
	public void setLink(String link) {
		this.link = link;
	}
	public Certification() {
		super();
	}
	public Certification(String id, String title, String description, String image, String link) {
		super();
		this.id = id;
		this.title = title;
		this.description = description;
		this.image = image;
		this.link = link;
	}
}
