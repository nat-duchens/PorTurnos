package com.bootcamp.security.service.Impl;

import com.bootcamp.model.Cliente;
import com.bootcamp.repository.ClienteRepository;
import com.bootcamp.security.service.ClienteDetailsService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.*;
import org.springframework.stereotype.Service;

import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ClienteDetailsServiceImpl implements ClienteDetailsService {

    private final ClienteRepository clienteRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Cliente c = clienteRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("Cliente no encontrado: " + email));

        return User.withUsername(c.getEmail())
                .password(c.getPassword())
                .authorities(
                        c.getRoles().stream()
                                .map(r -> new SimpleGrantedAuthority(r.getNombre().name()))
                                .collect(Collectors.toSet())
                )
                .disabled(!c.isEnabled())
                .accountLocked(false)
                .build();
    }
}

