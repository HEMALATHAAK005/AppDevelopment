package com.example.home.service;

import com.example.home.dto.request.AuthenticationRequest;
import com.example.home.dto.request.RegisterRequest;
import com.example.home.dto.response.AuthenticationResponse;

public interface AuthService {
    boolean userRegistration(RegisterRequest request);

    AuthenticationResponse userAuthentication(AuthenticationRequest request);
}

