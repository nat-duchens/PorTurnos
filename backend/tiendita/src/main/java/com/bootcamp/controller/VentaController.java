package com.bootcamp.controller;

import com.bootcamp.model.Venta;
import com.bootcamp.service.VentaService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/ventas")
@Validated
@CrossOrigin(origins = "*")
public class VentaController {

    @Autowired
    private VentaService ventaService;

    // Crear nueva venta
    @PostMapping
    public ResponseEntity<Venta> crearVenta(@Valid @RequestBody Venta venta) {
        try {
            Venta nuevaVenta = ventaService.guardarVenta(venta);
            return new ResponseEntity<>(nuevaVenta, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Obtener todas las ventas
    @GetMapping
    public ResponseEntity<List<Venta>> obtenerTodasLasVentas() {
        try {
            List<Venta> ventas = ventaService.obtenerTodasLasVentas();
            return new ResponseEntity<>(ventas, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Obtener venta por ID
    @GetMapping("/{id}")
    public ResponseEntity<Venta> obtenerVentaPorId(@PathVariable Long id) {
        try {
            Optional<Venta> venta = ventaService.obtenerVentaPorId(id);
            return venta.map(v -> new ResponseEntity<>(v, HttpStatus.OK))
                    .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Actualizar venta
    @PutMapping("/{id}")
    public ResponseEntity<Venta> actualizarVenta(@PathVariable Long id, @Valid @RequestBody Venta venta) {
        try {
            Optional<Venta> ventaExistente = ventaService.obtenerVentaPorId(id);
            if (ventaExistente.isPresent()) {
                venta.setId(id);
                Venta ventaActualizada = ventaService.actualizarVenta(venta);
                return new ResponseEntity<>(ventaActualizada, HttpStatus.OK);
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Eliminar venta
    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> eliminarVenta(@PathVariable Long id) {
        try {
            ventaService.eliminarVenta(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Obtener ventas por comprador
    @GetMapping("/comprador/{idComprador}")
    public ResponseEntity<List<Venta>> obtenerVentasPorComprador(@PathVariable Long idComprador) {
        try {
            List<Venta> ventas = ventaService.obtenerVentasPorComprador(idComprador);
            return new ResponseEntity<>(ventas, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Obtener ventas por vendedor
    @GetMapping("/vendedor/{idVendedor}")
    public ResponseEntity<List<Venta>> obtenerVentasPorVendedor(@PathVariable Long idVendedor) {
        try {
            List<Venta> ventas = ventaService.obtenerVentasPorVendedor(idVendedor);
            return new ResponseEntity<>(ventas, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Obtener total de ventas por vendedor
    @GetMapping("/vendedor/{idVendedor}/total")
    public ResponseEntity<BigDecimal> obtenerTotalVentasPorVendedor(@PathVariable Long idVendedor) {
        try {
            BigDecimal total = ventaService.obtenerTotalVentasPorVendedor(idVendedor);
            return ResponseEntity.ok(total);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    // Obtener ventas por estado
    @GetMapping("/estado/{estado}")
    public ResponseEntity<List<Venta>> obtenerVentasPorEstado(@PathVariable String estado) {
        try {
            Venta.EstadoVenta estadoVenta = Venta.EstadoVenta.valueOf(estado.toUpperCase());
            List<Venta> ventas = ventaService.obtenerVentasPorEstado(estadoVenta);
            return new ResponseEntity<>(ventas, HttpStatus.OK);
        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Confirmar venta
    @PatchMapping("/{id}/confirmar")
    public ResponseEntity<Venta> confirmarVenta(@PathVariable Long id) {
        try {
            Venta ventaConfirmada = ventaService.confirmarVenta(id);
            return new ResponseEntity<>(ventaConfirmada, HttpStatus.OK);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Marcar como entregada
    @PatchMapping("/{id}/entregar")
    public ResponseEntity<Venta> marcarComoEntregada(@PathVariable Long id) {
        try {
            Venta ventaEntregada = ventaService.marcarComoEntregada(id);
            return new ResponseEntity<>(ventaEntregada, HttpStatus.OK);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Cancelar venta
    @PatchMapping("/{id}/cancelar")
    public ResponseEntity<Venta> cancelarVenta(@PathVariable Long id) {
        try {
            Venta ventaCancelada = ventaService.cancelarVenta(id);
            return new ResponseEntity<>(ventaCancelada, HttpStatus.OK);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
