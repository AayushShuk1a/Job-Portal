import React from 'react';
import { Button, Box, Card, CardContent, Typography,Divider } from '@mui/material';
import { Twitter, LinkedIn, WhatsApp, Instagram } from '@mui/icons-material';

const ShareJobs = () => {
  return (
    <Card sx={{ width: '90%', margin: 'auto', mt: 4, p: 2,my:'20px',mx:"30px"}}>
      <CardContent>
        <Typography variant="h6" sx={{ mb: 2, textAlign: 'center' }}>
          Share This Job
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
            Share on Twitter
          </Button>
          <Button
            variant="outlined"
            startIcon={<LinkedIn sx={{ color: '#0077b5' }} />}
            fullWidth
            sx={{ borderColor: '#0077b5', color: '#0077b5' }}
          >
            Share on LinkedIn
          </Button>
          <Button
            variant="outlined"
            startIcon={<WhatsApp sx={{ color: '#25D366' }} />}
            fullWidth
            sx={{ borderColor: '#25D366', color: '#25D366' }}
          >
            Share on WhatsApp
          </Button>
          <Button
            variant="outlined"
            startIcon={<Instagram sx={{ color: '#E4405F' }} />}
            fullWidth
            sx={{ borderColor: '#E4405F', color: '#E4405F' }}
          >
            Share on Instagram
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

export default ShareJobs;
