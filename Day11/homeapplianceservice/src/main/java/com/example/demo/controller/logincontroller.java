package com.example.demo.controller;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Login;
import com.example.demo.service.LoginService;
@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class logincontroller {
	
	@Autowired
	private LoginService sr;
	@GetMapping("/getlogindata")
	public List<Login> getDetails() {
		return sr.getData();
	}
	
	@PostMapping("/savelogindata")
	public void saveData(@RequestBody Login db)
	{
		sr.saveData(db);
	}
	@PutMapping("/updatelogin")
	public void updateData(@RequestBody Login db)
	{
		
		sr.updateData(db);
	}
	@DeleteMapping("/deletelogin")
	public void deleteData(@RequestParam("id") int id)
	{
		sr.deleteData(id);
	}
}

