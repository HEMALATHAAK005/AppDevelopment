package com.expectopatronum.hema.service;

import com.expectopatronum.hema.exception.UserException;
import com.expectopatronum.hema.model.User;

public interface UserService {
	
	public User findUserById(Long userId) throws UserException;
	
	public User findUserProfileByJwt(String jwt) throws UserException;

}