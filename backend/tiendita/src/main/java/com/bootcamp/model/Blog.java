package com.bootcamp.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Table(name = "blogs")
@Getter @Setter

public class Blog {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Relación con el cliente que publicó el producto
    @ManyToOne(optional = false)
    @JoinColumn(name = "cliente_id")
    private Cliente cliente;

    @NotBlank(message = "La categoria es obligatoria")
    private String categoria;

    @NotBlank(message = "El titulo es obligatorio")
    @Size(max = 50)
    private String titulo;

    @NotBlank(message = "El cuerpo del blog es obligatorio")
    @Column(name = "cuerpo_blog", nullable = false)
    @JsonProperty("cuerpo_blog")
    private String cuerpoBlog;

    @Column(columnDefinition = "TEXT")
    private String imagen;

    @Column(name = "fecha_publicacion", updatable = false)
    private LocalDateTime fechaPublicacion;



}
