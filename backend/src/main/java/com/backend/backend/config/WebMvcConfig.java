package com.backend.backend.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry; // Tambahan Import
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import java.nio.file.Path;
import java.nio.file.Paths;

@Configuration
public class WebMvcConfig implements WebMvcConfigurer {

    @Value("${file.upload-dir}")
    private String uploadDir;

    // 1. Konfigurasi agar gambar bisa dibuka di browser
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        Path uploadPath = Paths.get(uploadDir);
        String uploadAbsolutePath = uploadPath.toFile().getAbsolutePath();

        registry.addResourceHandler("/uploads/**")
                .addResourceLocations("file:" + uploadAbsolutePath + "/");
    }

    // 2. ✨ KONFIGURASI CORS (Solusi Masalahmu) ✨
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**") // Izinkan akses ke semua URL API
                .allowedOrigins("http://localhost:4200") // Hanya izinkan dari Angular
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") // Method yang boleh
                .allowedHeaders("*")
                .allowCredentials(true);
    }
}