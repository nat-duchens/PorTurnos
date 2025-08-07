package com.bootcamp.model;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalDateTime;

@Entity
@Table(name = "ventas")

@Getter
@Setter
public class Venta {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Version
    private Long version;

    // Producto vendido
    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "producto_id", nullable = false)
    private Producto producto;

    // Cliente comprador
    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "cliente_comprador_id", nullable = false)
    @JsonProperty("cliente_comprador")
    private Cliente clienteComprador;

    // Cliente vendedor
    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "cliente_vendedor_id", nullable = false)
    @JsonProperty("cliente_vendedor")
    private Cliente clienteVendedor;

    @NotNull(message = "El precio de venta es obligatorio")
    @DecimalMin(value = "0.00", inclusive = true, message = "El precio de venta no puede ser negativo")
    @Digits(integer = 17, fraction = 2)
    @Column(name = "precio_venta", nullable = false, precision = 19, scale = 2)
    @JsonProperty("precio_venta")
    private BigDecimal precioVenta;

    @NotNull(message = "La cantidad vendida es obligatoria")
    @Min(value = 1, message = "La cantidad vendida debe ser mayor que cero")
    @Column(name = "cantidad_vendida", nullable = false)
    @JsonProperty("cantidad_vendida")
    private Integer cantidadVendida;

    // El cliente NO envía total; lo calculamos nosotros
    @DecimalMin(value = "0.00", inclusive = true, message = "El total no puede ser negativo")
    @Digits(integer = 17, fraction = 2)
    @Column(nullable = false, precision = 19, scale = 2)
    @Setter(AccessLevel.NONE)
    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    private BigDecimal total;

    @Enumerated(EnumType.STRING)
    @Column(name = "metodo_pago", nullable = false, length = 30)
    @JsonProperty("metodo_pago")
    private MetodoPago metodoPago;

    @Enumerated(EnumType.STRING)
    @Column(name = "estado_venta", nullable = false, length = 20)
    @JsonProperty("estado_venta")
    private EstadoVenta estadoVenta = EstadoVenta.PENDIENTE;

    @NotBlank(message = "La dirección de entrega es obligatoria")
    @Size(max = 255)
    @Column(name = "direccion_entrega", nullable = false, length = 255)
    @JsonProperty("direccion_entrega")
    private String direccionEntrega;

    @Size(max = 20)
    @Pattern(regexp = "^[+0-9\\-()\\s]{0,20}$", message = "Formato de teléfono inválido")
    @Column(name = "telefono_contacto", length = 20)
    @JsonProperty("telefono_contacto")
    private String telefonoContacto;

    @Lob
    private String observaciones;

    @Column(name = "fecha_venta", updatable = false, nullable = false)
    @JsonProperty("fecha_venta")
    private LocalDateTime fechaVenta;

    @Column(name = "fecha_entrega")
    @JsonProperty("fecha_entrega")
    private LocalDateTime fechaEntrega;

    @PrePersist
    protected void antesDeGuardar() {
        if (this.fechaVenta == null) {
            this.fechaVenta = LocalDateTime.now();
        }
        recalcularTotal();
    }

    @PreUpdate
    protected void antesDeActualizar() {
        recalcularTotal();
    }

    private void recalcularTotal() {
        if (this.precioVenta != null && this.cantidadVendida != null) {
            this.total = this.precioVenta
                    .multiply(BigDecimal.valueOf(this.cantidadVendida))
                    .setScale(2, RoundingMode.HALF_UP);
        }
    }

    /** Setter interno (package-private) para que el servicio pueda asignar el total calculado */
    public void setTotalInterno(BigDecimal total) {
        this.total = total;
    }

    // Enumeraciones
    @JsonFormat(shape = JsonFormat.Shape.STRING)
    public enum MetodoPago {
        EFECTIVO,
        TRANSFERENCIA,
        TARJETA_CREDITO,
        TARJETA_DEBITO,
        PAYPAL,
        MERCADOPAGO;

        @JsonCreator
        public static MetodoPago desdeCadena(String valor) {
            return MetodoPago.valueOf(valor.toUpperCase());
        }
    }

    @JsonFormat(shape = JsonFormat.Shape.STRING)
    public enum EstadoVenta {
        PENDIENTE,
        CONFIRMADA,
        ENTREGADA,
        CANCELADA;

        @JsonCreator
        public static EstadoVenta desdeCadena(String valor) {
            return EstadoVenta.valueOf(valor.toUpperCase());
        }
    }
}