package com.portfolio.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.portfolio.entity.Experience;

@Repository
public interface ExperienceRepo extends MongoRepository<Experience, String> {

}
