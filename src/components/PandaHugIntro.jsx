import React from 'react';
import { Box, Typography, Paper, Stack, Divider } from '@mui/material';

const PandaHugIntro = () => {
  return (
    <Box sx={{ my: 4 }} dir="rtl">
      <Paper elevation={4} sx={{ p: 4, borderRadius: 3 }}>
        <Stack spacing={3}>

          <Typography variant="h5" color="primary" fontWeight="bold" align="center">
            🐼 من هي Panda Hug U؟
          </Typography>
          <Typography variant="body1">
            مرحبًا بك في <strong>Panda Hug U</strong>، المنصة الأولى للرجال العرب الباحثين عن الزواج من نساء أجنبيات جادات.
            هنا نؤمن أن الزواج هو رحلة مقدسة تبدأ بالتفاهم وتنتهي بالسعادة الحقيقية. نحن نوفر لك أفضل الفرص للتواصل مع نساء من أوروبا، أمريكا، آسيا وأمريكا الجنوبية يبحثن عن شريك عربي حقيقي.
          </Typography>

          <Divider />

          <Typography variant="h6" fontWeight="bold" color="secondary">
            💌 هل تبحث عن زوجة أجنبية جادة؟
          </Typography>
          <Typography variant="body1">
            🔹 في <strong>Panda Hug U</strong>، ستجد نساء أجنبيات يبحثن عن الاستقرار والحب مع رجل عربي محترم.<br />
            🔹 نحن نعرض طلبات زواج حقيقية من نساء مثقفات، جميلات وجادات من مختلف دول العالم.<br />
            🔹 تواصل مباشرة، وابدأ أولى خطواتك نحو زواج سعيد ومثمر.
          </Typography>

          <Divider />

          <Typography variant="h6" fontWeight="bold" color="secondary">
            📋 بعض عروض الزواج الحديثة
          </Typography>
          <ul>
            <li>🟢 فتاة أوكرانية، 27 عامًا، تبحث عن رجل عربي حنون وصادق لبناء حياة مستقرة.</li>
            <li>🟢 شابة كولومبية، 30 عامًا، مهتمة بالزواج من رجل مسلم يحترم العائلة والقيم.</li>
            <li>🟢 امرأة فلبينية، 25 عامًا، تبحث عن زواج حقيقي ومستعدة للعيش في دولة عربية.</li>
          </ul>

          <Divider />

          <Typography variant="h6" fontWeight="bold" color="secondary">
            🔥 لماذا تختار Panda Hug U؟
          </Typography>
          <ul>
            <li>✅ طلبات زواج أجنبية حقيقية ومحدثة باستمرار.</li>
            <li>✅ فرص واقعية للتعارف والزواج من خارج الوطن العربي.</li>
            <li>✅ دعم وتوجيه من مستشارين مختصين في العلاقات.</li>
            <li>✅ احترام كامل للخصوصية وسرية البيانات.</li>
          </ul>

          <Typography variant="body1">
            💡 <strong>نصيحة:</strong> النساء الأجنبيات يُعجبن بصفات الرجل العربي من شهامة وكرم وأصالة. كن على طبيعتك وابدأ رحلة الزواج بثقة!
          </Typography>

          <Typography align="center" sx={{ mt: 3 }} fontWeight="medium" color="primary.dark">
            🚀 انضم الآن إلى مجتمع Panda Hug U وابدأ حياتك الزوجية مع شريكة أجنبية تحلم بك 💖
          </Typography>
        </Stack>
      </Paper>
    </Box>
  );
};

export default PandaHugIntro;
