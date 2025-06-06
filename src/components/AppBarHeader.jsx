// ✅ AppBarHeader.jsx
import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const AppBarHeader = () => (
  <AppBar
    position="static"
    sx={{
      background: 'linear-gradient(to left, #ff4b91, #b13bf4)',
      color: 'white',
      py: 1.5,
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    }}
  >
    <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, sm: 4 } }}>
      
      {/* ✅ Logo + Title wrapped in Link */}
      <Link
        to="/"
        style={{
          textDecoration: 'none',
          color: 'inherit',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <Box
            component="img"
            src="/images/header.jpg"
            alt="logo"
            sx={{
              height: 40,
              borderRadius: '50%',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.08)',
              },
            }}
          />
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              letterSpacing: 1,
              fontSize: { xs: '18px', sm: '20px' },
            }}
          >
            Panda Hug U
          </Typography>
        </Box>
      </Link>

      {/* Catchphrase */}
      <Typography
        sx={{
          fontWeight: 600,
          fontSize: { xs: '13px', sm: '16px' },
          textAlign: 'center',
          fontFamily: 'inherit',
          opacity: 0.95,
        }}
      >
          تصفح الآن و جد شريكة حياتك 1
      </Typography>
    </Toolbar>
  </AppBar>
);

export default AppBarHeader;
