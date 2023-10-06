package com.expectopatronum.hema.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.expectopatronum.hema.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
	
	public User findByEmail(String email);

}
