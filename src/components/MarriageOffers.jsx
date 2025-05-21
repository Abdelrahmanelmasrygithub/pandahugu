import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Link,
} from '@mui/material';

const marriageOffers = [
  { country: 'السعودية', link: '/profile/1' },
  { country: 'الإمارات', link: '/profile/2' },
  { country: 'مصر', link: '/profile/3' },
  { country: 'المغرب', link: '/profile/4' },
  { country: 'الجزائر', link: '/profile/5' },
  { country: 'تونس', link: '/profile/6' },
  { country: 'العراق', link: '/profile/7' },
  { country: 'الأردن', link: '/profile/8' },
  { country: 'سوريا', link: '/profile/9' },
  { country: 'لبنان', link: '/profile/10' },
  { country: 'اليمن', link: '/profile/11' },
  { country: 'السودان', link: '/profile/12' },
];


const MarriageOffers = () => {
  return (
    <TableContainer
      component={Paper}
      dir="rtl"
      sx={{
        my: 4,
        boxShadow: 4,
        borderRadius: 3,
        overflow: 'hidden',
      }}
    >
      <Typography
        variant="h5"
        align="center"
        sx={{ my: 3, fontWeight: 'bold', color: 'primary.main' }}
      >
        عروض الزواج عبر العالم العربي
      </Typography>
      <Table sx={{ minWidth: 300 }}>
        <TableHead>
          <TableRow sx={{ backgroundColor: 'primary.light' }}>
            <TableCell sx={{ fontWeight: 'bold', color: 'white' }}>الدولة</TableCell>
            <TableCell sx={{ fontWeight: 'bold', color: 'white' }}>رابط التعارف والزواج</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {marriageOffers.map((offer, index) => (
            <TableRow
              key={index}
              sx={{
                '&:nth-of-type(odd)': { backgroundColor: 'grey.100' },
                '&:hover': { backgroundColor: 'grey.200' },
              }}
            >
              <TableCell>{offer.country}</TableCell>
              <TableCell>
                <Link
                  href={offer.link}
                  target="_blank"
                  rel="noopener"
                  underline="hover"
                  color="primary"
                  sx={{ fontWeight: 500 }}
                >
                  زيارة الرابط
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MarriageOffers;
