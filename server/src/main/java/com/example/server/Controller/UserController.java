package com.example.server.Controller;
import com.example.server.Entity.Users;
import com.example.server.Services.UserDetailsServiceImpl;
import com.example.server.Services.UserServices;
import com.example.server.utils.JwtUtils;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;


@Controller
@RequestMapping("/users")   
@Slf4j
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {

    @Autowired
    private UserServices userServices;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserDetailsServiceImpl userDetailsService;

    @Autowired
    private JwtUtils jwtUtils;

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@RequestBody Users users){
        try{
            Users newUser=userServices.registerUser(users);
            return ResponseEntity.ok(newUser);
        }catch (Exception e){
            return ResponseEntity.badRequest().body("Error"+e.getMessage());
        }
    }

    @PutMapping
    public ResponseEntity<?> updateUser(@RequestBody Users user){
        Authentication authentication= SecurityContextHolder.getContext().getAuthentication();
        String username=authentication.getName();
        Optional<Users> updatedUser=userServices.findByUsername(username);
        if(updatedUser.isPresent()){
            updatedUser.get().setUsername(user.getUsername());
            updatedUser.get().setPassword(user.getPassword());
            updatedUser.get().setEmail(user.getEmail());
            userServices.updateUser(updatedUser);
            return ResponseEntity.ok(updatedUser);
        }else {
            return ResponseEntity.status(404).body("User not found");
        }
    }

    @DeleteMapping
    public ResponseEntity<?> deleteUser(){
        Authentication authentication=SecurityContextHolder.getContext().getAuthentication();
        String username=authentication.getName();
        userServices.deleteUserByUsername(username);
        return ResponseEntity.status(200).body("The User Has Been Deleted");
    }

    @PostMapping("/login")
    public ResponseEntity<?>loginUser(@RequestBody Users users){
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(users.getUsername(),users.getPassword())
            );
            UserDetails userDetails=userDetailsService.loadUserByUsername(users.getUsername());
            String jwt=jwtUtils.generateToken(userDetails.getUsername());
            return new ResponseEntity<>(jwt, HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>("Incorrect username or password", HttpStatus.BAD_REQUEST);

        }
    }
}
