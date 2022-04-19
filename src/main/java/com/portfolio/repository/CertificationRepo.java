package com.portfolio.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.portfolio.entity.Certification;

@Repository
public interface CertificationRepo extends MongoRepository<Certification, String>{

}
