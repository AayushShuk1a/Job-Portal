import React from 'react'
import JobDetails from './JobDetails'
import "./jobs.css"
import ProgressBar from './ProgressBar'

const Jobs = () => {
    return (
        <div className='jobDetails'>
            <div className='Details'>
                <JobDetails />
            </div>
            <div className='Bars'>
                <ProgressBar/>
            </div>

        </div>
    )
}

export default Jobs