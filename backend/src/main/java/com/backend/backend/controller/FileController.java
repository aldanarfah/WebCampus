package com.backend.backend.controller;

import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import jakarta.servlet.http.HttpServletRequest; // PENTING: Import ini

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
        String fileName = StringUtils.cleanPath(UUID.randomUUID().toString() + "_" + file.getOriginalFilename());

        try {
            Path targetLocation = this.fileStorageLocation.resolve(fileName);
            Files.copy(file.getInputStream(), targetLocation, StandardCopyOption.REPLACE_EXISTING);

            Map<String, String> response = new HashMap<>();
            response.put("fileName", fileName);
            // URL download disesuaikan agar sama dengan endpoint GET di bawah
            response.put("downloadUrl", "/api/files/" + fileName); 
            return ResponseEntity.ok(response);

        } catch (IOException ex) {
            return ResponseEntity.badRequest().build();
        }
    }

    // 2. ENDPOINT DOWNLOAD/LIHAT GAMBAR
    // PERBAIKAN: Menghapus "/download" agar cocok dengan Frontend
    @GetMapping("/{fileName:.+}")
    public ResponseEntity<Resource> downloadFile(@PathVariable String fileName, HttpServletRequest request) {
        try {
            Path filePath = this.fileStorageLocation.resolve(fileName).normalize();
            Resource resource = new UrlResource(filePath.toUri());

            if (resource.exists()) {
                
                // DETEKSI TIPE FILE (Agar PNG tetap transparan, JPG tetap JPG)
                String contentType = null;
                try {
                    contentType = request.getServletContext().getMimeType(resource.getFile().getAbsolutePath());
                } catch (IOException ex) {
                    // Abaikan error
                }

                if (contentType == null) {
                    contentType = "application/octet-stream";
                }

                return ResponseEntity.ok()
                        .contentType(MediaType.parseMediaType(contentType)) // Gunakan tipe file asli
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