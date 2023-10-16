package com.example.home.dto.response;


import com.example.home.model.enumerate.Role;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AuthenticationResponse {
    private String token;
    private String email;
    private Long uid;
    private String name;
    private Role role;
    private Long phone;    
    private String address;
}
