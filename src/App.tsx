import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { AboutPage } from './pages/AboutPage';
import { MortgageServicesPage } from './pages/MortgageServicesPage';
import { CustomerSupportServicesPage } from './pages/CustomerSupportServicesPage';
import { TechnologyServicesPage } from './pages/TechnologyServicesPage';
import { ContactPage } from './pages/ContactPage';
import { PricingPage } from './pages/PricingPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services/mortgage" element={<MortgageServicesPage />} />
        <Route path="/services/customer-support" element={<CustomerSupportServicesPage />} />
        <Route path="/services/technology" element={<TechnologyServicesPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
