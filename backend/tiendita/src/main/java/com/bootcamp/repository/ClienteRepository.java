// com.bootcamp.repository.ClienteRepository
package com.bootcamp.repository;

import com.bootcamp.model.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ClienteRepository extends JpaRepository<Cliente, Long> {

    Optional<Cliente> findByEmail(String email);
    boolean existsByEmail(String email);
}
