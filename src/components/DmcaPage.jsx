// ✅ DmcaPage.jsx - متوافق مع سياسات Google AdSense
import React from 'react';
import { Box, Typography } from '@mui/material';

const DmcaPage = () => (
  <Box sx={{ maxWidth: '900px', mx: 'auto', p: 3 }}>
    <Typography variant="h4" gutterBottom>
      DMCA Policy
    </Typography>

    <Typography paragraph>
      Welcome to Panda Hug U (the “Site”). We respect the intellectual property rights of others and expect the same in return.
      In accordance with the Digital Millennium Copyright Act (DMCA), copyright owners or their agents may submit a takedown
      notice to us via the contact information below.
    </Typography>

    <Typography variant="h6" gutterBottom>
      Notice of Infringement – Claim
    </Typography>
    <Typography component="div" paragraph>
      To file a DMCA notice with us, please provide the following information:
      <ul>
        <li>A physical or electronic signature of the copyright owner or a person authorized to act on their behalf.</li>
        <li>Identification of the copyrighted work claimed to be infringed.</li>
        <li>Identification of the material that is claimed to be infringing, with sufficient detail (such as the URL).</li>
        <li>Your contact information: name, address, phone number, and email address.</li>
        <li>A statement that you have a good faith belief the use is not authorized by the copyright owner, agent, or law.</li>
        <li>
          A statement that the information in the notification is accurate and, under penalty of perjury, you are authorized to act
          on behalf of the owner.
        </li>
      </ul>
    </Typography>

    <Typography paragraph>
      Please send your takedown notice through our <strong>Contact</strong> page or via email at: <strong>admin@pandahugu.com</strong>
    </Typography>

    <Typography variant="h6" gutterBottom>
      Counter Notification – Restoration of Material
    </Typography>
    <Typography component="div" paragraph>
      If you believe that your content was removed by mistake, you may submit a counter notification including:
      <ul>
        <li>Your physical or electronic signature.</li>
        <li>Description and URL of the material that was removed.</li>
        <li>
          A statement under penalty of perjury that the material was removed as a result of mistake or misidentification.
        </li>
        <li>
          Your name, address, and phone number, and that you consent to the jurisdiction of a federal court in your district
          (or in the United States if international).
        </li>
      </ul>
    </Typography>

    <Typography paragraph>
      Send your counter notice through our Contact page or by email at <strong>admin@pandahugu.com</strong>
    </Typography>

    <Typography variant="h6" gutterBottom>
      Repeat Infringer Policy
    </Typography>
    <Typography paragraph>
      Panda Hug U maintains a record of all DMCA notices. Users found repeatedly violating copyrights will have their accounts
      terminated.
    </Typography>

    <Typography variant="h6" gutterBottom>
      Modifications
    </Typography>
    <Typography paragraph>
      We reserve the right to modify this DMCA Policy at any time. Please check back regularly to stay informed.
    </Typography>

    <Typography variant="h6" gutterBottom>
      Contact Us
    </Typography>
    <Typography paragraph>
      For any DMCA-related inquiries, contact us at: <strong>admin@pandahugu.com</strong>
    </Typography>
  </Box>
);

export default DmcaPage;
