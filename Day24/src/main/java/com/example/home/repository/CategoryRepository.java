package com.example.home.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.home.model.Category;

public interface CategoryRepository extends JpaRepository<Category, Long> {

    Category findByCid(Long cid);

}
