import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const PrivacyPolicy = () => {
  return (
    <Container sx={{ my: 6 }}>
      <Typography variant="h4" gutterBottom fontWeight="bold">
        Privacy Policy
      </Typography>

      <Typography paragraph>
        Welcome to <strong>https://pandahugu.com</strong>. We respect your privacy and are committed to protecting the personal information you provide when using our website.
      </Typography>

      <Typography variant="h5" gutterBottom fontWeight="bold">
        Personally Identifiable Information
      </Typography>
      <Typography paragraph>
        We may collect personally identifiable information such as your name, email address, phone number, and address when you register or contact us.
      </Typography>

      <Typography variant="h5" gutterBottom fontWeight="bold">
        How We Use the Information
      </Typography>
      <Typography paragraph>
        We use the collected information to personalize your experience, improve our services, and send updates or offers related to our website.
      </Typography>

      <Typography variant="h5" gutterBottom fontWeight="bold">
        Cookies and Google AdSense
      </Typography>
      <Typography paragraph>
        We use cookies to enhance user experience. This site also uses Google AdSense to display ads.
      </Typography>
      <Typography paragraph>
        <strong>Google and its partners use cookies to serve ads based on a user’s prior visits to this and other websites.</strong>
      </Typography>
      <Typography paragraph>
        You can opt out of personalized advertising by visiting:
        <br />
        <a href="https://www.google.com/settings/ads" target="_blank" rel="noreferrer">
          https://www.google.com/settings/ads
        </a>
      </Typography>

      <Typography variant="h5" gutterBottom fontWeight="bold">
        Data Security
      </Typography>
      <Typography paragraph>
        We take appropriate security measures to protect your information from unauthorized access, alteration, disclosure, or destruction.
      </Typography>

      <Typography variant="h5" gutterBottom fontWeight="bold">
        Children’s Privacy
      </Typography>
      <Typography paragraph>
        Our services are not directed to children under 18. We do not knowingly collect personal information from children under 18.
        If you are a parent or guardian and believe your child has provided us with personal information, please contact us, and we will delete it immediately.
      </Typography>

      <Typography variant="h5" gutterBottom fontWeight="bold">
        External Links
      </Typography>
      <Typography paragraph>
        Our website may contain links to other websites. We are not responsible for the privacy practices of those websites.
      </Typography>

      <Typography variant="h5" gutterBottom fontWeight="bold">
        Changes to This Privacy Policy
      </Typography>
      <Typography paragraph>
        We reserve the right to update or change our privacy policy at any time. Updates will be posted on this page.
      </Typography>

      <Typography variant="h5" gutterBottom fontWeight="bold">
        Contact Us
      </Typography>
      <Typography paragraph>
        If you have any questions about this privacy policy, please contact us at:
        <br />
        <a href="mailto:pandahugu.com@admin">pandahugu.com@admin</a>
      </Typography>
    </Container>
  );
};

export default PrivacyPolicy;
