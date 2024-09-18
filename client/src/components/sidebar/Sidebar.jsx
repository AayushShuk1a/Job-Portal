import React, { useState } from 'react';
import { Box, Slider, Typography, Card, CardContent, Button, Select, MenuItem, Radio, RadioGroup, FormControlLabel, FormControl } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';  // Import the filter icon

const salaryRange = [0, 100000]; // Salary range in dollars
const experiences = ['0-1 years', '1-3 years', '3-5 years', '5+ years'];

const Sidebar = ({ onFilterChange }) => {
  const [jobType, setJobType] = useState('');  // To store either 'Internship' or 'Full-time'
  const [selectedExperience, setSelectedExperience] = useState('');
  const [salary, setSalary] = useState(salaryRange);

  // Handle salary slider change
  const handleSalaryChange = (event, newValue) => {
    setSalary(newValue);
    onFilterChange({ jobType, experience: selectedExperience, salary: newValue });
  };

  // Handle job type radio button change
  const handleJobTypeChange = (event) => {
    const selectedJobType = event.target.value;
    setJobType(selectedJobType);
    onFilterChange({ jobType: selectedJobType, experience: selectedExperience, salary });
  };

  // Handle experience dropdown change
  const handleExperienceChange = (event) => {
    setSelectedExperience(event.target.value);
    onFilterChange({ jobType, experience: event.target.value, salary });
  };

  // Handle clearing filters
  const handleClearFilters = () => {
    setJobType('');
    setSelectedExperience('');
    setSalary(salaryRange);
    onFilterChange({ jobType: '', experience: '', salary: salaryRange });
  };

  return (
    <Card sx={{ margin: 2,height:'100%' }}>
      <CardContent>
        {/* Heading with Filter Icon */}
        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 3 }}>
          <FilterListIcon sx={{ marginRight: 1 }} /> {/* Filter icon on the left */}
          <Typography variant="h5">
            Filter
          </Typography>
        </Box>

        {/* Salary Filter */}
        <Box sx={{ marginBottom: 3 }}>
          <Typography variant="subtitle1">Salary Range</Typography>
          <Slider
            value={salary}
            onChange={handleSalaryChange}
            valueLabelDisplay="auto"
            min={salaryRange[0]}
            max={salaryRange[1]}
            step={1000}
          />
          <Typography>Salary: ${salary[0]} - ${salary[1]}</Typography>
        </Box>

        {/* Job Type Filter */}
        <Box sx={{ marginBottom: 3 }}>
          <Typography variant="subtitle1">Job Type</Typography>
          <FormControl component="fieldset">
            <RadioGroup
              aria-label="job-type"
              name="job-type"
              value={jobType}
              onChange={handleJobTypeChange}
            >
              <FormControlLabel value="Internship" control={<Radio />} label="Internship" />
              <FormControlLabel value="Full-time" control={<Radio />} label="Full-time" />
            </RadioGroup>
          </FormControl>
        </Box>

        {/* Experience Filter */}
        <Box sx={{ marginBottom: 3 }}>
          <Typography variant="subtitle1">Experience</Typography>
          <Select
            value={selectedExperience}
            onChange={handleExperienceChange}
            displayEmpty
            fullWidth
          >
            <MenuItem value="" disabled>Select Experience</MenuItem>
            {experiences.map((experience) => (
              <MenuItem key={experience} value={experience}>
                {experience}
              </MenuItem>
            ))}
          </Select>
        </Box>

        {/* Clear Filters Button */}
        <Box sx={{ marginTop: 3 }}>
          <Button 
            variant="contained" 
            sx={{ backgroundColor: '#00ABE4', '&:hover': { backgroundColor: '#0097C0' } }} // Custom color
            onClick={handleClearFilters} 
            fullWidth
          >
            Clear Filters
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Sidebar;
