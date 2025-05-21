// ✅ CookiePolicy.jsx - Cookie Policy Page Component
import React from 'react';
import { Box, Typography } from '@mui/material';

const CookiePolicy = () => {
  return (
    <Box sx={{ maxWidth: '800px', mx: 'auto', p: 3 }}>
      <Typography variant="h4" gutterBottom>Cookie Policy</Typography>
      <Typography paragraph>
        Last Updated: May 18, 2025
      </Typography>
      <Typography paragraph>
        At <strong>Panda Hug U</strong>, we are committed to transparency about how we collect and use data related to you. This Cookie Policy explains how and why cookies and similar technologies may be stored on and accessed from your device when you use or visit our website.
      </Typography>

      <Typography variant="h6" gutterBottom>What are cookies?</Typography>
      <Typography paragraph>
        Cookies are small text files that are stored in your web browser that allow us or a third party to recognize you. Cookies can be used to collect, store, and share bits of information about your activities across websites, including on Panda Hug U.
      </Typography>

      <Typography variant="h6" gutterBottom>How we use cookies</Typography>
      <Typography paragraph>
        We use cookies to:
        <ul>
          <li>Remember your preferences and settings</li>
          <li>Understand how you use our website</li>
          <li>Improve user experience and site functionality</li>
          <li>Provide personalized content and ads</li>
          <li>Measure and analyze performance</li>
        </ul>
      </Typography>

      <Typography variant="h6" gutterBottom>Types of cookies we use</Typography>
      <Typography paragraph>
        <strong>Essential Cookies:</strong> Necessary for the website to function properly.
      </Typography>
      <Typography paragraph>
        <strong>Analytics Cookies:</strong> Help us understand how visitors interact with our site.
      </Typography>
      <Typography paragraph>
        <strong>Advertising Cookies:</strong> Tailor advertisements to your interests.
      </Typography>
      <Typography paragraph>
        <strong>Social Media Cookies:</strong> Enable content sharing through social networks.
      </Typography>

      <Typography variant="h6" gutterBottom>Managing cookies</Typography>
      <Typography paragraph>
        Most browsers allow you to control cookies through their settings. You can delete cookies, block them, or receive alerts before they are stored.
        Please note that disabling cookies may impact your experience on our website.
      </Typography>

      <Typography variant="h6" gutterBottom>Contact Us</Typography>
      <Typography paragraph>
        If you have any questions about this Cookie Policy, you can contact us through our <a href="/ContactUs">Contact Page</a>.
      </Typography>
    </Box>
  );
};

export default CookiePolicy;
