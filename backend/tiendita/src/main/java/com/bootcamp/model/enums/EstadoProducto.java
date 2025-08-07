package com.bootcamp.model.enums;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonFormat;

@JsonFormat(shape = JsonFormat.Shape.STRING)
public enum EstadoProducto {
    NUEVO,
    SEMI_NUEVO,
    USADO;

    @JsonCreator
    public static EstadoProducto fromString(String value) {
        return EstadoProducto.valueOf(value.toUpperCase());
    }
}