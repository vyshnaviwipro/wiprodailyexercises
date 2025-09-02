<<<<<<< HEAD
package com.wipro.Jwtdemo.Controller;

import com.wipro.Jwtdemo.util.JwtUtil;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.Map;

@RestController
public class AuthController {

    private final JwtUtil jwtUtil;

    public AuthController(JwtUtil jwtUtil) {
        this.jwtUtil = jwtUtil;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> request) {
        String username = request.get("username");
        String password = request.get("password");

        // Hardcoded authentication for demo
        if ("admin".equals(username) && "password".equals(password)) {
            String token = jwtUtil.generateToken(username);
            return ResponseEntity.ok(Map.of("token", token));
        }
        return ResponseEntity.status(401).body("Invalid credentials");
    }

    @GetMapping("/getCurrentTime")
    public ResponseEntity<?> getCurrentTime() {
        return ResponseEntity.ok(Map.of("currentTime", LocalDateTime.now().toString()));
    }
}
=======
package com.wipro.Jwtdemo.Controller;

import com.wipro.Jwtdemo.util.JwtUtil;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.Map;

@RestController
public class AuthController {

    private final JwtUtil jwtUtil;

    public AuthController(JwtUtil jwtUtil) {
        this.jwtUtil = jwtUtil;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> request) {
        String username = request.get("username");
        String password = request.get("password");

        // Hardcoded authentication for demo
        if ("admin".equals(username) && "password".equals(password)) {
            String token = jwtUtil.generateToken(username);
            return ResponseEntity.ok(Map.of("token", token));
        }
        return ResponseEntity.status(401).body("Invalid credentials");
    }

    @GetMapping("/getCurrentTime")
    public ResponseEntity<?> getCurrentTime() {
        return ResponseEntity.ok(Map.of("currentTime", LocalDateTime.now().toString()));
    }
}
>>>>>>> 817c98beb053107e8742942ddea2eb196f6efef8
