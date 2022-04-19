package com.portfolio.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "projects")
public class Project {
	
	@Id
	private String id;
	private String title;
	private String description;
	private String image;
	private String hostLink;
	private String githubLink;
	
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
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
	public String getHostLink() {
		return hostLink;
	}
	public void setHostLink(String hostLink) {
		this.hostLink = hostLink;
	}
	public String getGithubLink() {
		return githubLink;
	}
	public void setGithubLink(String githubLink) {
		this.githubLink = githubLink;
	}
	public Project() {
		super();
	}
	public Project(String id, String title, String description, String image, String hostLink, String githubLink) {
		super();
		this.id = id;
		this.title = title;
		this.description = description;
		this.image = image;
		this.hostLink = hostLink;
		this.githubLink = githubLink;
	}
}