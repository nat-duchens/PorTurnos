package com.bootcamp.service;

import com.bootcamp.model.Venta;
import com.bootcamp.model.enums.EstadoVenta;
import com.bootcamp.model.enums.MetodoPago;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

public interface VentaService {

    // CRUD básico
    Venta guardarVenta(Venta venta);
    Optional<Venta> obtenerVentaPorId(Long id);
    List<Venta> obtenerTodasLasVentas();
    Venta actualizarVenta(Venta venta);
    void eliminarVenta(Long id);

    // Métodos de búsqueda específicos
    List<Venta> obtenerVentasPorComprador(Long clienteCompradorId);
    List<Venta> obtenerVentasPorVendedor(Long clienteVendedorId);
    List<Venta> obtenerVentasPorProducto(Long productoId);
    List<Venta> obtenerVentasPorEstado(EstadoVenta estadoVenta);
    List<Venta> obtenerVentasPorMetodoPago(MetodoPago metodoPago);
    List<Venta> obtenerVentasEntreFechas(LocalDateTime fechaInicio, LocalDateTime fechaFin);
    List<Venta> obtenerVentasPendientesEntrega();

    // Métodos de negocio
    Venta confirmarVenta(Long ventaId);
    Venta marcarComoEntregada(Long ventaId);
    Venta cancelarVenta(Long ventaId);
    BigDecimal obtenerTotalVentasPorVendedor(Long idVendedor);
}
