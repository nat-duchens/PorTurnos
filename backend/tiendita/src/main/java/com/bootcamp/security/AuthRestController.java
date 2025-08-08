package com.bootcamp.security;

import com.bootcamp.model.Cliente;
import com.bootcamp.model.NombreRol;
import com.bootcamp.model.Rol;
import com.bootcamp.service.ClienteServiceImpl;
import com.bootcamp.service.RolService;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;
import java.util.HashSet;
import java.util.Set;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/auth")
@AllArgsConstructor
public class AuthRestController {

    private final AuthenticationManager authenticationManager;

    private final ClienteServiceImpl clienteService;

    private final RolService rolService;

    private final PasswordEncoder passwordEncoder;

    private final JwtUtils jwtUtils;

    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginDTO loginRequest) {

        // Autentica al usuario utilizando el gestor de autenticación de Spring Security
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

        // Establece la autenticación en el contexto de seguridad de Spring Security
        SecurityContextHolder.getContext().setAuthentication(authentication);

        // Obtiene los detalles del usuario autenticado
        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();

        // Genera un token JWT para el usuario autenticado
        String jwtToken = jwtUtils.generateJwtToken(userDetails);

        // Retorna una respuesta exitosa con el token JWT y detalles del usuario
        return new ResponseEntity<>(new JwtResponse(jwtToken, userDetails.getUsername(), userDetails.getEmail()), HttpStatus.OK);
    }

    @PostMapping("/registro")
    public ResponseEntity<?> registerUser(@Valid @RequestBody RegistroDTO solicitudRegistro) {
        // Verifica si el nombre de usuario ya está en uso
        if (clienteService.existeClientePorNombreUsuario(solicitudRegistro.getUsername())) {
            return ResponseEntity.badRequest().body("Error: El username ya está en uso!");
        }

        // Verifica si el correo electrónico ya está en uso
        if (clienteService.existeClientePorEmail(solicitudRegistro.getEmail())) {
            return ResponseEntity.badRequest().body("Error: El email ya está en uso");
        }

        // Crea una nueva cuenta de usuario
        Cliente cliente = Cliente.builder()
                .nombreUsuario(solicitudRegistro.getUsername())
                .email(solicitudRegistro.getEmail())
                .password(passwordEncoder.encode(solicitudRegistro.getPassword())) // Codifica la contraseña antes de almacenarla
                .build();

        // Obtiene los roles seleccionados por el usuario y los asigna al nuevo usuario
        Set<String> strRoles = solicitudRegistro.getRoles();
        Set<Rol> roles = new HashSet<>();
        if (strRoles == null) {
            Rol rolUsuario = rolService.buscarRolPorNombre(NombreRol.ROLE_USER)
                    .orElseThrow(() -> new RuntimeException("Error: Rol no encontrado."));
            roles.add(rolUsuario);
        } else {
            strRoles.forEach(role -> {
                if (role.equals("admin")) {
                    Rol rolAdmin = rolService.buscarRolPorNombre(NombreRol.ROLE_ADMIN)
                            .orElseThrow(() -> new RuntimeException("Error: Rol no encontrado."));
                    roles.add(rolAdmin);
                } else {
                    Rol rolUsuario = rolService.buscarRolPorNombre(NombreRol.ROLE_USER)
                            .orElseThrow(() -> new RuntimeException("Error: Rol no encontrado."));
                    roles.add(rolUsuario);
                }
            });
        }

        // Asigna los roles al usuario y guarda el usuario en la base de datos
        cliente.setRoles(roles);
        clienteService.guardar(cliente);

        // Retorna una respuesta exitosa indicando que el usuario se registró correctamente
        return new ResponseEntity<>("Usuario registrado exitosamente!", HttpStatus.CREATED);
    }


    // Clase interna que representa la respuesta del token JWT
    @AllArgsConstructor
    @Getter
    @Setter
    public static class JwtResponse {
        private String token;
        private String username;
        private String email;
    }
}
