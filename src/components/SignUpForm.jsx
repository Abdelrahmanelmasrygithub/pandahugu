// src/SignUpForm.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  TextField,
  Typography,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Grid,
  Paper,
} from "@mui/material";

export default function SignUpForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    gender: "",
    city: "",
    lookingFor: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("تم إرسال البيانات:", formData);
    // هنا ممكن تحط منطق تسجيل الحساب (مثلاً API) وبعد النجاح:
    navigate("/home");
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: "100vh", backgroundColor: "#f7f7f7" }}
    >
      <Grid item xs={12} sm={8} md={6} lg={4}>
        <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
          <Typography variant="h4" align="center" gutterBottom>
            تسجيل حساب جديد
          </Typography>

          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="الاسم الكامل"
              name="name"
              value={formData.name}
              onChange={handleChange}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="البريد الإلكتروني"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="كلمة المرور"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="العمر"
              name="age"
              type="number"
              value={formData.age}
              onChange={handleChange}
              margin="normal"
              required
            />

            <FormControl fullWidth margin="normal" required>
              <InputLabel>الجنس</InputLabel>
              <Select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                label="الجنس"
              >
                <MenuItem value="ذكر">ذكر</MenuItem>
                <MenuItem value="أنثى">أنثى</MenuItem>
              </Select>
            </FormControl>

            <TextField
              fullWidth
              label="المدينة"
              name="city"
              value={formData.city}
              onChange={handleChange}
              margin="normal"
              required
            />

            <FormControl fullWidth margin="normal" required>
              <InputLabel>البحث عن</InputLabel>
              <Select
                name="lookingFor"
                value={formData.lookingFor}
                onChange={handleChange}
                label="البحث عن"
              >
                <MenuItem value="ذكر">ذكر</MenuItem>
                <MenuItem value="أنثى">أنثى</MenuItem>
              </Select>
            </FormControl>

            <Button
              variant="contained"
              fullWidth
              type="submit"
              sx={{ mt: 2, py: 1.5, fontSize: "1.1rem" }}
            >
              إنشاء الحساب
            </Button>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
}
