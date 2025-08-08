package com.bootcamp.security.web;

import com.bootcamp.model.Cliente;
import com.bootcamp.repository.ClienteRepository;
import com.bootcamp.security.jwt.JwtUtils;
import com.bootcamp.security.model.NombreRol;
import com.bootcamp.security.model.Rol;
import com.bootcamp.security.repository.RolRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import static com.bootcamp.security.web.AuthController.*;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final AuthenticationManager authManager;
    private final ClienteRepository clienteRepository;
    private final RolRepository rolRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtils jwtUtils;

    public String login(String email, String rawPassword) {
        authManager.authenticate(new UsernamePasswordAuthenticationToken(email, rawPassword));
        var user = User.withUsername(email).password("N/A").authorities("ROLE_CLIENTE").build();
        return jwtUtils.generateToken(user);
    }

    public RegisterResponse register(RegisterRequest req) {
        if (clienteRepository.existsByEmail(req.email())) {
            throw new IllegalArgumentException("Ya existe un cliente con ese email");
        }

        // Crear cliente
        Cliente c = new Cliente();
        c.setRut(req.rut());
        c.setNombres(req.nombres());
        c.setApellidos(req.apellidos());
        c.setEmail(req.email());
        c.setPassword(passwordEncoder.encode(req.password()));
        c.setTelefono(req.telefono());
        c.setDireccion(req.direccion());
        c.setEnabled(req.enabled() == null ? true : req.enabled());

        // Asignar rol por defecto
        Rol rolCliente = rolRepository.findByNombre(NombreRol.ROLE_CLIENTE)
                .orElseThrow(() -> new IllegalStateException("ROLE_CLIENTE no configurado"));
        c.getRoles().add(rolCliente);

        // Persistir
        c = clienteRepository.save(c);

        // Emitir token para el nuevo cliente
        var springUser = User.withUsername(c.getEmail())
                .password(c.getPassword())
                .authorities(c.getRoles().stream().map(r -> r.getNombre().name()).toArray(String[]::new))
                .disabled(!c.isEnabled())
                .build();

        String token = jwtUtils.generateToken(springUser);

        return new RegisterResponse(
                new TokenResponse(token),
                new ClienteResponse(c.getId(), c.getEmail(), c.getNombres(), c.getApellidos())
        );
    }
}
