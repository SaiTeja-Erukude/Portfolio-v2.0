package com.portfolio.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.portfolio.entity.Skill;

@Repository
public interface SkillRepo extends MongoRepository<Skill, String>{

}
