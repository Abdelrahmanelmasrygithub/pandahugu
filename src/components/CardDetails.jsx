import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import cards from '../data/cardsData';
import CommentSection from '../components/CommentSection';
import {
  Box,
  Typography,
  Button,
  Container,
  Divider,
  Chip,
  useMediaQuery,
  useTheme
} from '@mui/material';

const CardDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const card = cards.find((c) => c.id === parseInt(id));

  if (!card) {
    return (
      <Container maxWidth="md" sx={{ mt: 6 }}>
        <Typography sx={{ textAlign: 'center' }}>
          ❌ الشخصية غير موجودة
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ my: 6 }}>
      {/* زر الرجوع */}
      <Button
        onClick={() => navigate('/')}
        variant="contained"
        startIcon={<span style={{ fontSize: '1.2rem' }}>🏠</span>}
        sx={{
          mb: 4,
          background: 'linear-gradient(to left, #ff4b91, #b13bf4)',
          color: '#fff',
          borderRadius: '30px',
          px: 3,
          py: 1,
          fontWeight: 'bold',
          boxShadow: 3,
          '&:hover': {
            opacity: 0.9,
            background: 'linear-gradient(to left, #ff4b91, #b13bf4)',
          },
        }}
      >
        العودة إلى الصفحة الرئيسية
      </Button>

      <Typography
        variant={isMobile ? 'h5' : 'h4'}
        sx={{ mb: 2, textAlign: 'center', color: 'red' }}
      >
        💖 {card.name} تعيش في {card.city} – تبحث عن شريك للحياة والاستقرار
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
        <Box
          component="img"
          src={card.image}
          alt={card.name}
          sx={{
            width: { xs: 160, sm: 180, md: 220 },
            height: { xs: 160, sm: 180, md: 220 },
            borderRadius: '50%',
            objectFit: 'cover',
            border: '5px solid #b13bf4',
            boxShadow: 4,
          }}
        />
      </Box>

      {card.badge && (
        <Box sx={{ textAlign: 'center', mb: 2 }}>
          <Chip label={card.badge} color="secondary" />
        </Box>
      )}

      <Divider sx={{ mb: 3 }} />

      <Typography variant="h6" sx={{ mb: 1 }}>
        🔹 العمر: {card.age}
      </Typography>
      <Typography variant="h6" sx={{ mb: 1 }}>
        🔹 البلد: {card.city}
      </Typography>
      <Typography variant="h6" sx={{ mb: 1 }}>
        🔹 الحالة الاجتماعية: {card.maritalStatus}
      </Typography>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h5" sx={{ color: '#6a1b9a', mb: 1 }}>
        🔸 من هي {card.name}؟
      </Typography>
      <Typography sx={{ mb: 2, lineHeight: 2 }}>
        {card.description}
      </Typography>

      <Typography variant="h5" sx={{ color: '#6a1b9a', mb: 1 }}>
        🔸 ماذا تبحث عنه؟
      </Typography>
      <Typography sx={{ mb: 2, lineHeight: 2 }}>
        {card.name} تبحث عن شريك جاد ومستعد للاستقرار. تفضل من لديه نية صادقة ويقدّر الحياة العائلية.
      </Typography>

      <Typography variant="h5" sx={{ color: '#6a1b9a', mb: 1 }}>
        🔸 لماذا تختار {card.name}؟
      </Typography>
      <ul style={{ lineHeight: 2, marginBottom: '2rem' }}>
        <li>✔ مستقلة ومتحمسة للحياة.</li>
        <li>✔ تحب التجارب الجديدة وتسعى دائمًا لتطوير ذاتها.</li>
        <li>✔ جادة في البحث عن شريك حقيقي للاستقرار.</li>
      </ul>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h6" sx={{ mb: 1 }}>
        🎓 المؤهل الدراسي: {card.education}
      </Typography>
      <Typography variant="h6" sx={{ mb: 1 }}>
        📏 الطول: {card.height}
      </Typography>
      <Typography variant="h6" sx={{ mb: 1 }}>
        🧠 الهوايات: {card.hobbies}
      </Typography>

      <Divider sx={{ my: 3 }} />

      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Button variant="contained" color="primary" size="large">
          🔗 اضغط هنا للتواصل مع {card.name}
        </Button>
      </Box>

      {/* قسم التعليقات */}
      <Divider sx={{ my: 5 }} />
      <CommentSection />
    </Container>
  );
};

export default CardDetails;
