import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/sidebar/Sidebar';
import JobCard from '../components/jobCard/Jobcard';
import "./Home.css";
import SocialMediaCard from '../components/socialCard/SocialCard';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import Features from '../components/features/Features';
import Newsletter from '../components/newsletter/Newsletter';
import { fetchJobs } from '../API/jobs';

const Home = () => {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 10;

  useEffect(() => {
    const getJobs = async () => {
      try {
        const jobsData = await fetchJobs();
        setJobs(jobsData);
        setFilteredJobs(jobsData); // Initialize with all jobs
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };
    getJobs();
  }, []);

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  const handleNextPage = () => {
    if (currentPage < Math.ceil(filteredJobs.length / jobsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const [showSidebar, setShowSidebar] = useState(false);

  const handleFilterButtonClick = () => {
    setShowSidebar(!showSidebar);
  };

  const handleJobClick = (job) => {
    navigate('/jobdetails', { state: { job } });
  };

  const handleFilterChange = (filters) => {
    const { jobType, experience, salary } = filters;
    let updatedJobs = [...jobs];

    // Filter by salary
    updatedJobs = updatedJobs.filter(job => job.salaryMax >= salary[0] && job.salaryMin <= salary[1]);

    // Filter by job type
    if (jobType) {
      updatedJobs = updatedJobs.filter(job => job.employmentType === jobType);
    }

    if (experience) {
      // Determine the selected experience range
      let minSelected, maxSelected;
      if (experience === '0-1 years') {
        minSelected = 0;
        maxSelected = 1;
      } else if (experience === '1-3 years') {
        minSelected = 1;
        maxSelected = 3;
      } else if (experience === '3-5 years') {
        minSelected = 3;
        maxSelected = 5;
      } else if (experience === '5+ years') {
        minSelected = 5;
        maxSelected = Infinity; // Allow any experience greater than or equal to 5
      }
  
      // Filter jobs based on the selected experience
      updatedJobs = updatedJobs.filter(job => {
        const experienceRange = job.experienceRequired;
        const [minJob, maxJob] = experienceRange.split('-').map(exp => {
          if (exp === '+') return 5; 
          return parseInt(exp);
        });
  
        
        let isEligible;
        if (maxJob === 5) {
          // If job requires "5+", allow candidates with experience >= 5
          isEligible = minJob < 5; // Candidates must have less than 5 years if it's '5+'
        } else {
          // General eligibility check
          isEligible = (minJob <= maxSelected && (maxJob >= minSelected || maxJob === Infinity));
        }
  
        return isEligible;
      });
    }
  

    setFilteredJobs(updatedJobs);
    setCurrentPage(1); // Reset to the first page
  };

  return (
    <>
      <div className='job_filter'>
        <div className='filterSm'>
          <button className='filter-button' onClick={handleFilterButtonClick}>
            Filter Jobs
          </button>
        </div>

        {showSidebar && <div className='sideBarForSmall'>
          <Sidebar onFilterChange={handleFilterChange} />
        </div>}
        <div className='sideBar'>
          <Sidebar onFilterChange={handleFilterChange} />
        </div>

        <div className='job-cards-container'>
          <div className='job-cards'>
            {currentJobs.map((job) => (
              <JobCard key={job.id} job={job} onClick={() => handleJobClick(job)} />
            ))}
          </div>

          <div className='pagination-controls'>
            <button onClick={handlePrevPage} disabled={currentPage === 1}>
              <ArrowBack />
            </button>
            <span className='page-number'>{`${currentPage}`}</span>
            <button onClick={handleNextPage} disabled={currentPage === Math.ceil(filteredJobs.length / jobsPerPage)}>
              <ArrowForward />
            </button>
          </div>
        </div>

        <div className='social-card'>
          <SocialMediaCard />
        </div>
      </div>
      <div>
        <Features />
        <Newsletter />
      </div>
    </>
  );
};

export default Home;
