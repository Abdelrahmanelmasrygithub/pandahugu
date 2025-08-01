import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfUse from './components/TermsOfUse';
import DmcaPage from './components/DmcaPage';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import CookiePolicy from './components/CookiePolicy';
import CardDetails from './components/CardDetails';
import AppBarHeader from './components/AppBarHeader';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import SignUpForm from './components/SignUpForm'; // ✅ تم تعديل الاسم ليتطابق مع الملف الفعلي

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppBarHeader />

      <Routes>
        <Route path="/" element={<SignUpForm />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="/dmca" element={<DmcaPage />} />
        <Route path="/cookiepolicy" element={<CookiePolicy />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/profile/:id" element={<CardDetails />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
