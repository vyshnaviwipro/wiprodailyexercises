package com.wipro.userms.service;

import com.wipro.userms.entity.User;
import com.wipro.userms.dto.JwtRequest;
import com.wipro.userms.dto.JwtResponse;

public interface AuthService {
    JwtResponse authenticate(JwtRequest jwtRequest);
    User register(User user);
}