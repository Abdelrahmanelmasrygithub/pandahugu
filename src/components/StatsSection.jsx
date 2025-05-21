// ✅ StatsSection.jsx
import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import CountUp from 'react-countup';

const StatsSection = () => (
  <Box sx={{ backgroundColor: '#f9f9f9', py: 6, px: 2, textAlign: 'center', mb: 6 }}>
    <Container>
      <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 4, color: '#b13bf4' }}>
        احصائيات موقع Panda Hug U
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <Box>
            <Typography variant="h3" sx={{ color: '#ff4b91', fontWeight: 'bold' }}>
              1823+
            </Typography>
            <Typography variant="body1">زيجة تمت عبر الموقع</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box>
            <Typography variant="h3" sx={{ color: '#b13bf4', fontWeight: 'bold' }}>
              <CountUp end={19784} duration={5} separator="," />+
            </Typography>
            <Typography variant="body1">عضو نشط يبحث عن شريك حياته</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box>
            <Typography variant="h3" sx={{ color: '#ff4b91', fontWeight: 'bold' }}>
              89%
            </Typography>
            <Typography variant="body1">نسبة الرضا من مستخدمينا</Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  </Box>
);

export default StatsSection;
