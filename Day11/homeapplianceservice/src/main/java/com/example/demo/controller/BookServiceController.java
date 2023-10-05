package com.example.demo.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import com.example.demo.entity.BookService;
import com.example.demo.exception.UserNotFoundException;
import com.example.demo.repo.BookServiceRepo;



@RestController
@CrossOrigin("http://localhost:3000")
public class BookServiceController {
	
	@Autowired
	private BookServiceRepo userRepo;
	
	@PostMapping("/user")
	BookService newUser(@RequestBody BookService newUser) {
		return userRepo.save(newUser);
		
	}
	
	@GetMapping("/users")
	List<BookService> getAllUsers(){
		return userRepo.findAll(); 
	}
	
	
	@GetMapping("/user/{id}")
	BookService getUserById(@PathVariable Long id) {
		return userRepo.findById(id).orElseThrow(()->new UserNotFoundException(id));   
	}
	
	@PutMapping("/user/{id}")
	BookService updateUser (@RequestBody BookService newUser,@PathVariable Long id) {
		return userRepo.findById(id)
				.map(user ->{
					user.setUsername(newUser.getUsername());
					user.setName(newUser.getName());
					user.setEmail(newUser.getEmail());
					user.setDevice(newUser.getDevice());
					user.setPhonenumber(newUser.getPhonenumber());
					user.setAddress(newUser.getAddress());
					user.setJob(newUser.getJob());
					user.setPlace(newUser.getPlace());
					
					user.setAge(newUser.getAge());
					
					return userRepo.save(user);
				}).orElseThrow(()-> new UserNotFoundException(id)); 
	}
		@DeleteMapping("/user/{id}")
		String deleteUser(@PathVariable Long id) {
			
			userRepo.deleteById(id);
			return "User deleted successfully";
		}
		

}
