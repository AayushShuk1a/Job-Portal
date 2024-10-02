package com.example.server.Controller;

import com.example.server.Entity.Jobs;
import com.example.server.Services.JobServices;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@Controller
@RequestMapping("/jobs")
@CrossOrigin(origins = "http://localhost:5173")
public class JobsController {
    private JobServices jobServices;

    public JobsController(JobServices jobServices){
        this.jobServices=jobServices;
    }

    @PostMapping("/save")
    @ResponseBody
    public String saveJobs(@RequestBody Jobs jobs){
        System.out.println("Hello");
        jobServices.save(jobs);
        return "Success";
    }

    @GetMapping("/list")
    @ResponseBody
    public List<Jobs>jobsList(){
        return jobServices.findAll();
    }

}
