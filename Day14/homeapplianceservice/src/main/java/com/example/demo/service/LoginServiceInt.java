
package com.example.demo.service;


import java.util.List;



import com.example.demo.entity.Login;

public interface LoginServiceInt {
	public List<Login> getData();
	
	public void saveData(Login dbs);
	public void updateData(Login dbs);
	public void deleteData(int id);
}


