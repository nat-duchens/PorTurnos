package com.bootcamp.model;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "ventas")
@Getter @Setter
public class Venta {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Relación con el producto vendido
    @ManyToOne(optional = false)
    @JoinColumn(name = "producto_id")
    private Producto producto;

    // Cliente comprador
    @ManyToOne(optional = false)
    @JoinColumn(name = "cliente_comprador_id")
    @JsonProperty("cliente_comprador")
    private Cliente clienteComprador;

    // Cliente vendedor
    @ManyToOne(optional = false)
    @JoinColumn(name = "cliente_vendedor_id")
    @JsonProperty("cliente_vendedor")
    private Cliente clienteVendedor;

    @NotNull(message = "El precio de venta es obligatorio")
    @DecimalMin(value = "0.0", inclusive = true, message = "El precio de venta no puede ser negativo")
    @Column(name = "precio_venta", nullable = false)
    @JsonProperty("precio_venta")
    private BigDecimal precioVenta;

    @NotNull(message = "La cantidad vendida es obligatoria")
    @Min(value = 1, message = "La cantidad vendida debe ser mayor a 0")
    @Column(name = "cantidad_vendida", nullable = false)
    @JsonProperty("cantidad_vendida")
    private Integer cantidadVendida;

    @NotNull(message = "El total es obligatorio")
    @DecimalMin(value = "0.0", inclusive = true, message = "El total no puede ser negativo")
    @Column(nullable = false)
    private BigDecimal total;

    @Enumerated(EnumType.STRING)
    @Column(name = "metodo_pago", nullable = false)
    @JsonProperty("metodo_pago")
    private MetodoPago metodoPago;

    @Enumerated(EnumType.STRING)
    @Column(name = "estado_venta", nullable = false)
    @JsonProperty("estado_venta")
    private EstadoVenta estadoVenta = EstadoVenta.PENDIENTE;

    @NotBlank(message = "La dirección de entrega es obligatoria")
    @Size(max = 255)
    @Column(name = "direccion_entrega", nullable = false)
    @JsonProperty("direccion_entrega")
    private String direccionEntrega;

    @Size(max = 20)
    @Column(name = "telefono_contacto")
    @JsonProperty("telefono_contacto")
    private String telefonoContacto;

    @Column(columnDefinition = "TEXT")
    private String observaciones;

    @Column(name = "fecha_venta", updatable = false)
    @JsonProperty("fecha_venta")
    private LocalDateTime fechaVenta;

    @Column(name = "fecha_entrega")
    @JsonProperty("fecha_entrega")
    private LocalDateTime fechaEntrega;

    @PrePersist
    protected void onCreate() {
        this.fechaVenta = LocalDateTime.now();
        // Calcular el total automáticamente
        if (this.precioVenta != null && this.cantidadVendida != null) {
            this.total = this.precioVenta.multiply(BigDecimal.valueOf(this.cantidadVendida));
        }
    }

    @PreUpdate
    protected void onUpdate() {
        // Recalcular el total si se modifican precio o cantidad
        if (this.precioVenta != null && this.cantidadVendida != null) {
            this.total = this.precioVenta.multiply(BigDecimal.valueOf(this.cantidadVendida));
        }
    }

    // Enums
    @JsonFormat(shape = JsonFormat.Shape.STRING)
    public enum MetodoPago {
        EFECTIVO,
        TRANSFERENCIA,
        TARJETA_CREDITO,
        TARJETA_DEBITO,
        PAYPAL,
        MERCADOPAGO;

        @JsonCreator
        public static MetodoPago fromString(String value) {
            return MetodoPago.valueOf(value.toUpperCase());
        }
    }

    @JsonFormat(shape = JsonFormat.Shape.STRING)
    public enum EstadoVenta {
        PENDIENTE,
        CONFIRMADA,
        ENTREGADA,
        CANCELADA;

        @JsonCreator
        public static EstadoVenta fromString(String value) {
            return EstadoVenta.valueOf(value.toUpperCase());
        }
    }
}