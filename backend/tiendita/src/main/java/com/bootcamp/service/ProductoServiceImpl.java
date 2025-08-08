package com.bootcamp.service;

import com.bootcamp.model.Producto;
import com.bootcamp.repository.ProductoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ProductoServiceImpl implements ProductoService {

    private final ProductoRepository productoRepository;

    @Override
    public List<Producto> listar() {return productoRepository.findAll(); }

    @Override
    public Optional<Producto> obtenerPorId(Long id) {
        return productoRepository.findById(id); }

    @Override
    public Producto guardar(Producto producto){
        return productoRepository.save(producto); }

    @Override
    public Producto actualizar(Long id, Producto producto) {
        producto.setId(id);
        return productoRepository.save(producto);

    }

    @Override
    public void eliminar(Long id){
        productoRepository.deleteById(id);
    }

    // Buscar todos los productos
    @Override
    public Page<Producto> listar(Pageable pageable) {
        return productoRepository.findAll(pageable);
    }

    //Buscar por nombre del producto
    @Override
    public Page<Producto> buscarPorNombre(String nombreProducto, Pageable pageable) {
        return productoRepository.findByNombreProductoContainingIgnoreCase(nombreProducto, pageable);
    }

    // Buscar por categoria
    @Override
    public Page<Producto> listarOrdenadoPorCategoria(Pageable pageable) {
        return productoRepository.findAllByOrderByCategoriaAsc(pageable);
    }
}
