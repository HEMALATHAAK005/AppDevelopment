package com.example.demo.repo;



import org.springframework.data.jpa.repository.JpaRepository;


import com.example.demo.entity.Login;

public interface loginrepo extends JpaRepository<Login,Integer> {

}
