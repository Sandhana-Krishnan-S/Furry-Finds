package com.Sandu.FurryFinds.Service;

import com.Sandu.FurryFinds.Model.TestFile;
import com.Sandu.FurryFinds.Repository.TestRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Base64;

@Service
public class TestService {
    @Autowired
    private TestRepo repo;

    public ResponseEntity<?> upload(String base64Img, String name) {
        try {
            byte[] decodedImg = Base64.getDecoder().decode(base64Img);
            TestFile testFile = new TestFile();
            testFile.setImg(decodedImg);
            testFile.setName(name);
            TestFile save = repo.save(testFile);
            return new ResponseEntity<>(save, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Failed to upload file: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
