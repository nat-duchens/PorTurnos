package com.bootcamp.model.enums;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonFormat;

@JsonFormat(shape = JsonFormat.Shape.STRING)
public enum CategoriaProducto {
    FAMILIAR,
    CARTAS,
    TRADICIONAL,
    ROL,
    DADOS,
    TABLERO,
    MINIATURAS,
    EUROGAMES,
    ABSTRACTOS;

    @JsonCreator
    public static CategoriaProducto fromString(String value) {
        return CategoriaProducto.valueOf(value.toUpperCase());
    }
}
