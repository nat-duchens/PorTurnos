package com.bootcamp.service;

import com.bootcamp.model.Venta;
import com.bootcamp.repository.VentaRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@Transactional(readOnly = true)
public class VentaServiceImpl implements VentaService {

    private final VentaRepository ventaRepository;

    public VentaServiceImpl(VentaRepository ventaRepository) {
        this.ventaRepository = ventaRepository;
    }

    @Override
    @Transactional
    public Venta guardarVenta(Venta venta) {
        // Calcular total y fecha antes de validar/persistir
        calcularTotal(venta);
        if (venta.getFechaVenta() == null) {
            venta.setFechaVenta(LocalDateTime.now());
        }
        return ventaRepository.save(venta);
    }

    @Override
    public Optional<Venta> obtenerVentaPorId(Long id) {
        return ventaRepository.findById(id);
    }

    @Override
    public List<Venta> obtenerTodasLasVentas() {
        return ventaRepository.findAll();
    }

    @Override
    @Transactional
    public Venta actualizarVenta(Venta venta) {
        ventaRepository.findById(venta.getId())
                .orElseThrow(() -> new EntityNotFoundException("Venta no encontrada con ID: " + venta.getId()));
        calcularTotal(venta);
        return ventaRepository.save(venta);
    }

    @Override
    @Transactional
    public void eliminarVenta(Long id) {
        if (!ventaRepository.existsById(id)) {
            throw new EntityNotFoundException("Venta no encontrada con ID: " + id);
        }
        ventaRepository.deleteById(id);
    }

    @Override
    public List<Venta> obtenerVentasPorComprador(Long clienteCompradorId) {
        return ventaRepository.buscarPorIdClienteComprador(clienteCompradorId);
    }

    @Override
    public List<Venta> obtenerVentasPorVendedor(Long clienteVendedorId) {
        return ventaRepository.buscarPorIdClienteVendedor(clienteVendedorId);
    }

    @Override
    public List<Venta> obtenerVentasPorProducto(Long productoId) {
        return ventaRepository.buscarPorIdProducto(productoId);
    }

    @Override
    public List<Venta> obtenerVentasPorEstado(Venta.EstadoVenta estadoVenta) {
        return ventaRepository.buscarPorEstado(estadoVenta);
    }

    @Override
    public List<Venta> obtenerVentasPorMetodoPago(Venta.MetodoPago metodoPago) {
        return ventaRepository.buscarPorMetodoPago(metodoPago);
    }

    @Override
    public List<Venta> obtenerVentasEntreFechas(LocalDateTime fechaInicio, LocalDateTime fechaFin) {
        return ventaRepository.buscarPorRangoFechas(fechaInicio, fechaFin);
    }

    @Override
    public List<Venta> obtenerVentasPendientesEntrega() {
        return ventaRepository.buscarPendientesDeEntrega();
    }

    @Override
    @Transactional
    public Venta confirmarVenta(Long ventaId) {
        Venta venta = ventaRepository.findById(ventaId)
                .orElseThrow(() -> new EntityNotFoundException("Venta no encontrada con ID: " + ventaId));
        venta.setEstadoVenta(Venta.EstadoVenta.CONFIRMADA);
        calcularTotal(venta);
        return ventaRepository.save(venta);
    }

    @Override
    @Transactional
    public Venta marcarComoEntregada(Long ventaId) {
        Venta venta = ventaRepository.findById(ventaId)
                .orElseThrow(() -> new EntityNotFoundException("Venta no encontrada con ID: " + ventaId));
        venta.setEstadoVenta(Venta.EstadoVenta.ENTREGADA);
        venta.setFechaEntrega(LocalDateTime.now());
        calcularTotal(venta);
        return ventaRepository.save(venta);
    }

    @Override
    @Transactional
    public Venta cancelarVenta(Long ventaId) {
        Venta venta = ventaRepository.findById(ventaId)
                .orElseThrow(() -> new EntityNotFoundException("Venta no encontrada con ID: " + ventaId));
        venta.setEstadoVenta(Venta.EstadoVenta.CANCELADA);
        calcularTotal(venta);
        return ventaRepository.save(venta);
    }

    @Override
    public BigDecimal obtenerTotalVentasPorVendedor(Long idVendedor) {
        BigDecimal total = ventaRepository.obtenerTotalPorIdVendedor(idVendedor);
        return total != null ? total : BigDecimal.ZERO;
    }

    private void calcularTotal(Venta venta) {
        if (venta.getPrecioVenta() != null && venta.getCantidadVendida() != null) {
            BigDecimal total = venta.getPrecioVenta()
                    .multiply(BigDecimal.valueOf(venta.getCantidadVendida()))
                    .setScale(2, RoundingMode.HALF_UP);
            // Usamos el setter interno de la entidad
            venta.setTotalInterno(total);
        }
    }
}
