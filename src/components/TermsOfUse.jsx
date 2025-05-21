import React from 'react';
import { Box, Typography } from '@mui/material';

const TermsOfUse = () => {
  return (
    <Box sx={{ p: 4, maxWidth: '1000px', mx: 'auto' }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold' }}>
        Terms of Use
      </Typography>

      <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
        These Terms govern your access to, and usage of all content, products, and services available at <strong>https://pandahugu.com</strong> (the “Service”) operated by Panda Hug U (“us”, “we”, or “our”). By accessing our services, you agree to be bound by these Terms. If you do not agree, you may not use our Services.
      </Typography>

      <Typography variant="h6" sx={{ mt: 3 }}>Intellectual Property</Typography>
      <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.8 }}>
        All rights, titles, and interest in and to the intellectual property remain with us or our licensors.
      </Typography>

      <Typography variant="h6" sx={{ mt: 3 }}>Third-Party Services</Typography>
      <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.8 }}>
        Usage of third-party services is at your own risk. We are not responsible for any third-party content, products, or services.
      </Typography>

      <Typography variant="h6" sx={{ mt: 3 }}>Accounts</Typography>
      <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.8 }}>
        You are responsible for maintaining the security of your account and ensuring all information is accurate. Notify us of unauthorized use immediately.
      </Typography>

      <Typography variant="h6" sx={{ mt: 3 }}>Links to Other Websites</Typography>
      <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.8 }}>
        We are not responsible for third-party websites or their content. Review their terms and privacy policies.
      </Typography>

      <Typography variant="h6" sx={{ mt: 3 }}>Termination</Typography>
      <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.8 }}>
        We reserve the right to terminate or suspend access at any time. Provisions that should survive termination will continue in effect.
      </Typography>

      <Typography variant="h6" sx={{ mt: 3 }}>Disclaimer</Typography>
      <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.8 }}>
        Services are provided "AS IS". We disclaim all warranties, express or implied, including fitness for a particular purpose.
      </Typography>

      <Typography variant="h6" sx={{ mt: 3 }}>Jurisdiction and Applicable Law</Typography>
      <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.8 }}>
        These Terms are governed by the laws of New York. Any disputes shall be handled in the state and federal courts in New York.
      </Typography>

      <Typography variant="h6" sx={{ mt: 3 }}>Changes</Typography>
      <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.8 }}>
        We reserve the right to modify these Terms at any time. We will notify you of material changes with reasonable notice.
      </Typography>

      <Typography variant="h6" sx={{ mt: 3 }}>Contact Us</Typography>
      <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.8 }}>
        If you have any questions about these Terms of Use, please contact us at <strong>pandahugu.com@admin</strong>.
      </Typography>
    </Box>
  );
};

export default TermsOfUse;
