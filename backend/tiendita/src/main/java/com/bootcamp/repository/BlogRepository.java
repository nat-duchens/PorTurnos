package com.bootcamp.repository;

import com.bootcamp.model.Blog;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BlogRepository extends JpaRepository <Blog, Long> {
    Long id(Long id);
}