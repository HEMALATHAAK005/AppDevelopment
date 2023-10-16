package com.example.home.service;


import java.util.List;

import com.example.home.dto.request.UserRequest;
import com.example.home.dto.response.CountResponse;
import com.example.home.dto.response.UserResponse;

public interface UserService {

    List<UserResponse> getAllUsers();

    UserResponse getUser(Long uid);

    UserResponse updateUser(UserRequest request, Long uid);

    boolean deleteProduct(Long uid);

    CountResponse userCount();

}

