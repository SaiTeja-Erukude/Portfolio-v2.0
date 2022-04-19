package com.portfolio.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.portfolio.entity.Admin;

@Repository
public interface AdminRepo extends MongoRepository<Admin, String>{
	
	Admin findByEmailAndPassword(String email, String password); 
}
