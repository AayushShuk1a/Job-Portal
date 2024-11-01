package com.example.server.Controller;
import com.example.server.Entity.Users;
import com.example.server.Services.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;


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
}
