package com.example.home.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.example.home.model.OrderMapping;

public interface OrderMappingRepository extends JpaRepository<OrderMapping, Long> {

}
