package com.example.server.Services;

import com.example.server.Entity.Jobs;
import com.example.server.Repository.JobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JobServicesImpl implements JobServices {

    private JobRepository jobRepository;

    @Autowired
    public JobServicesImpl(JobRepository jobRepository){
        this.jobRepository=jobRepository;
    }
    @Override
    public List<Jobs> findAll() {
        return jobRepository.findAll();
    }

    @Override
    public Jobs findById(long id) {
        return null;
    }

    @Override
    public void save(Jobs theJob) {
        jobRepository.save(theJob);
    }

    @Override
    public void deleteById(long id) {

    }
}
