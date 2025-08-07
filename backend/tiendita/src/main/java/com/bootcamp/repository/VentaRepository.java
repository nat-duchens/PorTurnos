package com.bootcamp.repository;

import com.bootcamp.model.Venta;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface VentaRepository extends JpaRepository<Venta, Long> {

    // Buscar ventas por cliente comprador
    List<Venta> findByClienteCompradorId(Long clienteCompradorId);

    // Buscar ventas por cliente vendedor
    List<Venta> findByClienteVendedorId(Long clienteVendedorId);

    // Buscar ventas por producto
    List<Venta> findByProductoId(Long productoId);

    // Buscar ventas por estado
    List<Venta> findByEstadoVenta(Venta.EstadoVenta estadoVenta);

    // Buscar ventas por método de pago
    List<Venta> findByMetodoPago(Venta.MetodoPago metodoPago);

    // Buscar ventas en un rango de fechas
    @Query("SELECT v FROM Venta v WHERE v.fechaVenta BETWEEN :fechaInicio AND :fechaFin")
    List<Venta> findByFechaVentaBetween(@Param("fechaInicio") LocalDateTime fechaInicio,
                                        @Param("fechaFin") LocalDateTime fechaFin);

    // Buscar ventas pendientes de entrega
    @Query("SELECT v FROM Venta v WHERE v.estadoVenta IN ('PENDIENTE', 'CONFIRMADA')")
    List<Venta> findVentasPendientesEntrega();

    // Obtener total de ventas por vendedor
    @Query("SELECT SUM(v.total) FROM Venta v WHERE v.clienteVendedor.id = :vendedorId")
    Double getTotalVentasByVendedor(@Param("vendedorId") Long vendedorId);
}
