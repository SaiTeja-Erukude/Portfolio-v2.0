package com.portfolio.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "experiences")
public class Experience {

	@Id
	public String id;
	private String image;	
	private String jobRole;
	private String companyName;
	private String startDate;
	private String endDate;
	private String description;
	private String jobType;
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public String getJobRole() {
		return jobRole;
	}
	public void setJobRole(String jobRole) {
		this.jobRole = jobRole;
	}
	public String getCompanyName() {
		return companyName;
	}
	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}
	public String getStartDate() {
		return startDate;
	}
	public void setStartDate(String startDate) {
		this.startDate = startDate;
	}
	public String getEndDate() {
		return endDate;
	}
	public void setEndDate(String endDate) {
		this.endDate = endDate;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getJobType() {
		return jobType;
	}
	public void setJobType(String jobType) {
		this.jobType = jobType;
	}
	public Experience() {
		super();
	}
	public Experience(String id, String jobRole, String companyName, String startDate, String endDate,
			String description, String jobType) {
		super();
		this.id = id;
		this.jobRole = jobRole;
		this.companyName = companyName;
		this.startDate = startDate;
		this.endDate = endDate;
		this.description = description;
		this.jobType = jobType;
	}
}
