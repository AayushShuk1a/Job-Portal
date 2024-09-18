import React from 'react';
import { Stepper, Step, StepLabel, Card, CardContent, Box, Typography } from '@mui/material';

const JobProgress = ({ jobStage }) => {
  // Define the stages
  const steps = ['Forms Open', 'Test Out', 'Interview', 'Job Closed'];

  // Determine the active step based on the current job stage
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
    <Card sx={{ maxWidth: 400 }}>
      <CardContent>
        <Typography variant="h6" align="center" gutterBottom>
          Job Progress
        </Typography>
        <Stepper activeStep={getActiveStep()} orientation="vertical">
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </CardContent>
    </Card>
  );
};

// Usage
const jobStage = "Interview"; // The current stage of the job
export default function ProgressBar() {
  return (
    <Box sx={{ ml:4   }}>
      <JobProgress jobStage={jobStage} />
    </Box>
  );
}
