import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { useScrollToTop } from "../hooks/useScrollToTop";

export default function MainLayout() {
  // Ensure smooth scroll to top on every navigation change
  useScrollToTop();

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

