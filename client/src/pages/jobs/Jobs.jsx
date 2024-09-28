import React from 'react'
import JobDetails from './JobDetails'
import "./jobs.css"
import ProgressBar from './ProgressBar'
import ShareJobs from './ShareJobs'
import CommentSection from './CommentSection'

const Jobs = () => {
    return (
        <div className='jobDetails'>
            <div className='Details'>
                <JobDetails />
                <CommentSection/>
            </div>
            <div className='Bars'>
                <ProgressBar/>
                <ShareJobs/>
            </div>

        </div>
    )
}

export default Jobs