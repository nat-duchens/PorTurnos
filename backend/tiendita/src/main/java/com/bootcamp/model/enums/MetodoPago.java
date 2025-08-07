package com.bootcamp.model.enums;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonFormat;

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
