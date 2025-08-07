package com.bootcamp.service;

import com.bootcamp.model.Blog;

import java.util.List;
import java.util.Optional;

public interface BlogService {

    List<Blog> listarTodos();
    Optional<Blog> obtenerPorId (Long id);
    Blog guardar (Blog blog);
    Blog actualizar (Long id, Blog blog);
    void eliminar (Long id);
}
