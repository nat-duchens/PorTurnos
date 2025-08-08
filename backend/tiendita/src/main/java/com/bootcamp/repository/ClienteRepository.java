package com.bootcamp.repository;

import com.bootcamp.model.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

public interface ClienteRepository extends JpaRepository<Cliente, Long> {
    Long id(Long id);

    Optional<Cliente> findByNombreUsuario(String nombreUsuario);

    Boolean existsByNombreUsuario(String nombreUsuario);

    Boolean existsByEmail(String email);
    // JPARepository nos da el CRUD completo automaticamente
}
