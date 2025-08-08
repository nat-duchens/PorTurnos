package com.bootcamp.service;

import com.bootcamp.model.Rol;
import com.bootcamp.model.NombreRol;
import com.bootcamp.repository.RolRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
@AllArgsConstructor
public class RolService {

    private final RolRepository rolRepository;

    public Optional<Rol> buscarRolPorNombre(NombreRol nombre) {
        return rolRepository.findByNombre(nombre);
    }
}
