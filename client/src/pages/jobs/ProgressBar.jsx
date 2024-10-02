import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Card, CardContent, Box, Typography, Divider, IconButton, Grid } from '@mui/material';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'; // Unmarked icon
import BookmarkIcon from '@mui/icons-material/Bookmark'; // Marked icon
import { Stepper, Step, StepLabel } from '@mui/material';

// Component for job progress
const JobProgress = ({ jobStage, completionDates }) => {
  const steps = ['Forms Open', 'Test Out', 'Interview', 'Job Closed'];

  const [marked, setMarked] = useState(false);

  const handleMarkJob = () => {
    setMarked(!marked); // Toggle the marked state
  };

  const getActiveStep = () => {
    switch (jobStage) {
      case 'Forms Open':
        return 0;
      case 'Test Out':
        return 1;
      case 'Interview':
        return 2;
      case 'Job Closed':
        return 3;
      default:
        return 0;
    }
  };

  return (
    <Card
    sx={{ padding: { xs: 2, sm: 4, md: 6, lg: '20px' }, margin: '0 auto',width:{  lg: '100%' } ,my:2}}
    >
      <CardContent>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'medium',
              color: '#0d47a1',
              fontSize: '1.1rem',
            }}
          >
            Mark this Job
          </Typography>
          <IconButton
            onClick={handleMarkJob}
            sx={{ fontSize: 30, color: marked ? '#1976d2' : '#757575' }}
          >
            {marked ? <BookmarkIcon sx={{ fontSize: 30 }} /> : <BookmarkBorderIcon sx={{ fontSize: 30 }} />}
          </IconButton>
        </Box>
        <Divider orientation="horizontal" flexItem sx={{ mx: 1 }} />
        <Grid container spacing={2} sx={{width:'100%', display: 'flex', justifyContent: 'center', mt: '8px' }}>
          <Grid item xs={12}>
            <Stepper
              activeStep={getActiveStep()}
              orientation="vertical"
              sx={{
                '& .MuiStepLabel-root': {
                  alignItems: 'flex-start',
                  '& .Mui-active': {
                    color: '#1976d2',
                    fontWeight: 'bold',
                  },
                  '& .Mui-completed': {
                    color: '#00ABE4',
                    fontWeight: 'bold',
                  },
                  '& .MuiStepLabel-label': {
                    color: '#424242',
                    fontSize: '0.95rem',
                  },
                },
              }}
            >
              {steps.map((label, index) => (
                <Step key={label}>
                  <StepLabel>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '100%',
                      }}
                    >
                      <Typography
                        variant="body1"
                        sx={{ fontWeight: index <= getActiveStep() ? 'bold' : 'normal' }}
                      >
                        {label}
                      </Typography>
                      {index <= getActiveStep() && completionDates[index] && (
                        <Typography
                          variant="body1"
                          sx={{ color: '#757575', fontWeight: 'normal' }}
                        >
                          ({completionDates[index]})
                        </Typography>
                      )}
                    </Box>
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

// Main ProgressBar component
export default function ProgressBar() {
  const location = useLocation();
  const { job } = location.state || {};
  const jobStage = 'Interview'; // The current stage of the job
  const completionDates = ['2024-08-01', '2024-08-05', '2024-08-10', null]; // Dates for completed steps

  return (
    <Box sx={{ ml:{ xs: 0, sm: 0, md: "20px" }}}>
      <JobProgress jobStage={job.jobStatus} completionDates={completionDates} />
    </Box>
  );
}
