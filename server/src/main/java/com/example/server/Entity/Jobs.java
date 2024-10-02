package com.example.server.Entity;

import jakarta.persistence.*;

import java.time.LocalDate;
import java.util.Collections;
import java.util.List;

@Entity
@Table(name = "jobs")
public class Jobs {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "role",nullable = false)
    private String role;

    @Column(name = "company_name",nullable = false)
    private String company_name;

    @Column(name = "img_url",nullable = false)
    private String img_url;

    @Column(name = "location", nullable = false)
    private String location;

    @Column(name = "employment_type", nullable = false)
    private String employmentType;

    @Column(name = "posting_date", nullable = false)
    private LocalDate postingDate;

    @Column(name = "salary_min", nullable = false)
    private Double salaryMin;

    @Column(name = "salary_max", nullable = false)
    private Double salaryMax;

    @Column(name = "about_company", columnDefinition = "TEXT")
    private String aboutCompany;

    @Column(name = "experience_required", nullable = false)
    private String experienceRequired;

    @Column(name = "job_description", columnDefinition = "TEXT")
    private String jobDescription;



    @ElementCollection
    @CollectionTable(name = "required_skills", joinColumns = @JoinColumn(name = "job_id"))
    @Column(name = "required_skills", columnDefinition = "TEXT")
    private List<String> requiredSkills;

    @ElementCollection
    @CollectionTable(name = "key_responsibilities", joinColumns = @JoinColumn(name = "job_id"))
    @Column(name = "key_responsibilities", columnDefinition = "TEXT")
    private List<String> keyResponsibilities;

    @ElementCollection
    @CollectionTable(name = "requirements", joinColumns = @JoinColumn(name = "job_id"))
    @Column(name = "requirements", columnDefinition = "TEXT")
    private List<String> requirements;

    @Enumerated(EnumType.STRING)
    @Column(name = "job_status", nullable = false)
    private JobStatus jobStatus = JobStatus.FORMS_OPEN;

    public enum JobStatus {
        FORMS_OPEN, TEST_OUT, INTERVIEW, JOB_CLOSED
    }

    public Jobs() {}


    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getCompany_name() {
        return company_name;
    }

    public String getImg_url() {
        return img_url;
    }

    public void setImg_url(String img_url) {
        this.img_url = img_url;
    }

    public void setCompany_name(String company_name) {
        this.company_name = company_name;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getEmploymentType() {
        return employmentType;
    }

    public void setEmploymentType(String employmentType) {
        this.employmentType = employmentType;
    }

    public LocalDate getPostingDate() {
        return postingDate;
    }

    public void setPostingDate(LocalDate postingDate) {
        this.postingDate = postingDate;
    }

    public Double getSalaryMin() {
        return salaryMin;
    }

    public void setSalaryMin(Double salaryMin) {
        this.salaryMin = salaryMin;
    }

    public Double getSalaryMax() {
        return salaryMax;
    }

    public void setSalaryMax(Double salaryMax) {
        this.salaryMax = salaryMax;
    }

    public String getAboutCompany() {
        return aboutCompany;
    }

    public void setAboutCompany(String aboutCompany) {
        this.aboutCompany = aboutCompany;
    }

    public String getExperienceRequired() {
        return experienceRequired;
    }

    public void setExperienceRequired(String experienceRequired) {
        this.experienceRequired = experienceRequired;
    }

    public String getJobDescription() {
        return jobDescription;
    }

    public void setJobDescription(String jobDescription) {
        this.jobDescription = jobDescription;
    }



    public JobStatus getJobStatus() {
        return jobStatus;
    }

    public void setJobStatus(JobStatus jobStatus) {
        this.jobStatus = jobStatus;
    }

    public List<String> getRequiredSkills() {
        return requiredSkills;
    }





    public List<String> getKeyResponsibilities() {
        return keyResponsibilities;
    }

    public void setRequiredSkills(List<String> requiredSkills) {
        this.requiredSkills = requiredSkills;
    }

    public void setKeyResponsibilities(List<String> keyResponsibilities) {
        this.keyResponsibilities = keyResponsibilities;
    }

    public void setRequirements(List<String> requirements) {
        this.requirements = requirements;
    }



    public List<String> getRequirements() {
        return requirements;
    }





    @Override
    public String toString() {
        return "Jobs{" +
                "id=" + id +
                ", role='" + role + '\'' +
                ", company_name='" + company_name + '\'' +
                ", location='" + location + '\'' +
                ", employmentType='" + employmentType + '\'' +
                ", postingDate=" + postingDate +
                ", salaryMin=" + salaryMin +
                ", salaryMax=" + salaryMax +
                ", aboutCompany='" + aboutCompany + '\'' +
                ", experienceRequired='" + experienceRequired + '\'' +
                ", jobDescription='" + jobDescription + '\'' +
                ", requiredSkills='" + requiredSkills + '\'' +
                ", keyResponsibilities='" + keyResponsibilities + '\'' +
                ", requirements='" + requirements + '\'' +
                ", jobStatus=" + jobStatus +
                '}';
    }
}
