
package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.example.demo.dto.request.AuthenticationRequest;
import com.example.demo.dto.request.RegisterRequest;
import com.example.demo.dto.response.AuthenticationResponse;
import com.example.demo.service.AuthenticationService;

import lombok.RequiredArgsConstructor;



@RestController
@CrossOrigin("*")
@RequestMapping("/auth")	
@RequiredArgsConstructor
public class BookServiceController {
	
	private final AuthenticationService aservice ;
	
		  @PostMapping("/registerr")
		  public ResponseEntity<String> authenticate(
		      @RequestBody AuthenticationRequest request
		  ) {
		    return ResponseEntity.ok("Service Booked Successfully");
		  }

}


