package com.bootcamp.service;

import com.bootcamp.model.Blog;
import com.bootcamp.repository.BlogRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class BlogServiceImpl implements BlogService {

    private final BlogRepository blogRepository;

    @Override
    public List<Blog> listarTodos() {
        return blogRepository.findAll();
    }
    @Override
    public Optional<Blog> obtenerPorId (Long id) {
        return blogRepository.findById(id);
    }

    @Override
    public Blog guardar(Blog blog) {
        return blogRepository.save(blog);
    }

    @Override
    public Blog actualizar (Long id, Blog blog){
        blog.setId(id);
        return blogRepository.save(blog);
    }

    @Override
    public void eliminar (Long id) {
        blogRepository.deleteById(id);
    }

}
