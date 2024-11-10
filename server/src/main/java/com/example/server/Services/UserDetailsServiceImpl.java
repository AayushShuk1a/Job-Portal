package com.example.server.Services;


import com.example.server.Entity.Users;
import com.example.server.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;


@Service
public class UserDetailsServiceImpl implements UserDetailsService {
    @Autowired
    private UserRepository userRepository;


    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<Users> founduser=userRepository.findByUsername(username);
        if(founduser.isPresent()) {
            Users user = founduser.get();
            return org.springframework.security.core.userdetails.User.builder().
                    username(user.getUsername()).
                    password(user.getPassword()).
                    roles(user.getRoles().toArray(new String[0])).
                    build();
        }
        throw new UsernameNotFoundException("User Not Found: "+username);
    }
}
