package com.bootcamp.security;

import lombok.Data;
import jakarta.validation.constraints.*;

@Data
public class LoginDTO {

    @NotBlank
    private String username;

    @NotBlank
    private String password;
}
