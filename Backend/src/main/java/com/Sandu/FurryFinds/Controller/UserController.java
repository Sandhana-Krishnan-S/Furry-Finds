package com.Sandu.FurryFinds.Controller;

import com.Sandu.FurryFinds.Model.UserModel;
import com.Sandu.FurryFinds.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("api/auth")
public class UserController {

    @Autowired
    private UserService service;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody UserModel user) {
        return service.register(user);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody UserModel user) {
        return service.login(user);
    }

    @GetMapping("/get-all")
    public  ResponseEntity<?> getAllUser() {
        return service.getUsers();
    }

    @DeleteMapping("deleteAcc")
    public  ResponseEntity<?> deleteUserAccount(@RequestBody UserModel user) {
        return service.deleteAcc(user);
    }
}
