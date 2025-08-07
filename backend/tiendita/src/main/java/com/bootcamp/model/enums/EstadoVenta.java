package com.bootcamp.model.enums;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonFormat;

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