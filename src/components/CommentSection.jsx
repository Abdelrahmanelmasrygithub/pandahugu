import React, { useState, useEffect } from 'react';
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
  Box,
  Card,
  CardContent,
  Divider,
} from '@mui/material';

const CommentSection = () => {
  const [comments, setComments] = useState(() => {
    const saved = localStorage.getItem('allComments');
    return saved ? JSON.parse(saved) : [];
  });
  const [form, setForm] = useState({ name: '', email: '', website: '', text: '', remember: false });
  const [submittedCount, setSubmittedCount] = useState(() => {
    return comments.filter(c => c.userSubmitted).length;
  });

  useEffect(() => {
    const savedForm = localStorage.getItem('commentForm');
    if (savedForm) setForm(JSON.parse(savedForm));
  }, []);

  useEffect(() => {
    localStorage.setItem('allComments', JSON.stringify(comments));
  }, [comments]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (submittedCount >= 10) return alert('لا يمكنك إضافة أكثر من 10 تعليقات.');
    const newComment = { ...form, approved: false, id: Date.now(), userSubmitted: true };
    setComments((prev) => [...prev, newComment]);
    setSubmittedCount((prev) => prev + 1);
    if (form.remember) {
      localStorage.setItem('commentForm', JSON.stringify(form));
    }
    setForm({ ...form, text: '' });
  };

  const approveComment = (id) => {
    setComments((prev) => prev.map((c) => (c.id === id ? { ...c, approved: true } : c)));
  };

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', p: 2 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>محادثتك:</Typography>
      {comments.map((comment) => (
        <Card key={comment.id} sx={{ my: 2, background: comment.approved ? '#f0fff0' : '#fffbe0' }}>
          <CardContent>
            <Typography variant="subtitle1"><strong>{comment.name}</strong> - {comment.website}</Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>{comment.text}</Typography>
            {!comment.approved && (
              <Button size="small" onClick={() => approveComment(comment.id)} sx={{ mt: 1 }}>
                ارسال
              </Button>
            )}
            {comment.approved && (
              <Typography variant="caption" color="green">تمت الموافقة</Typography>
            )}
          </CardContent>
        </Card>
      ))}

      <Divider sx={{ my: 4 }} />

      <Typography variant="h6">اترك رساله</Typography>
      <Typography variant="body2" sx={{ mb: 2 }}>
        لن يتم نشر عنوان بريدك الإلكتروني. الحقول الإلزامية مشار إليها بـ *
      </Typography>

      <form onSubmit={handleSubmit}>
        <TextField
          label="الرساله *"
          name="text"
          value={form.text}
          onChange={handleChange}
          required
          fullWidth
          multiline
          rows={4}
          margin="normal"
        />
        <TextField label="اسم *" name="name" value={form.name} onChange={handleChange} required fullWidth margin="normal" />
        <TextField label="Email *" name="email" type="email" value={form.email} onChange={handleChange} required fullWidth margin="normal" />
        <TextField label="الموقع" name="website" value={form.website} onChange={handleChange} fullWidth margin="normal" />

        <FormControlLabel
          control={<Checkbox name="remember" checked={form.remember} onChange={handleChange} />}
          label="احفظ اسمي، بريدي الإلكتروني، والموقع الإلكتروني في هذا المتصفح لاستخدامها المرة المقبلة في تعليقي."
        />

        <Button type="submit" variant="contained" color="primary" fullWidth>
          إرسال 
        </Button>
      </form>
    </Box>
  );
};

export default CommentSection;
