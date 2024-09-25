import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/sidebar/Sidebar'
import JobCard from '../components/jobCard/Jobcard'
import "./Home.css"
import SocialMediaCard from '../components/socialCard/SocialCard'
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import dummyData from "../temp/dummyData.json"
import Features from '../components/features/Features';
import Newsletter from '../components/newsletter/Newsletter';



const Home = () => {
  const navigate = useNavigate();


  const [jobs, setJobs] = useState([]);
  console.log(jobs)

  useEffect(() => {
    // Simulate fetching data from the JSON file
    setJobs(dummyData);

  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 10;

  // Calculate current jobs
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

  const handleNextPage = () => {
    if (currentPage < Math.ceil(jobs.length / jobsPerPage)) {
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
    setShowSidebar(!showSidebar); // Toggle sidebar visibility
  };

  const handleJobClick = (job) => {
    navigate('/jobdetails', { state: { job } });
    console.log(job)
  };
  return (
    <>
      <div className='job_filter'>
        <div className='filterSm'>
          <button className='filter-button' onClick={handleFilterButtonClick}>
            Filter Jobs
          </button>

        </div>


        {(showSidebar && <div className='sideBarForSmall'>
          <Sidebar />
        </div>)}
        <div className='sideBar'>
          <Sidebar />
        </div>

        <div className='job-cards-container'>
          <div className='job-cards'>
            {currentJobs.map((jobs) => (
              <JobCard key={jobs.id} job={jobs} onClick={() => handleJobClick(jobs)} />
            ))}
          </div>
          {/* Pagination Controls */}

          <div className='pagination-controls'>
            <button onClick={handlePrevPage} disabled={currentPage === 1}>
              <ArrowBack />
            </button>
            <span className='page-number'>{`${currentPage}`}</span>
            <button onClick={handleNextPage} disabled={currentPage === Math.ceil(jobs.length / jobsPerPage)}>
              <ArrowForward />
            </button>
          </div>

        </div>

        <div className='social-card'>

          <SocialMediaCard />
        </div>



      </div >
      <div>
        <Features/>
        <Newsletter/>
      </div>
    </>
  )
}

export default Home