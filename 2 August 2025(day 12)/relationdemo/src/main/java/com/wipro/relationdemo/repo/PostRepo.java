package com.wipro.relationdemo.repo;
import com.wipro.relationdemo.entity.Post;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepo extends JpaRepository<Post, Long> {
	
}

