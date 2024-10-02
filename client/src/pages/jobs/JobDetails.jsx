import React from 'react';
import { useLocation } from 'react-router-dom';
import { Grid, Card, CardContent, Typography, Box, CardMedia, List, ListItem, Button } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PaidIcon from '@mui/icons-material/Paid'; 

const JobDetails = () => {
  const location = useLocation();
  const { job } = location.state || {};

  if (!job) {
    return <Typography>No job details available.</Typography>;
  }

  return (
    <Box sx={{ padding: { xs: 2, sm: 4, md: 6, lg: '5px' }, maxWidth: '1200px', margin: '0 auto' }}>
      <Card elevation={3} sx={{ padding: 2, position: 'sticky' }}>
        {/* Job Image */}
        <CardMedia
          component="img"
          sx={{ height: { xs: 150, md: 200 }, objectFit: 'cover' }}
          image={job.img_url}
          alt={job.company_name}
        />

        <CardContent>
          {/* Job Title */}
          <Typography
            variant="h4"
            sx={{
              fontWeight: 600,
              fontSize: { xs: '22px', md: '28px' },
              marginBottom: '20px',
            }}
          >
            {job.role} - {job.company_name}
          </Typography>

          {/* Apply Button */}
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: '#00ABE4',
              '&:hover': { backgroundColor: '#0097C0' },
              padding: { xs: '6px 20px', md: '7px 30px' },
              fontSize: { xs: '14px', md: '16px' },
              textTransform: 'none',
              fontWeight: 'bold',
              borderRadius: '25px'
            }}
          >
            Apply
          </Button>
        </CardContent>
      </Card>

      <Card elevation={3} sx={{ padding: 1, mt: 0.5 }}>
        <CardContent>
          {/* Job Details (Location, Job Type, etc.) */}
          <Grid container spacing={2} sx={{ marginTop: '10px' }}>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <LocationOnIcon color="action" />
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontSize: '16px', fontWeight: '600' }}
                >
                  {job.location || 'Not specified'}
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <AccessTimeIcon color="action" />
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontSize: '16px', fontWeight: '600' }}
                >
                  {job.employmentType || 'Not specified'}
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <CalendarTodayIcon color="action" />
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontSize: '16px', fontWeight: '600' }}
                >
                  {job.postingDate || 'Not specified'}
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <PaidIcon color="action" />
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontSize: '16px', fontWeight: '600' }}
                >
                  {job.salaryMin || 'Not specified'}-{job.salaryMax || 'Not specified'}
                </Typography>
              </Box>
            </Grid>
          </Grid>

          {/* About the Company */}
          {job.aboutCompany && (
            <>
              <Typography
                variant="h6"
                sx={{
                  mt: 3,
                  fontWeight: 600,
                  fontSize: { xs: '20px', md: '22px' },
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
                {job.aboutCompany}
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
                  fontWeight: 600,
                  fontSize: { xs: '20px', md: '22px' },
                }}
                gutterBottom
              >
                Experience Required
              </Typography>
              <Typography
                variant="body1"
                paragraph
                sx={{ fontSize: '16px', lineHeight: '1.6' }}
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
              fontWeight: 600,
              fontSize: { xs: '20px', md: '22px' },
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
                  fontWeight: 600,
                  fontSize: { xs: '20px', md: '22px' },
                }}
                gutterBottom
              >
                Required Skills
              </Typography>
              <List sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, padding: 0 }}>
                {job.requiredSkills.map((skill, index) => (
                  <ListItem key={index} sx={{ width: 'auto', padding: 0 }}>
                    <Box
                      sx={{
                        backgroundColor: '#f0f0f0',
                        borderRadius: '8px',
                        padding: '8px 16px',
                        display: 'inline-block',
                      }}
                    >
                      <Typography variant="body2" color="text.secondary" sx={{ fontSize: '16px', fontWeight: '600' }}>
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
                  fontWeight: 600,
                  fontSize: { xs: '20px', md: '22px' },
                }}
                gutterBottom
              >
                Key Responsibilities
              </Typography>
              <List sx={{ paddingLeft: 2, listStyleType: 'disc' }}>
                {job.keyResponsibilities.map((responsibility, index) => (
                  <ListItem key={index} sx={{ paddingLeft: 2 }}>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ fontSize: '16px', fontWeight: '600', display: 'list-item' }}
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
                  fontWeight: 600,
                  fontSize: { xs: '20px', md: '22px' },
                }}
                gutterBottom
              >
                Requirements
              </Typography>
              <List sx={{ paddingLeft: 2, listStyleType: 'disc' }}>
                {job.requirements.map((req, index) => (
                  <ListItem key={index} sx={{ paddingLeft: 2 }}>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ fontSize: '16px', fontWeight: '600', display: 'list-item' }}
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
    </Box>
  );
};

export default JobDetails;
