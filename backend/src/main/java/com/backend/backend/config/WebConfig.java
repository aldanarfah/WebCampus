package com.backend.backend.config; // Sesuaikan package Anda

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        // Izinkan semua endpoint (/**)
        registry.addMapping("/**")
                // Hanya dari Angular
                .allowedOrigins("http://localhost:4200")
                // IZINKAN SEMUA METHOD PENTING INI
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                .allowedHeaders("*")
                .allowCredentials(true);
    }
}