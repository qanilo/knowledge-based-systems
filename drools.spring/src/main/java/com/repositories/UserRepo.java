package com.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import com.model.User;
 
public interface UserRepo extends MongoRepository<User, Long>{
	public User findByUsername(String username);
}
