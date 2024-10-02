package com.example.server;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class hello {

    @GetMapping("/hello")
    public String getHello(){
        return "Hello";
    }
}
