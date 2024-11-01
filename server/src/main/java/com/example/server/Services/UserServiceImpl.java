package com.example.server.Services;


import com.example.server.Entity.Users;
import com.example.server.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


@Service
public class UserServiceImpl implements UserServices{


    private UserRepository userRepository;
    private PasswordEncoder passwordEncoder;
    @Autowired
    public UserServiceImpl(UserRepository userRepository,PasswordEncoder passwordEncoder){
        this.userRepository=userRepository;
        this.passwordEncoder=passwordEncoder;

    }

    @Override
    public Users registerUser(Users users) {
        if(userRepository.findByUsername(users.getUsername()).isPresent()||userRepository.findByEmail(users.getEmail()).isPresent()){
            throw new RuntimeException("Username or Email already present");
        }
        users.setPassword(passwordEncoder.encode(users.getPassword()));
        return userRepository.save(users);
    }
}
