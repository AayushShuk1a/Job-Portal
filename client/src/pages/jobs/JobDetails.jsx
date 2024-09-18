import React from 'react';
import { useLocation } from 'react-router-dom';
import { Card, CardContent, Typography, Box, CardMedia, List, ListItem, Button } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PaidIcon from '@mui/icons-material/Paid';  // Salary Icon

const JobDetails = () => {
  const location = useLocation();
  const { job } = location.state || {}; // Access the job data passed via state

  if (!job) {
    return <Typography>No job details available.</Typography>;
  }

  return (
    <div style={{ paddingLeft: 30 }}>
      <Card elevation={0} sx={{ padding: 2, position: 'sticky' }}>
        {/* Job Image */}
        <CardMedia
          component="img"
          sx={{ height: 200, objectFit: 'cover' }}
          image={job.image}
          alt={job.companyName}
        />

        <CardContent>
          {/* Job Title */}
          <Typography
            variant="h4"
            sx={{
              fontWeight: 600,  // Bold
              fontSize: '28px',
              marginBottom: '20px',
            }}
          >
            {job.position} - {job.companyName}
          </Typography>

          {/* Apply Button */}
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: '#00ABE4', '&:hover': { backgroundColor: '#0097C0' },
              padding: '7px 30px',
              fontSize: '16px',
              textTransform: 'none',
              fontWeight: 'bold',
              borderRadius: '25px'
            }}
          >
            Apply
          </Button>
        </CardContent>
      </Card>

      <Card elevation={0} sx={{ padding: 1, mt: 0.5 }}>
        <CardContent>
          {/* Job Details (Location, Job Type, etc.) */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '10px',
              gap: '20px',
            }}
          >
            {/* Location */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <LocationOnIcon color="action" />
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  fontSize: '16px',
                  fontWeight: '600'
                }}
              >
                {job.location || 'Not specified'}
              </Typography>
            </Box>

            {/* Job Type */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <AccessTimeIcon color="action" />
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  fontSize: '16px',
                  fontWeight: '600'
                }}
              >
                {job.jobType || 'Not specified'}
              </Typography>
            </Box>

            {/* Date Posted */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <CalendarTodayIcon color="action" />
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  fontSize: '16px',
                  fontWeight: '600'
                }}
              >
                {job.datePosted || 'Not specified'}
              </Typography>
            </Box>

            {/* Expected Salary */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <PaidIcon color="action" />
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  fontSize: '16px',
                  fontWeight: '600'
                }}
              >
                {job.expectedSalary || 'Not specified'}
              </Typography>
            </Box>
          </Box>

          {/* Company About */}
          {job.companyAbout && (
            <>
              <Typography
                variant="h6"
                sx={{
                  mt: 3,
                  fontWeight: 600,  // Semi-bold
                  fontSize: '22px',
                }}
                gutterBottom
              >
                About the Company
              </Typography>
              <Typography
                variant="body1"
                paragraph
                sx={{
                  fontSize: '16px',
                  lineHeight: '1.6',
                }}
              >
                {job.companyAbout}
              </Typography>
            </>
          )}

          {/* Experience Required */}
          {job.experienceRequired && (
            <>
              <Typography
                variant="h6"
                sx={{
                  mt: 3,
                  fontWeight: 600,  // Semi-bold
                  fontSize: '22px',
                }}
                gutterBottom
              >
                Experience Required
              </Typography>
              <Typography
                variant="body1"
                paragraph
                sx={{
                  fontSize: '16px',
                  lineHeight: '1.6',
                }}
              >
                {job.experienceRequired}
              </Typography>
            </>
          )}

          {/* Job Description */}
          <Typography
            variant="h6"
            sx={{
              mt: 3,
              fontWeight: 600,  // Semi-bold
              fontSize: '22px',
            }}
            gutterBottom
          >
            Job Description
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{
              fontSize: '16px',
              lineHeight: '1.6',

            }}
          >
            {job.jobDescription}
          </Typography>

          {/* Required Skills */}
          {job.requiredSkills && (
            <>
              <Typography
                variant="h6"
                sx={{
                  mt: 3,
                  fontWeight: 600,  // Semi-bold
                  fontSize: '22px',
                }}
                gutterBottom
              >
                Required Skills
              </Typography>
              <List
                sx={{
                  display: 'flex',
                  flexDirection: 'row', // Align items in a row
                  flexWrap: 'wrap', // Wrap to next line if there are too many items
                  gap: 2, // Add some spacing between the items
                  padding: 0, // Remove list padding if needed
                }}
              >
                {job.requiredSkills.map((skill, index) => (
                  <ListItem
                    key={index}
                    sx={{
                      width: 'auto', // Make the item size based on content
                      padding: 0, // Remove default padding
                    }}
                  >
                    <Box
                      sx={{
                        backgroundColor: '#f0f0f0', // Light background for the box
                        borderRadius: '8px', // Rounded corners for the box
                        padding: '8px 16px', // Padding inside the box
                        display: 'inline-block', // Keep the box inline
                      }}
                    >
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          fontSize: '16px',
                          lineHeight: '1',
                          fontWeight: '600',
                        }}
                      >
                        {skill}
                      </Typography>
                    </Box>
                  </ListItem>
                ))}
              </List>
            </>
          )}

          {/* Key Responsibilities */}
          {job.keyResponsibilities && (
            <>
              <Typography
                variant="h6"
                sx={{
                  mt: 3,
                  fontWeight: 600,  // Semi-bold
                  fontSize: '22px',
                }}
                gutterBottom
              >
                Key Responsibilities
              </Typography>
              <List
                sx={{
                  paddingLeft: 2, 
                  listStyleType: 'disc', 
                }}
              >
                {job.keyResponsibilities.map((responsibility, index) => (
                  <ListItem key={index} sx={{ paddingLeft: 2 }}> {/* Adds spacing to match bullets */}
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        fontSize: '16px',
                        lineHeight: '1.5',
                        fontWeight: '600',
                        display: 'list-item', // Ensure list items use the default list-item display
                      }}
                    >
                      {responsibility}
                    </Typography>
                  </ListItem>
                ))}
              </List>
            </>
          )}

          {/* Requirements */}
          {job.requirements && (
            <>
              <Typography
                variant="h6"
                sx={{
                  mt: 3,
                  fontWeight: 600,  // Semi-bold
                  fontSize: '22px',
                }}
                gutterBottom
              >
                Requirements
              </Typography>
              <List sx={{
                  paddingLeft: 2, 
                  listStyleType: 'disc', 
                }}>
                {job.requirements.map((req, index) => (
                  <ListItem key={index} sx={{ paddingLeft: 2 }}>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        fontSize: '16px',
                        lineHeight: '1',
                        fontWeight: '600',
                        display: 'list-item'
                      }}
                    >
                      {req}
                    </Typography>
                  </ListItem>
                ))}
              </List>
            </>
          )}


        </CardContent>
      </Card>
    </div>
  );
};

export default JobDetails;
