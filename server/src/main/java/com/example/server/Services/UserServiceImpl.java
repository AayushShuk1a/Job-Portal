package com.example.server.Services;


import com.example.server.Entity.Users;
import com.example.server.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;


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

    @Override
    public Optional<Users> findByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    @Override
    public void updateUser(Optional<Users> user) {
        user.get().setPassword(passwordEncoder.encode(user.get().getPassword()));
        userRepository.save(user.get());
    }

    @Override
    @Transactional
    public void deleteUserByUsername(String username) {
        userRepository.deleteByUsername(username);
    }
}
