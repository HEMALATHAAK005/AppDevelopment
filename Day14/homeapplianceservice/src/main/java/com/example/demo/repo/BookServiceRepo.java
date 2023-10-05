package com.example.demo.repo;




import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.BookService;





public interface BookServiceRepo extends JpaRepository <BookService,Long>{

}
