package com.bootcamp.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "roles")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Rol {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    // Mapea un tipo enumerado (enum) de Java a una columna de la base de datos.
    @Enumerated(EnumType.STRING)
    @Column(length = 20)
    private NombreRol nombre;
}
