// ✅ AboutUs.jsx - مكون صفحة من نحن
import React from 'react';
import { Box, Typography } from '@mui/material';

const AboutUs = () => (
  <Box sx={{ maxWidth: '900px', mx: 'auto', p: 3 }}>
    <Typography variant="h4" gutterBottom>
      من نحن
    </Typography>

    <Typography paragraph>
      نحن فريق متخصص في موقع <strong>Panda Hug U</strong>، وهو موقع يركز على عروض الزواج والتعارف الجاد، ويهدف إلى خدمة الباحثين عن شريك حياة من جميع أنحاء العالم، بما في ذلك الدول العربية، أوروبا، وكندا.
    </Typography>

    <Typography paragraph>
      ندرك أن البحث عن شريك الحياة يمكن أن يكون مرهقًا، لذا نسعى لتقديم تجربة سهلة وآمنة تشمل ملفات شخصية مفصلة، نظام تواصل موثوق، وحماية كاملة لخصوصية الأعضاء.
    </Typography>

    <Typography paragraph>
      يضم فريقنا نخبة من المطورين والمصممين ذوي الخبرة في تقنيات الويب، كما نعمل مع مختصين في مجالات العلاقات والزواج لتقديم تجربة استخدام متميزة ومتكاملة.
    </Typography>

    <Typography paragraph>
      رؤيتنا هي بناء مجتمع إلكتروني يساعد كل من يبحث عن نصفه الآخر بطريقة محترمة، آمنة، وإنسانية. نسعد دائمًا بخدمتكم ونأمل أن نكون سببًا في بداية قصة حب حقيقية.
    </Typography>

    <Typography variant="h6" sx={{ mt: 4 }}>
      مواضيع تهم الباحثين عن الزواج:
    </Typography>

    <ul style={{ lineHeight: 2 }}>
      <li>الزواج من أوروبيات: فرص التعارف والزواج مع نساء من أوروبا</li>
      <li>تجارب ناجحة لزواج العرب من أجانب عبر موقع Panda Hug U</li>
      <li>زواج العرب في كندا: خطوات ونصائح للراغبين في الارتباط</li>
      <li>التعارف بين الثقافات: فهم وتقبل الشريك من خلفية مختلفة</li>
      <li>الزواج المختلط: تحديات وفرص لبناء علاقة ناجحة</li>
    </ul>

    <Typography paragraph sx={{ mt: 3 }}>
      شكرًا لزيارتكم لموقع <strong>Panda Hug U</strong>. نحن نقدر ثقتكم ونتطلع إلى مساعدتكم في العثور على شريك حياتكم.
    </Typography>
  </Box>
);

export default AboutUs;
