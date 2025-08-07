package com.bootcamp.repository;

import com.bootcamp.model.Venta;
import com.bootcamp.model.enums.EstadoVenta;
import com.bootcamp.model.enums.MetodoPago;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface VentaRepository extends JpaRepository<Venta, Long> {

    // Buscar ventas por cliente comprador
    @Query("SELECT v FROM Venta v WHERE v.clienteComprador.id = :idClienteComprador")
    List<Venta> buscarPorIdClienteComprador(@Param("idClienteComprador") Long idClienteComprador);

    // Buscar ventas por cliente vendedor
    @Query("SELECT v FROM Venta v WHERE v.clienteVendedor.id = :idClienteVendedor")
    List<Venta> buscarPorIdClienteVendedor(@Param("idClienteVendedor") Long idClienteVendedor);

    // Buscar ventas por producto
    @Query("SELECT v FROM Venta v WHERE v.producto.id = :idProducto")
    List<Venta> buscarPorIdProducto(@Param("idProducto") Long idProducto);

    // Buscar ventas por estado
    @Query("SELECT v FROM Venta v WHERE v.estadoVenta = :estado")
    List<Venta> buscarPorEstado(@Param("estado") EstadoVenta estadoVenta);

    // Buscar ventas por método de pago
    @Query("SELECT v FROM Venta v WHERE v.metodoPago = :metodoPago")
    List<Venta> buscarPorMetodoPago(@Param("metodoPago") MetodoPago metodoPago);

    // Buscar ventas en un rango de fechas
    @Query("SELECT v FROM Venta v WHERE v.fechaVenta BETWEEN :fechaInicio AND :fechaFin")
    List<Venta> buscarPorRangoFechas(@Param("fechaInicio") LocalDateTime fechaInicio,
                                     @Param("fechaFin") LocalDateTime fechaFin);

    // Buscar ventas pendientes de entrega
    @Query("SELECT v FROM Venta v WHERE v.estadoVenta IN (com.bootcamp.model.enums.EstadoVenta.PENDIENTE, com.bootcamp.model.enums.EstadoVenta.CONFIRMADA)")
    List<Venta> buscarPendientesDeEntrega();

    // Obtener total de ventas por vendedor
    @Query("SELECT COALESCE(SUM(v.total), 0) FROM Venta v WHERE v.clienteVendedor.id = :idVendedor")
    BigDecimal obtenerTotalPorIdVendedor(@Param("idVendedor") Long idVendedor);
}
