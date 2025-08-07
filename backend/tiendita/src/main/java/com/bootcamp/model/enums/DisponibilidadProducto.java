package com.bootcamp.model.enums;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonFormat;

@JsonFormat(shape = JsonFormat.Shape.STRING)
public enum DisponibilidadProducto {
    DISPONIBLE,
    VENDIDO,
    PAUSADO;

    @JsonCreator
    public static DisponibilidadProducto fromString(String value) {
        return DisponibilidadProducto.valueOf(value.toUpperCase());
    }
}
