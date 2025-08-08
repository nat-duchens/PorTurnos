// com.bootcamp.service.ClienteAuthService
package com.bootcamp.service;

import com.bootcamp.model.Cliente;
import com.bootcamp.repository.ClienteRepository;
import com.bootcamp.security.model.NombreRol;
import com.bootcamp.security.model.Rol;
import com.bootcamp.security.repository.RolRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ClienteAuthService {

    private final ClienteRepository clienteRepository;
    private final RolRepository rolRepository;
    private final PasswordEncoder passwordEncoder;

    public Cliente registrarCliente(Cliente cliente) {
        if (clienteRepository.existsByEmail(cliente.getEmail())) {
            throw new IllegalArgumentException("Ya existe un cliente con ese email");
        }

        // codificar password
        cliente.setPassword(passwordEncoder.encode(cliente.getPassword()));

        // asignar rol por defecto
        Rol rolCliente = rolRepository.findByNombre(NombreRol.ROLE_CLIENTE)
                .orElseThrow(() -> new IllegalStateException("ROLE_CLIENTE no configurado"));
        cliente.getRoles().add(rolCliente);

        return clienteRepository.save(cliente);
    }
}
