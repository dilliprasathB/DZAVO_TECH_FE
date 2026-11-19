import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./layouts/AdminLayout";
import ErrorBoundary from "./components/ErrorBoundary";

// Public Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetails from "./pages/ServiceDetails";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";

// Admin Preparation Pages
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminEnquiries from "./pages/admin/AdminEnquiries";
import AdminServices from "./pages/admin/AdminServices";
import AdminFAQ from "./pages/admin/AdminFAQ";

export default function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          {/* Public Corporate Website Routes (Main Layout) */}
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="services/:slug" element={<ServiceDetails />} />
            <Route path="contact" element={<Contact />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="terms" element={<Terms />} />
            {/* Custom 404 Route */}
            <Route path="*" element={<NotFound />} />
          </Route>

          {/* Protected Administration Portal Routes (Admin Layout) */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="enquiries" element={<AdminEnquiries />} />
            <Route path="services" element={<AdminServices />} />
            <Route path="faqs" element={<AdminFAQ />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
