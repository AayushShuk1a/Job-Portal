import React from 'react';
import { Card, CardContent, Typography, Box, Button,Divider } from '@mui/material';
import { WhatsApp, Twitter, LinkedIn, Instagram } from '@mui/icons-material';

const SocialMediaCard = () => {
  const socialLinks = {
    facebook: 'https://facebook.com/jobly',
    twitter: 'https://twitter.com/jobly',
    linkedin: 'https://linkedin.com/company/jobly',
    instagram: 'https://instagram.com/jobly'
  };

  return (
    <Card elevation={3} sx={{ width: '80%', margin: 'auto', mt: 2, p: 2}}>
      <CardContent>
        <Typography variant="h6" sx={{ mb: 2, textAlign: 'center' }}>
          Social Card
        </Typography>
        <Divider orientation="horizontal" flexItem sx={{ mx: 1 }} />
        <Box 
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: 2,
            width: '100%',
          }}
        >
          <Button
            variant="outlined"
            startIcon={<Twitter sx={{ color: '#1DA1F2' }} />}
            fullWidth
            sx={{ borderColor: '#1DA1F2', color: '#1DA1F2' }}
          >
            Twitter
          </Button>
          <Button
            variant="outlined"
            startIcon={<LinkedIn sx={{ color: '#0077b5' }} />}
            fullWidth
            sx={{ borderColor: '#0077b5', color: '#0077b5' }}
          >
            LinkedIn
          </Button>
          <Button
            variant="outlined"
            startIcon={<WhatsApp sx={{ color: '#25D366' }} />}
            fullWidth
            sx={{ borderColor: '#25D366', color: '#25D366' }}
          >
            WhatsApp
          </Button>
          <Button
            variant="outlined"
            startIcon={<Instagram sx={{ color: '#E4405F' }} />}
            fullWidth
            sx={{ borderColor: '#E4405F', color: '#E4405F' }}
          >
           Instagram
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default SocialMediaCard;
