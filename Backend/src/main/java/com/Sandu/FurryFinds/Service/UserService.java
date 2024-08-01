package com.Sandu.FurryFinds.Service;

import com.Sandu.FurryFinds.Model.UserModel;
import com.Sandu.FurryFinds.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository repository;

    public ResponseEntity<?> register(UserModel user) {
        if (repository.findByEmail(user.getEmail()) != null) {
            return new ResponseEntity<>("You have an existing account", HttpStatus.BAD_REQUEST);
        }

        try {
            String emailRegex = "^[a-zA-Z0-9_+&-]+(?:\\.[a-zA-Z0-9_+&-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,7}$";
            String passwordRegex = "^(?=.[a-z])(?=.[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$";
            if(user.getEmail().matches(emailRegex) && user.getPassword().matches(passwordRegex) && user.getName().length() < 3) {
                return new ResponseEntity<>("Invalid email or name" ,HttpStatus.NOT_ACCEPTABLE);
            }
            PasswordEncoder passwordEncoder = PasswordEncoderFactories.createDelegatingPasswordEncoder();
            String hashedPassword  = passwordEncoder.encode(user.getPassword());
            user.setPassword(hashedPassword);
            repository.save(user);
            return new ResponseEntity<>(user ,HttpStatus.CREATED);
        } catch (Exception err) {
            return new ResponseEntity<>("Something went wrong", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public ResponseEntity<?> login(UserModel user) {
        UserModel exist = repository.findByEmail(user.getEmail());
        if (exist == null) {
            return new ResponseEntity<>("User not found", HttpStatus.UNAUTHORIZED);
        }
        PasswordEncoder passwordEncoder = PasswordEncoderFactories.createDelegatingPasswordEncoder();
        if (passwordEncoder.matches(user.getPassword(), exist.getPassword())) {
            return new ResponseEntity<>(exist, HttpStatus.OK);
        }
        return new ResponseEntity<>("Email or Password is Invalid" ,HttpStatus.UNAUTHORIZED);
    }

    public ResponseEntity<?> deleteAcc(UserModel user) {
        UserModel exist = repository.findByEmail(user.getEmail());
        if(exist == null) {
            return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
        }
        PasswordEncoder passwordEncoder = PasswordEncoderFactories.createDelegatingPasswordEncoder();
        if (passwordEncoder.matches(user.getPassword(), exist.getPassword())) {
                repository.deleteById(exist.getUserId());
                return new ResponseEntity<>(HttpStatus.OK);
            }
        return new ResponseEntity<>("Invalid credentials" ,HttpStatus.UNAUTHORIZED);
    }
}
