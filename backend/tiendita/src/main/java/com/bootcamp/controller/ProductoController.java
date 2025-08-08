package com.bootcamp.controller;

import com.bootcamp.model.Producto;
import com.bootcamp.service.ProductoService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/productos")
@RequiredArgsConstructor
public class ProductoController {

    private final ProductoService productoService;

    // Listado completo (sin paginar)
    @GetMapping
    public ResponseEntity<?> listar() {
        return ResponseEntity.ok(productoService.listar());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Producto> obtenerPorId(@PathVariable Long id) {
        return productoService.obtenerPorId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Producto> guardar(@Valid @RequestBody Producto producto) {
        return ResponseEntity.ok(productoService.guardar(producto));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Producto> actualizar(@PathVariable Long id, @Valid @RequestBody Producto producto) {
        return ResponseEntity.ok(productoService.actualizar(id, producto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Long id) {
        productoService.eliminar(id);
        return ResponseEntity.noContent().build();
    }

    // Paginación
    // Búsqueda por nombre
    @GetMapping("/buscar")
    public ResponseEntity<Page<Producto>> buscar(
            @RequestParam(name = "nombre_producto", defaultValue = "") String nombreProducto,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "5") int size,
            @RequestParam(defaultValue = "nombreProducto") String sortBy,
            @RequestParam(defaultValue = "asc") String direction
    ) {
        String propiedadOrden = mapearPropiedad(sortBy); // mapea snake_case a camelCase válidos
        Sort sort = "desc".equalsIgnoreCase(direction)
                ? Sort.by(propiedadOrden).descending()
                : Sort.by(propiedadOrden).ascending();

        Pageable pageable = PageRequest.of(page, size, sort);
        Page<Producto> resultados = productoService.buscarPorNombre(nombreProducto, pageable);
        return ResponseEntity.ok(resultados);
    }

    // Listado paginado genérico
    @GetMapping("/pagina")
    public ResponseEntity<Page<Producto>> paginar(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "5") int size,
            @RequestParam(defaultValue = "fechaPublicacion") String sortBy,
            @RequestParam(defaultValue = "desc") String direction
    ) {
        String propiedadOrden = mapearPropiedad(sortBy);
        Sort sort = "desc".equalsIgnoreCase(direction)
                ? Sort.by(propiedadOrden).descending()
                : Sort.by(propiedadOrden).ascending();

        Pageable pageable = PageRequest.of(page, size, sort);
        return ResponseEntity.ok(productoService.listar(pageable));
    }

    // Orden fijo por categoría (paginado)
    @GetMapping("/ordenar")
    public ResponseEntity<Page<Producto>> ordenarPorCategoria(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "5") int size
    ) {
        Pageable pageable = PageRequest.of(page, size);
        return ResponseEntity.ok(productoService.listarOrdenadoPorCategoria(pageable));
    }

    // Normaliza posibles nombres con underscore desde el cliente
    private String mapearPropiedad(String input) {
        // acepta alias con underscores desde el cliente y mapea a los campos reales
        switch (input) {
            case "nombre_producto": return "nombreProducto";
            case "fecha_publicacion": return "fechaPublicacion";
            default: return input; // precio, categoria, cantidad ya coinciden con los campos
        }
    }
}
