package com.Sandu.FurryFinds.Controller;

import com.Sandu.FurryFinds.Service.TestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/test")
@CrossOrigin
public class TestController {

    @Autowired
    private TestService service;

    @PostMapping("/upload")
    public ResponseEntity<?> uploadImg(@RequestBody UploadRequest uploadRequest) {
        try {
            return service.upload(uploadRequest.getImg(), uploadRequest.getName());
        } catch (Exception e) {
            e.printStackTrace();  // Print the stack trace for debugging
            return ResponseEntity.status(500).body("Failed to upload file: " + e.getMessage());
        }
    }

    private static class UploadRequest {
        private String img;
        private String name;

        public String getImg() {
            return img;
        }

        public void setImg(String img) {
            this.img = img;
        }

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }
    }
}
