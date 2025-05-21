import React from 'react';
import { CssBaseline, Box, Container, ThemeProvider, createTheme } from '@mui/material';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import CardSection from './components/CardSection';
import cards from './data/cardsData';
import MarriageOffers from './components/MarriageOffers';
import PandaHugIntro from './components/PandaHugIntro';

const rtlTheme = createTheme({ direction: 'rtl' });

const LandingPage = () => {
  const validCards = Array.isArray(cards) ? cards : [];

  const section1 = validCards.slice(0, 6);
  const section2 = validCards.slice(6, 12);
  const section3 = validCards.slice(12, 18);
  const section4 = validCards.slice(18, 24);

  return (
    <ThemeProvider theme={rtlTheme}>
      <CssBaseline />
      <Box dir="rtl">
        <HeroSection />
        <StatsSection />

        <Container>
          <CardSection title="قسم روسيا" sectionCards={section1} />
          <CardSection title="قسم الخليجيات" sectionCards={section2} />
          <CardSection title="قسم الاوروبيات" sectionCards={section3} />
          <CardSection title="قسم داغستان" sectionCards={section4} />
        </Container>

        <MarriageOffers />
        <PandaHugIntro />
      </Box>
    </ThemeProvider>
  );
};

export default LandingPage;
