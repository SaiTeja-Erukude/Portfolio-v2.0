package com.portfolio.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.portfolio.entity.Project;

@Repository
public interface ProjectRepo extends MongoRepository<Project, String>{

}
