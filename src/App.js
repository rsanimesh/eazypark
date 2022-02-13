import './App.css';

import AboutUs from './myComponents/aboutUs';
import Crousel from './myComponents/crousel';
import Footer from './myComponents/footer';
import Header from './myComponents/header';
import Products from './myComponents/products';
import WhyChooseUs from './myComponents/whyChooseUs';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PrivacyPolicy from './myComponents/privacyPolicy';
import RefundPolicy from './myComponents/refundPolicy';
import CancellationPolicy from './myComponents/cancellationPolicy';
import TermsAndConditions from './myComponents/termsAndConditions';
import EazyPark from './myComponents/eazyPark';
import AdminPanel from './myComponents/adminPanel';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Crousel />
            <Products />
            <AboutUs />
            <WhyChooseUs />
          </>
        } />
        <Route path="/eazy-park" element={<EazyPark />} />
        <Route path="/admin-panel" element={<AdminPanel />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
        <Route path="/cancellation-policy" element={<CancellationPolicy/>} />
        <Route path="/refund-policy" element={<RefundPolicy/>} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;