package com.example.server.Services;

import com.example.server.Entity.Jobs;

import java.util.List;

public interface JobServices {

    List<Jobs>findAll();
    Jobs findById(long id);
    void save(Jobs theJob);
    void deleteById(long id);
}
