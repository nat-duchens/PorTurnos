package com.bootcamp.service.impl;

import com.bootcamp.model.Venta;
import com.bootcamp.repository.VentaRepository;
import com.bootcamp.service.VentaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class VentaServiceImpl implements VentaService {

    @Autowired
    private VentaRepository ventaRepository;

    @Override
    public Venta guardarVenta(Venta venta) {
        return ventaRepository.save(venta);
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<Venta> obtenerVentaPorId(Long id) {
        return ventaRepository.findById(id);
    }

    @Override
    @Transactional(readOnly = true)
    public List<Venta> obtenerTodasLasVentas() {
        return ventaRepository.findAll();
    }

    @Override
    public Venta actualizarVenta(Venta venta) {
        return ventaRepository.save(venta);
    }

    @Override
    public void eliminarVenta(Long id) {
        ventaRepository.deleteById(id);
    }

    @Override
    @Transactional(readOnly = true)
    public List<Venta> obtenerVentasPorComprador(Long clienteCompradorId) {
        return ventaRepository.findByClienteCompradorId(clienteCompradorId);
    }

    @Override
    @Transactional(readOnly = true)
    public List<Venta> obtenerVentasPorVendedor(Long clienteVendedorId) {
        return ventaRepository.findByClienteVendedorId(clienteVendedorId);
    }

    @Override
    @Transactional(readOnly = true)
    public List<Venta> obtenerVentasPorProducto(Long productoId) {
        return ventaRepository.findByProductoId(productoId);
    }

    @Override
    @Transactional(readOnly = true)
    public List<Venta> obtenerVentasPorEstado(Venta.EstadoVenta estadoVenta) {
        return ventaRepository.findByEstadoVenta(estadoVenta);
    }

    @Override
    @Transactional(readOnly = true)
    public List<Venta> obtenerVentasPorMetodoPago(Venta.MetodoPago metodoPago) {
        return ventaRepository.findByMetodoPago(metodoPago);
    }

    @Override
    @Transactional(readOnly = true)
    public List<Venta> obtenerVentasEntreFechas(LocalDateTime fechaInicio, LocalDateTime fechaFin) {
        return ventaRepository.findByFechaVentaBetween(fechaInicio, fechaFin);
    }

    @Override
    @Transactional(readOnly = true)
    public List<Venta> obtenerVentasPendientesEntrega() {
        return ventaRepository.findVentasPendientesEntrega();
    }

    @Override
    public Venta confirmarVenta(Long ventaId) {
        Optional<Venta> ventaOpt = ventaRepository.findById(ventaId);
        if (ventaOpt.isPresent()) {
            Venta venta = ventaOpt.get();
            venta.setEstadoVenta(Venta.EstadoVenta.CONFIRMADA);
            return ventaRepository.save(venta);
        }
        throw new RuntimeException("Venta no encontrada con ID: " + ventaId);
    }

    @Override
    public Venta marcarComoEntregada(Long ventaId) {
        Optional<Venta> ventaOpt = ventaRepository.findById(ventaId);
        if (ventaOpt.isPresent()) {
            Venta venta = ventaOpt.get();
            venta.setEstadoVenta(Venta.EstadoVenta.ENTREGADA);
            venta.setFechaEntrega(LocalDateTime.now());
            return ventaRepository.save(venta);
        }
        throw new RuntimeException("Venta no encontrada con ID: " + ventaId);
    }

    @Override
    public Venta cancelarVenta(Long ventaId) {
        Optional<Venta> ventaOpt = ventaRepository.findById(ventaId);
        if (ventaOpt.isPresent()) {
            Venta venta = ventaOpt.get();
            venta.setEstadoVenta(Venta.EstadoVenta.CANCELADA);
            return ventaRepository.save(venta);
        }
        throw new RuntimeException("Venta no encontrada con ID: " + ventaId);
    }

    @Override
    @Transactional(readOnly = true)
    public Double obtenerTotalVentasPorVendedor(Long vendedorId) {
        Double total = ventaRepository.getTotalVentasByVendedor(vendedorId);
        return total != null ? total : 0.0;
    }
}