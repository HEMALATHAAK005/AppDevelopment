package com.example.demo.service;

import java.util.List;




import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Login;
import com.example.demo.repo.loginrepo;


@Service 
public class LoginService implements LoginServiceInt{

	@Autowired
	private loginrepo dcr;
	@Override
	public List<Login> getData() {
		return dcr.findAll();
	}
	@Override
	public void saveData(Login db)
	{
		dcr.save(db);
	}
	@Override
	public void updateData(Login db)
	{
		dcr.save(db);
	}
	@Override
	public void deleteData(int id)
	{
		dcr.deleteById(id);
	}

	
	

}