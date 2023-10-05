package com.example.demo.entity;

import jakarta.persistence.Column;


import jakarta.persistence.Entity;

import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="login")
public class Login {
	@Id
	@Column(name="id")
	private int id;
	@Column(name="Username")
	private String Username;
	@Column(name="pass")
	private String pass;
	public Login(int id, String username, String pass) {
		super();
		this.id = id;
		Username = username;
		this.pass = pass;
	}
	public Login() {
		super();
		// TODO Auto-generated constructor stub
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getUsername() {
		return Username;
	}
	public void setUsername(String username) {
		Username = username;
	}
	public String getPass() {
		return pass;
	}
	public void setPass(String pass) {
		this.pass = pass;
	}
	@Override
	public String toString() {
		return "LoginEntity [id=" + id + ", Username=" + Username + ", pass=" + pass + ", getId()=" + getId()
				+ ", getUsername()=" + getUsername() + ", getPass()=" + getPass() + ", getClass()=" + getClass()
				+ ", hashCode()=" + hashCode() + ", toString()=" + super.toString() + "]";
	}
	
	
}
