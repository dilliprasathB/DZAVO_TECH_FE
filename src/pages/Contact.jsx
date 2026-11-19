import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  ShieldCheck, 
  MessageSquare
} from "lucide-react";
import Button from "../components/Button";
import { services } from "../data/services";
import { submitEnquiry } from "../services/api";
import { LinkedinIcon, GithubIcon, TwitterIcon, DribbbleIcon } from "../components/SocialIcons";

export default function Contact() {
  const [searchParams] = useSearchParams();
  const preselectedService = searchParams.get("service") || "";

  // Form State
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    description: "",
    contactMethod: "email",
    _hp: ""
  });

  // Validation Errors
  const [errors, setErrors] = useState({});

  // Submission Status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(null);
  const [submitError, setSubmitError] = useState(null);

  // Set pre-selected service if coming from a service page
  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({
        ...prev,
        service: preselectedService
      }));
    }
  }, [preselectedService]);

  const validate = () => {
    const errs = {};

    // Full Name
    if (!formData.fullName.trim()) {
      errs.fullName = "Please enter your full name";
    } else if (formData.fullName.trim().length < 2) {
      errs.fullName = "Name must be at least 2 characters";
    }

    // Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errs.email = "Please enter your business email address";
    } else if (!emailRegex.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address (e.g., name@company.com)";
    }

    // Phone
    const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,8}$/;
    if (!formData.phone.trim()) {
      errs.phone = "Please enter your direct contact phone number";
    } else if (!phoneRegex.test(formData.phone.trim().replace(/[\s()-]/g, ""))) {
      errs.phone = "Please enter a valid phone number with area code";
    }

    // Service Required
    if (!formData.service) {
      errs.service = "Please select the primary discipline required";
    }

    // Project Description
    if (!formData.description.trim()) {
      errs.description = "Please provide an initial overview of your project requirements";
    } else if (formData.description.trim().length < 15) {
      errs.description = "Please describe your project in at least 15 characters";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field-specific error as user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(null);

    try {
      const response = await submitEnquiry(formData);
      setSubmitSuccess(response);
      // Reset form after successful submission
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        description: "",
        contactMethod: "email",
        _hp: ""
      });
      setErrors({});
    } catch (err) {
      // Preserve form data on failure as required!
      setSubmitError(err.message || "An unexpected error occurred while transmitting your enquiry.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const rawNumber = import.meta.env.VITE_WHATSAPP_NUMBER || "918610140943";
  const whatsappUrl = `https://wa.me/${rawNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
    "Hello DZAVO Technology, I am interested in discussing a project for my business."
  )}`;

  return (
    <div>
      {/* 1. Header */}
      <section 
        className="section-hero section-dark bg-grid-pattern-dark" 
        style={{ 
          borderBottom: "1px solid var(--color-navy-border)", 
          textAlign: "center",
          position: "relative",
          paddingTop: "clamp(5rem, 8vw, 7.5rem)",
          paddingBottom: "clamp(4.5rem, 7vw, 6.5rem)"
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "10%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "600px",
            height: "350px",
            background: "radial-gradient(circle, rgba(49, 91, 232, 0.2) 0%, rgba(16, 27, 53, 0) 70%)",
            pointerEvents: "none",
            zIndex: 1
          }}
        />

        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ maxWidth: "860px", margin: "0 auto", textAlign: "center" }}>
            <div style={{ display: "inline-flex", justifyContent: "center", marginBottom: "1.25rem" }}>
              <div 
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.55rem",
                  padding: "0.35rem 0.95rem",
                  borderRadius: "var(--radius-full)",
                  backgroundColor: "rgba(49, 91, 232, 0.16)",
                  border: "1px solid rgba(49, 91, 232, 0.35)",
                  color: "#93C5FD",
                  fontSize: "0.825rem",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase"
                }}
              >
                <span className="status-dot-pulse" />
                Initiate Dialogue • Direct Technical Advisory
              </div>
            </div>
            <h1 style={{ marginTop: "0.5rem", marginBottom: "1.5rem", color: "#FFFFFF", fontSize: "clamp(2.4rem, 4.8vw, 4rem)", lineHeight: 1.15 }}>
              Let's Discuss Your <span className="gradient-text-light">Project</span>.
            </h1>
            <p className="lead" style={{ color: "var(--color-light-muted)", maxWidth: "760px", margin: "0 auto", fontSize: "1.15rem", lineHeight: 1.7 }}>
              Share your business ambitions, timeline expectations, or architectural challenges. A DZAVO technical director will review your enquiry and respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Main Contact Form & Direct Channels Layout */}
      <section className="section section-light">
        <div className="container">
          <div className="section-header text-center" style={{ maxWidth: "760px", margin: "0 auto 3.5rem" }}>
            <span className="section-eyebrow">Direct Channel</span>
            <h2 className="section-title">Start a Conversation with Our Specialists</h2>
            <p className="section-desc" style={{ margin: "0 auto" }}>
              Reach out directly through the enquiry form below or connect via our verified communication lines for enterprise consultations.
            </p>
          </div>

          <div
            className="grid-2 contact-layout"
            style={{
              display: "grid",
              gridTemplateColumns: "1.4fr 1fr",
              gap: "4rem",
              alignItems: "flex-start"
            }}
          >
            {/* Left: Project Enquiry Form */}
            <div
              className="card hover-lift"
              style={{
                padding: "clamp(2rem, 3.5vw, 3rem)",
                backgroundColor: "var(--color-white)",
                borderRadius: "var(--radius-lg)",
                boxShadow: "var(--shadow-card)",
                border: "1px solid var(--color-border-subtle)"
              }}
            >
              <div style={{ marginBottom: "2rem" }}>
                <span className="badge badge-royal" style={{ marginBottom: "0.5rem" }}>
                  Project Enquiry
                </span>
                <h2 style={{ fontSize: "1.65rem", marginTop: "0.5rem" }}>
                  Request a Detailed Scope &amp; Quote
                </h2>
                <p style={{ fontSize: "0.95rem", color: "var(--color-secondary-text)" }}>
                  All communications are held under strict enterprise confidentiality.
                </p>
              </div>

              {/* Success Notification Alert */}
              {submitSuccess && (
                <div
                  role="alert"
                  style={{
                    backgroundColor: "var(--color-success-bg)",
                    border: "1px solid rgba(16, 185, 129, 0.3)",
                    borderRadius: "var(--radius-sm)",
                    padding: "1.5rem",
                    marginBottom: "2rem",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "1rem"
                  }}
                >
                  <CheckCircle2 size={24} style={{ color: "#10B981", flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <h4 style={{ color: "#065f46", fontSize: "1.05rem", marginBottom: "0.25rem" }}>
                      Enquiry Submitted Successfully
                    </h4>
                    <p style={{ color: "#065f46", fontSize: "0.925rem", margin: 0, lineHeight: 1.5 }}>
                      {submitSuccess.message || "Your enquiry has been submitted successfully. We will contact you soon."} Reference ID: <strong>{submitSuccess.id}</strong>.
                    </p>
                  </div>
                </div>
              )}

              {/* Error Notification Alert */}
              {submitError && (
                <div
                  role="alert"
                  style={{
                    backgroundColor: "var(--color-error-bg)",
                    border: "1px solid rgba(239, 68, 68, 0.3)",
                    borderRadius: "var(--radius-sm)",
                    padding: "1.5rem",
                    marginBottom: "2rem",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "1rem"
                  }}
                >
                  <AlertCircle size={24} style={{ color: "var(--color-error)", flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <h4 style={{ color: "#991b1b", fontSize: "1.05rem", marginBottom: "0.25rem" }}>
                      Submission Failed
                    </h4>
                    <p style={{ color: "#991b1b", fontSize: "0.925rem", margin: 0, lineHeight: 1.5 }}>
                      {submitError}
                    </p>
                    <p style={{ color: "#991b1b", fontSize: "0.825rem", margin: "0.5rem 0 0 0" }}>
                      Your information has been preserved. You can retry submitting or reach us immediately via WhatsApp.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate>
                {/* Anti-spam honeypot */}
                <input
                  type="text"
                  name="_hp"
                  value={formData._hp || ""}
                  onChange={handleChange}
                  style={{ display: "none", position: "absolute", left: "-9999px" }}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />
                {/* Name & Email Row */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }} className="grid-2">
                  <div className="form-group">
                    <label htmlFor="fullName" className="form-label form-label-required">
                      Full Name
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g., Alexandra Croft"
                      className={`form-input ${errors.fullName ? "is-invalid" : ""}`}
                      disabled={isSubmitting}
                      required
                    />
                    {errors.fullName && <span className="form-error">{errors.fullName}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label form-label-required">
                      Business Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alexandra@company.com"
                      className={`form-input ${errors.email ? "is-invalid" : ""}`}
                      disabled={isSubmitting}
                      required
                    />
                    {errors.email && <span className="form-error">{errors.email}</span>}
                  </div>
                </div>

                {/* Phone & Company Row */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }} className="grid-2">
                  <div className="form-group">
                    <label htmlFor="phone" className="form-label form-label-required">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 86101 40943"
                      className={`form-input ${errors.phone ? "is-invalid" : ""}`}
                      disabled={isSubmitting}
                      required
                    />
                    {errors.phone && <span className="form-error">{errors.phone}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="company" className="form-label">
                      Company / Organization
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g., Acme Technologies"
                      className="form-input"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                {/* Service Selection */}
                <div className="form-group">
                  <label htmlFor="service" className="form-label form-label-required">
                    Discipline / Service Required
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={`form-select ${errors.service ? "is-invalid" : ""}`}
                    disabled={isSubmitting}
                    required
                  >
                    <option value="">Select a discipline...</option>
                    {services.map((svc) => (
                      <option key={svc.id} value={svc.slug}>
                        {svc.title}
                      </option>
                    ))}
                    <option value="general-consultation">General Technical Consultation / Multiple Services</option>
                  </select>
                  {errors.service && <span className="form-error">{errors.service}</span>}
                </div>

                {/* Project Description */}
                <div className="form-group">
                  <label htmlFor="description" className="form-label form-label-required">
                    Project Overview &amp; Objectives
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={4}
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Briefly describe what you are looking to build, desired timeline, or any technical parameters..."
                    className={`form-textarea ${errors.description ? "is-invalid" : ""}`}
                    disabled={isSubmitting}
                    required
                  />
                  {errors.description && <span className="form-error">{errors.description}</span>}
                </div>

                {/* Preferred Contact Method */}
                <div className="form-group">
                  <label className="form-label">
                    Preferred Contact Channel
                  </label>
                  <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", marginTop: "0.25rem" }}>
                    <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", cursor: "pointer", fontSize: "0.925rem" }}>
                      <input
                        type="radio"
                        name="contactMethod"
                        value="email"
                        checked={formData.contactMethod === "email"}
                        onChange={handleChange}
                      />
                      <span>Email</span>
                    </label>
                    <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", cursor: "pointer", fontSize: "0.925rem" }}>
                      <input
                        type="radio"
                        name="contactMethod"
                        value="whatsapp"
                        checked={formData.contactMethod === "whatsapp"}
                        onChange={handleChange}
                      />
                      <span>WhatsApp</span>
                    </label>
                    <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", cursor: "pointer", fontSize: "0.925rem" }}>
                      <input
                        type="radio"
                        name="contactMethod"
                        value="phone"
                        checked={formData.contactMethod === "phone"}
                        onChange={handleChange}
                      />
                      <span>Phone Call</span>
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <div style={{ marginTop: "2rem" }}>
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    loading={isSubmitting}
                    disabled={isSubmitting}
                    icon={Send}
                    fullWidth
                  >
                    {isSubmitting ? "Transmitting Requirements..." : "Submit Project Enquiry"}
                  </Button>
                </div>
              </form>
            </div>

            {/* Right: Direct Information, WhatsApp & Company Credentials */}
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              {/* WhatsApp Priority Card */}
              <div
                className="card hover-lift"
                style={{
                  backgroundColor: "#0B1A2F",
                  color: "#FFFFFF",
                  border: "1px solid #1E2E52",
                  padding: "2.25rem",
                  borderRadius: "var(--radius-lg)"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "#25D366", color: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <MessageSquare size={20} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: "1.15rem", color: "#FFFFFF", margin: 0 }}>Direct WhatsApp Channel</h3>
                    <span style={{ fontSize: "0.75rem", color: "#10B981", fontWeight: 600 }}>Active Online</span>
                  </div>
                </div>

                <p style={{ fontSize: "0.9rem", color: "var(--color-light-muted)", lineHeight: 1.5, marginBottom: "1.5rem" }}>
                  Prefer immediate communication? Connect directly with a DZAVO technical director via our official enterprise WhatsApp line.
                </p>

                <Button
                  href={whatsappUrl}
                  variant="white"
                  fullWidth
                  icon={Send}
                >
                  Message on WhatsApp
                </Button>
              </div>

              {/* Direct Details Card */}
              <div className="card" style={{ padding: "2.25rem" }}>
                <h3 style={{ fontSize: "1.25rem", marginBottom: "1.5rem" }}>Direct Inquiries</h3>

                <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                    <div style={{ width: "40px", height: "40px", borderRadius: "var(--radius-sm)", backgroundColor: "var(--color-royal-blue-subtle)", color: "var(--color-royal-blue)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Mail size={18} />
                    </div>
                    <div>
                      <span style={{ fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--color-secondary-text)", display: "block" }}>
                        Email Inquiries
                      </span>
                      <a href="mailto:dilliprasath1225@gmail.com" style={{ fontSize: "1rem", fontWeight: 600, color: "var(--color-primary-navy)" }}>
                        dilliprasath1225@gmail.com
                      </a>
                    </div>
                  </div>

                  <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                    <div style={{ width: "40px", height: "40px", borderRadius: "var(--radius-sm)", backgroundColor: "var(--color-royal-blue-subtle)", color: "var(--color-royal-blue)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Phone size={18} />
                    </div>
                    <div>
                      <span style={{ fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--color-secondary-text)", display: "block" }}>
                        Direct Telephone / WhatsApp
                      </span>
                      <a href="tel:+918610140943" style={{ fontSize: "1rem", fontWeight: 600, color: "var(--color-primary-navy)" }}>
                        +91 8610140943
                      </a>
                    </div>
                  </div>

                  <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                    <div style={{ width: "40px", height: "40px", borderRadius: "var(--radius-sm)", backgroundColor: "var(--color-royal-blue-subtle)", color: "var(--color-royal-blue)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <MapPin size={18} />
                    </div>
                    <div>
                      <span style={{ fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--color-secondary-text)", display: "block" }}>
                        Studio Headquarters
                      </span>
                      <span style={{ fontSize: "0.95rem", fontWeight: 600, color: "var(--color-primary-navy)" }}>
                        Chennai, Tamil Nadu, India
                      </span>
                    </div>
                  </div>

                  <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                    <div style={{ width: "40px", height: "40px", borderRadius: "var(--radius-sm)", backgroundColor: "var(--color-royal-blue-subtle)", color: "var(--color-royal-blue)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Clock size={18} />
                    </div>
                    <div>
                      <span style={{ fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--color-secondary-text)", display: "block" }}>
                        Consultation Hours
                      </span>
                      <span style={{ fontSize: "0.95rem", color: "var(--color-main-text)" }}>
                        Monday – Friday: 09:00 – 18:00 IST / UTC+5:30
                      </span>
                    </div>
                  </div>
                </div>

                {/* Social Channels */}
                <div style={{ marginTop: "2rem", paddingTop: "1.5rem", borderTop: "1px solid var(--color-border-subtle)" }}>
                  <span style={{ fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--color-secondary-text)", display: "block", marginBottom: "0.75rem" }}>
                    Social &amp; Repository Channels
                  </span>
                  <div style={{ display: "flex", gap: "0.75rem" }}>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline" style={{ padding: "0.4rem 0.75rem" }}>
                      <LinkedinIcon size={16} />
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline" style={{ padding: "0.4rem 0.75rem" }}>
                      <GithubIcon size={16} />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline" style={{ padding: "0.4rem 0.75rem" }}>
                      <TwitterIcon size={16} />
                    </a>
                    <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline" style={{ padding: "0.4rem 0.75rem" }}>
                      <DribbbleIcon size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
