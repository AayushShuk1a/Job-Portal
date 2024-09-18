import React from 'react';
import { Card, CardContent, Typography, Box, IconButton } from '@mui/material';
import { WhatsApp, Twitter, LinkedIn, Instagram } from '@mui/icons-material';

const SocialMediaCard = () => {
  const socialLinks = {
    facebook: 'https://facebook.com/jobly',
    twitter: 'https://twitter.com/jobly',
    linkedin: 'https://linkedin.com/company/jobly',
    instagram: 'https://instagram.com/jobly'
  };

  return (
    <Card sx={{ margin: 2, padding: 2 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Follow Us
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
          <IconButton
            component="a"
            href={socialLinks.Whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Whatsapp"
          >
            <WhatsApp sx={{ color: '#25D366' }} />
          </IconButton>
          <IconButton
            component="a"
            href={socialLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <Twitter sx={{ color: '#1DA1F2' }} />
          </IconButton>
          <IconButton
            component="a"
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedIn sx={{ color: '#0A66C2' }} />
          </IconButton>
          <IconButton
            component="a"
            href={socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Instagram sx={{ color: '#C13584' }} />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
};

export default SocialMediaCard;
