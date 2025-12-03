package com.backend.backend.controller;

import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/api/files")
public class FileController {

    // Folder penyimpanan (Akan dibuat di root project folder)
    private final Path fileStorageLocation = Paths.get("uploads").toAbsolutePath().normalize();

    public FileController() {
        try {
            Files.createDirectories(this.fileStorageLocation);
        } catch (Exception ex) {
            throw new RuntimeException("Tidak bisa membuat folder upload!", ex);
        }
    }

    // 1. ENDPOINT UPLOAD
    @PostMapping("/upload")
    public ResponseEntity<Map<String, String>> uploadFile(@RequestParam("file") MultipartFile file) {
        // Generate nama file unik agar tidak bentrok (misal: foto.jpg -> uuid_foto.jpg)
        String fileName = StringUtils.cleanPath(UUID.randomUUID().toString() + "_" + file.getOriginalFilename());

        try {
            // Simpan file ke folder uploads
            Path targetLocation = this.fileStorageLocation.resolve(fileName);
            Files.copy(file.getInputStream(), targetLocation, StandardCopyOption.REPLACE_EXISTING);

            // Return nama file ke frontend
            Map<String, String> response = new HashMap<>();
            response.put("fileName", fileName);
            response.put("downloadUrl", "/api/files/download/" + fileName);
            return ResponseEntity.ok(response);

        } catch (IOException ex) {
            return ResponseEntity.badRequest().build();
        }
    }

    // 2. ENDPOINT DOWNLOAD/LIHAT GAMBAR (Agar bisa muncul di <img>)
    @GetMapping("/download/{fileName:.+}")
    public ResponseEntity<Resource> downloadFile(@PathVariable String fileName) {
        try {
            Path filePath = this.fileStorageLocation.resolve(fileName).normalize();
            Resource resource = new UrlResource(filePath.toUri());

            if (resource.exists()) {
                return ResponseEntity.ok()
                        .contentType(MediaType.IMAGE_JPEG) // Bisa disesuaikan otomatis
                        .header(HttpHeaders.CONTENT_DISPOSITION, "inline; filename=\"" + resource.getFilename() + "\"")
                        .body(resource);
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (MalformedURLException ex) {
            return ResponseEntity.notFound().build();
        }
    }
}