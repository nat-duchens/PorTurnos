package com.bootcamp.security.web;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth") // URL final con context-path /api -> /api/auth/...
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    public record LoginRequest(String email, String password) {}
    public record RegisterRequest(
            String rut,
            String nombres,
            String apellidos,
            String email,
            String password,
            String telefono,
            String direccion,
            Boolean enabled // opcional, puedes omitirlo si default=true
    ) {}
    public record TokenResponse(String token) {}
    public record ClienteResponse(Long id, String email, String nombres, String apellidos) {}
    public record RegisterResponse(TokenResponse token, ClienteResponse cliente) {}

    @PostMapping("/login")
    public ResponseEntity<TokenResponse> login(@RequestBody LoginRequest req) {
        String token = authService.login(req.email(), req.password());
        return ResponseEntity.ok(new TokenResponse(token));
    }

    @PostMapping("/register")
    public ResponseEntity<RegisterResponse> register(@RequestBody RegisterRequest req) {
        var result = authService.register(req); // crea cliente + asigna rol + devuelve token
        return ResponseEntity.status(201).body(result);
    }
}
