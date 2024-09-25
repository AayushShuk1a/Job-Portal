import React from 'react'
import JobDetails from './JobDetails'
import "./jobs.css"
import ProgressBar from './ProgressBar'
import ShareJobs from './ShareJobs'

const Jobs = () => {
    return (
        <div className='jobDetails'>
            <div className='Details'>
                <JobDetails />
            </div>
            <div className='Bars'>
                <ProgressBar/>
                <ShareJobs/>
            </div>

        </div>
    )
}

export default Jobs