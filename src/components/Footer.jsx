import React from 'react';
import { Box, Typography, Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';

const footerLinks = [
  { label: 'Privacy Policy', to: '/privacy-policy' },
  { label: 'Terms of Use', to: '/terms-of-use' },
  { label: 'DMCA', to: '/Dmca' },
  { label: 'من نحن', to: '/aboutus' },
  { label: 'تواصل معنا', to: '/ContactUs' },
  { label: 'Cookie Policy', to: '/CookiePolicy' },
];

const Footer = () => (
  <Box
    component="footer"
    sx={{
      background: 'linear-gradient(90deg, #ff4b91, #b13bf4)',
      color: 'white',
      textAlign: 'center',
      px: 2,
      py: 5,
      mt: 8,
      borderTopLeftRadius: '24px',
      borderTopRightRadius: '24px',
      boxShadow: '0 -4px 20px rgba(0,0,0,0.2)',
    }}
  >
    <Typography variant="body1" sx={{ mb: 2, fontWeight: 500 }}>
      &copy; 2025 Panda Hug U — جميع الحقوق محفوظة. منصة للتعارف الجاد والتواصل الثقافي.
    </Typography>

    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 3,
        mt: 3,
      }}
    >
      {footerLinks.map((link, index) => (
        <MuiLink
          key={index}
          component={Link}
          to={link.to}
          underline="hover"
          sx={{
            color: 'white',
            fontSize: '15px',
            transition: 'all 0.3s ease',
            '&:hover': {
              color: '#ffe9f0',
              transform: 'scale(1.05)',
            },
          }}
        >
          {link.label}
        </MuiLink>
      ))}
    </Box>
  </Box>
);

export default Footer;
