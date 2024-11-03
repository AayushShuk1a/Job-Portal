package com.example.server.Controller;
import com.example.server.Entity.Users;
import com.example.server.Services.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;


@Controller
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserServices userServices;

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
}
