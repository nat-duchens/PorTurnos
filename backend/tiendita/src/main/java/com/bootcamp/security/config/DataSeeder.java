package com.bootcamp.security.config;

// OJITO: Esto fue lo último que se agregó 08-08-2025

import com.bootcamp.security.model.NombreRol;
import com.bootcamp.security.model.Rol;
import com.bootcamp.security.repository.RolRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

@Slf4j
@Component
@RequiredArgsConstructor
@Profile({"default","local","dev"}) // quítalo si quieres que corra en prod también
public class DataSeeder implements CommandLineRunner {

    private final RolRepository rolRepo;

    @Override
    public void run(String... args) {
        inicializarRoles();
    }

    private void inicializarRoles() {
        crearRolSiNoExiste(NombreRol.ROLE_CLIENTE);
        crearRolSiNoExiste(NombreRol.ROLE_ADMIN); // opcional; coméntalo si no lo usas
        log.info("✅ Roles iniciales verificados/creados.");
    }

    private void crearRolSiNoExiste(NombreRol nombreRol) {
        rolRepo.findByNombre(nombreRol).orElseGet(() -> {
            log.info("🔹 Creando rol: {}", nombreRol);
            Rol rol = new Rol();
            rol.setNombre(nombreRol);
            return rolRepo.save(rol);
        });
    }
}
