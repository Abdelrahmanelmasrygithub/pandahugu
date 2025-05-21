// ✅ ContactUs.jsx - مكون صفحة تواصل معنا
import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Alert } from '@mui/material';

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // مبدئيًا: طباعة البيانات في الكونسول. لاحقًا يمكن ربطه بخدمة بريدية أو قاعدة بيانات.
    console.log('Form Data Submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <Box sx={{ maxWidth: '700px', mx: 'auto', p: 3 }}>
      <Typography variant="h4" gutterBottom>تواصل معنا</Typography>
      <Typography paragraph>
        مرحبًا بكم في موقع <strong>Panda Hug U</strong>! نحن نقدر تواصلكم معنا ونسعد بملاحظاتكم واقتراحاتكم واستفساراتكم.
      </Typography>
      <Typography paragraph>
        نحن نعلم أن الزواج هو أحد أهم الأحداث في حياة أي شخص، ولذلك فإننا نسعى لتقديم خدمات زواج متنوعة وعالية الجودة تناسب مختلف الرغبات والخلفيات الثقافية.
      </Typography>
      <Typography paragraph>
        لا تترددوا في مراسلتنا. فريقنا المتعدد اللغات جاهز لمساعدتكم بكل احترافية وود.
      </Typography>

      {submitted && <Alert severity="success" sx={{ mb: 2 }}>تم إرسال رسالتك بنجاح! سنقوم بالرد عليك قريبًا.</Alert>}

      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="اسمك"
          name="name"
          value={formData.name}
          onChange={handleChange}
          sx={{ mb: 2 }}
          required
        />
        <TextField
          fullWidth
          type="email"
          label="بريدك الإلكتروني"
          name="email"
          value={formData.email}
          onChange={handleChange}
          sx={{ mb: 2 }}
          required
        />
        <TextField
          fullWidth
          label="الموضوع"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          sx={{ mb: 2 }}
          required
        />
        <TextField
          fullWidth
          label="رسالتك (اختياري)"
          name="message"
          value={formData.message}
          onChange={handleChange}
          multiline
          rows={4}
          sx={{ mb: 3 }}
        />
        <Button variant="contained" color="primary" type="submit">إرسال</Button>
      </form>
    </Box>
  );
};

export default ContactUs;
