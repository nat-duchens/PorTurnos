package com.bootcamp.repository;

import com.bootcamp.model.Producto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductoRepository extends JpaRepository<Producto, Long> {

    // Búsqueda por nombre del producto (coincide con el campo "nombreProducto" de la entidad)
    Page<Producto> findByNombreProductoContainingIgnoreCase(String nombreProducto, Pageable pageable);

    // Listar ordenado por categoría ascendente
    Page<Producto> findAllByOrderByCategoriaAsc(Pageable pageable);
}

