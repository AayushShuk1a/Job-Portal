package com.example.server.Services;

import com.example.server.Entity.Users;

import java.util.Optional;


public interface UserServices {
    Users registerUser(Users users);
    Optional<Users> findByUsername(String username);
    void updateUser(Optional<Users> user);
    void deleteUserByUsername(String username);
}
