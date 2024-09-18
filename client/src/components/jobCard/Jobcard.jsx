import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Paper } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { useTheme } from '@mui/material/styles';

const JobCard = ({ job, onClick }) => {
  const theme = useTheme();

  return (
    <Card elevation={3} sx={{
      padding: '10px', display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, margin: 2, cursor: 'pointer', transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      '&:hover': {
        transform: 'scale(1.03)',  // Slight scaling effect on hover
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',  // Shadow effect on hover
      }
    }} onClick={onClick}>
      {/* Job Image */}
      <CardMedia
        component="img"
        sx={{ width: { xs: '100%', sm: '30%' }, height: { xs: '150px', sm: 'auto' }, objectFit: 'cover' }}
        image={job.image}
        alt="Company Logo"
      />

      {/* Job Info */}
      <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', textAlign: 'left', alignItems: 'center' }}>
        <CardContent sx={{ flex: '1 0 auto', paddingBottom: '15px !important' }}>
          {/* Job Title (Position) */}
          <Typography component="div" variant="h6" sx={{ marginBottom: 0.5 }}>
            {job.position} || {job.companyName}
          </Typography>

          {/* Location */}
          <Typography variant="subtitle1" color="text.secondary" component="div" sx={{ display: 'flex', alignItems: 'center', marginBottom: 0.5, fontSize: '0.95rem' }}>
            <LocationOnIcon sx={{ marginRight: 1, fontSize: '1rem' }} />
            Location: {job.location}
          </Typography>

          {/* Date Posted */}
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
            sx={{ display: 'flex', alignItems: 'center', marginBottom: 1, fontSize: '0.95rem' }}
          >
            <CalendarTodayIcon sx={{ marginRight: 1, fontSize: '1rem' }} />
            Date Posted: {job.datePosted}
          </Typography>

          {/* Job Type, Salary, Experience with Border Styling */}
          <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
            <Paper elevation={0} sx={{ padding: '3px', display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '120px', border: '1px solid #00ABE4' ,transition: 'transform 0.2s ease, box-shadow 0.2s ease', '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                border: '1px solid #00ABE4'
              }}}>
              <Typography fontWeight="bold" sx={{ fontSize: '0.80rem' }}>Job Type</Typography>
              <Typography variant="body2" sx={{ color: '#73666d', fontSize: '0.8rem' }}>
                {job.jobType}
              </Typography>
            </Paper>

            <Paper elevation={0} sx={{ padding: '3px', display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '120px', border: '1px solid #00ABE4' ,transition: 'transform 0.2s ease, box-shadow 0.2s ease', '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                border: '1px solid #00ABE4'
              }}}>
              <Typography fontWeight="bold" sx={{ fontSize: '0.8rem' }}>Experience</Typography>
              <Typography variant="body2" sx={{ color: '#73666d', fontSize: '0.8rem' }}>
                {job.experienceRequired}
              </Typography>
            </Paper>

            <Paper elevation={0} sx={{
                padding: '3px', display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '120px', border: '1px solid #00ABE4', transition: 'transform 0.2s ease, box-shadow 0.2s ease', '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                  border: '1px solid #00ABE4'
                }
            }}>
              <Typography fontWeight="bold" sx={{ fontSize: '0.8rem' }}>Expected Salary</Typography>
              <Typography variant="body2" sx={{ color: '#73666d', fontSize: '0.8rem' }}>
                {job.expectedSalary}
              </Typography>
            </Paper>
          </Box>


        </CardContent>
      </Box>
    </Card>
  );
};

export default JobCard;
