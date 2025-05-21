
// ✅ HeroSection.jsx
import React from 'react';
import { Box, Typography } from '@mui/material';

const HeroSection = () => (
  <Box
    sx={{
      position: 'relative',
      height: { xs: '250px', md: '400px' },
      backgroundImage: 'url("/images/home.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      mb: 6,
    }}
  >
    <Box
      sx={{
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: '16px 32px',
        borderRadius: '12px',
      }}
    >
      <Typography
        variant="h4"
        sx={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}
      >
        اول موقع يساهم في زواج العرب و الافارقة من اجانب
      </Typography>
    </Box>
  </Box>
);

export default HeroSection;