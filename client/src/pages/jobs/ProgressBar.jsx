import React, { useState } from 'react';
import { Card, CardContent, Box, Typography, Divider, IconButton, Grid } from '@mui/material';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'; // Unmarked icon
import BookmarkIcon from '@mui/icons-material/Bookmark'; // Marked icon
import { Stepper, Step, StepLabel } from '@mui/material';


// Component for job progress
const JobProgress = ({ jobStage }) => {
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
      sx={{ 
        maxWidth: 800, 
        mx: 'auto', 
        my: 0.5, 
         
        backgroundColor: '#f5f5f5', 
        borderRadius: 2, 
        boxShadow: 2,
        border: '1px solid #e0e0e0'
      }}
    >
      <CardContent>
      <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography 
            variant="h6" 
            sx={{ 
              fontWeight: 'medium', 
              color: '#0d47a1', 
              fontSize: '1.1rem' 
            }}
          >
            Mark this Job
          </Typography>
          <IconButton onClick={handleMarkJob} sx={{ fontSize: 30, color: marked ? '#1976d2' : '#757575' }}>
            {marked ? <BookmarkIcon sx={{ fontSize: 30 }} /> : <BookmarkBorderIcon sx={{ fontSize: 30 }} />}
          </IconButton>
        </Box>
        <Divider orientation="horizontal" flexItem sx={{ mx: 1 }} />
        <Grid container spacing={2} sx={{display:'flex',justifyContent:'center',mt:'8px'}}>
          <Grid item xs={6}>
            <Stepper 
              activeStep={getActiveStep()} 
              orientation="vertical" 
              sx={{ 
                
                '& .MuiStepLabel-root': { 
                  '& .Mui-active': { 
                    color: '#1976d2',
                    fontWeight: 'bold',
                  },
                  '& .Mui-completed': {
                    color: '#4caf50',
                    fontWeight: 'bold'
                  },
                  '& .MuiStepLabel-label': {
                    color: '#424242',
                    fontSize: '0.95rem'
                  }
                }
              }}
            >
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
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
  const jobStage = "Interview"; // The current stage of the job

  return (
    <Box sx={{ ml: 4 }}>
      <JobProgress jobStage={jobStage} />
    </Box>
  );
}
