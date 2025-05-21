// components/CardSection.jsx
import React from 'react';
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Button,
  Chip,
} from '@mui/material';
import { Link } from 'react-router-dom';

const CardSection = ({ title, sectionCards = [] }) => {
  if (!Array.isArray(sectionCards) || sectionCards.length === 0) {
    return null;
  }

  return (
    <Box sx={{ my: 6 }}>
      <Typography
        variant="h5"
        align="center"
        gutterBottom
        sx={{ fontWeight: 'bold', mb: 4 }}
      >
        {title}
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {sectionCards.map((card) => (
          <Grid item xs={12} sm={6} md={4} lg={4} key={card.id}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 6,
                },
              }}
            >
              <CardMedia
                component="div"
                sx={{
                  position: 'relative',
                  paddingTop: '100%',
                  overflow: 'hidden',
                  '&:hover img': {
                    transform: 'scale(1.05)',
                  },
                }}
              >
                <Box
                  component="img"
                  src={card.image}
                  alt={card.name}
                  loading="lazy"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease',
                  }}
                />
              </CardMedia>

              <CardContent sx={{ flexGrow: 1 }}>
                {card.badge && (
                  <Chip label={card.badge} color="primary" sx={{ mb: 1 }} />
                )}
                <Typography variant="body1" gutterBottom>
                  <strong>الاسم:</strong> {card.name}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  <strong>السن:</strong> {card.age}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  <strong>العمل:</strong>{' '}
                  {card.job.length > 10
                    ? `${card.job.slice(0, 10)}...`
                    : card.job}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <strong>الوصف:</strong>{' '}
                  {card.description.length > 10
                    ? `${card.description.slice(0, 10)}...`
                    : card.description}
                </Typography>
              </CardContent>

              <Box sx={{ p: 2 }}>
                <Button
                  fullWidth
                  component={Link}
                  to={`/profile/${card.id}`}
                  variant="contained"
                  sx={{
                    background: 'linear-gradient(to left, #ff4b91, #b13bf4)',
                    color: '#fff',
                    '&:hover': {
                      opacity: 0.9,
                      background: 'linear-gradient(to left, #ff4b91, #b13bf4)',
                    },
                  }}
                >
                  اضغط هنا للتواصل معي
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CardSection;
