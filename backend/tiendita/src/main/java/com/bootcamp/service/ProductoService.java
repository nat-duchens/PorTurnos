package com.bootcamp.service;

import com.bootcamp.model.Producto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;

public interface ProductoService {

    List<Producto> listar();
    Optional<Producto> obtenerPorId(Long id);
    Producto guardar(Producto producto);
    Producto actualizar(Long id, Producto producto);
    void eliminar(Long id);

    // Paginación / filtros

    // Buscar todos los productos
    Page<Producto> listar(Pageable pageable);

    // Buscar por nombre del producto
    Page<Producto> buscarPorNombre(String nombreProducto, Pageable pageable);

    // Buscar por categoria del
    Page<Producto> listarOrdenadoPorCategoria(Pageable pageable);
}

