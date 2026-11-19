# DZAVO Technology — Corporate Web Platform

> **"Digital, Thoughtfully Built."**  
> We help ambitious businesses turn ideas into useful digital experiences through design, technology and creative collaboration.

---

## 1. Brand Identity & Design System

- **Company**: DZAVO Technology
- **Tagline**: Turning Ideas Into Digital Experiences.
- **Brand Personality**: Modern, Professional, Innovative, Trustworthy, Creative, Client-focused.
- **Color Palette**:
  - Primary Navy: `#0A193B`
  - Royal / Electric Blue: `#0062FF` (Hover: `#0050d4`, Subtle: `rgba(0, 98, 255, 0.08)`)
  - White: `#FFFFFF`
  - Light Background: `#F5F7FA`
  - Main Text: `#202633`
  - Secondary Text: `#737D90`
- **Typography**:
  - Headings: `Manrope` (Google Fonts)
  - Body: `DM Sans` (Google Fonts)
- **Strict Business Requirement**: Zero public pricing tables, pricing cards, package tiers, or subscription rates. Replaced across all pages with **"Request a Service"**, **"Get a Quote"**, and **"Let's Discuss Your Project"**.

---

## 2. Technology Stack

- **Framework**: React 19 + Vite 8
- **Routing**: React Router DOM 7
- **Icons**: Lucide React + custom SVG Vector Brand Icons
- **Design Architecture**: CSS Variables + Global Design System + Responsive Adaptations (Mobile, Tablet, Laptop, Desktop)
- **API Integration**: Configurable REST Layer (`src/services/api.js`) with preview fallback storage
- **Database Preparedness**: PostgreSQL / Supabase integration blueprint (`src/services/supabaseClient.js`)

---

## 3. Project Directory Architecture

```
DZAVO_FE/
├── public/
│   ├── dzavo-logo-white-bg.svg   # Primary vector wordmark (white background)
│   ├── dzavo-logo.svg            # Transparent vector wordmark
│   ├── dzavo-logo-dark.svg       # Inverted vector wordmark (dark background)
│   ├── favicon.svg               # Brand browser favicon
│   ├── robots.txt                # Search engine crawl directives
│   └── sitemap.xml               # Canonical sitemap for all pages
├── src/
│   ├── components/
│   │   ├── Button.jsx            # Reusable button with variants, sizes & loading states
│   │   ├── CTA.jsx               # High-impact corporate conversion banner
│   │   ├── ErrorBoundary.jsx     # Graceful error handling boundary
│   │   ├── FAQAccordion.jsx      # Accessible animated accordion with category filters
│   │   ├── Footer.jsx            # Corporate footer on all pages with legal links
│   │   ├── Header.jsx            # Glassmorphism sticky header with mobile drawer
│   │   ├── Logo.jsx              # Vector text-only DZAVO TECHNOLOGY wordmark
│   │   ├── ServiceCard.jsx       # Discipline overview cards with direct service enquiry
│   │   ├── SocialIcons.jsx       # Vector standard SVG social brand icons
│   │   └── WhatsAppButton.jsx    # Floating WhatsApp button with pre-filled message
│   │
│   ├── layouts/
│   │   ├── MainLayout.jsx        # Public website shell with scroll-to-top hook
│   │   └── AdminLayout.jsx       # Protected management portal sidebar layout
│   │
│   ├── data/
│   │   ├── services.js           # Centralized editable services data model
│   │   └── faqs.js               # Centralized editable frequently asked questions
│   │
│   ├── pages/
│   │   ├── Home.jsx              # 01. Complete corporate home page
│   │   ├── About.jsx             # 02. Story, Mission, Vision, Values & Culture
│   │   ├── Services.jsx          # 03. All 7 digital capability disciplines
│   │   ├── ServiceDetails.jsx    # 03b. Deep-dive discipline specifications & deliverables
│   │   ├── Process.jsx           # 04. 7-step professional engineering workflow
│   │   ├── FAQ.jsx               # 05. Interactive search & accordion Q&A
│   │   ├── Contact.jsx           # 06. Project enquiry form with validation & API
│   │   ├── Privacy.jsx           # Legal: Privacy Policy
│   │   ├── Terms.jsx             # Legal: Terms of Engagement
│   │   ├── NotFound.jsx          # Custom 404 error page
│   │   └── admin/
│   │       ├── AdminDashboard.jsx    # Management overview & statistics
│   │       ├── AdminEnquiries.jsx    # Review, search, filter & manage client leads
│   │       ├── AdminServices.jsx     # Add, edit & delete service disciplines
│   │       └── AdminFAQ.jsx          # Manage knowledge base questions
│   │
│   ├── hooks/
│   │   └── useScrollToTop.js     # Automatic viewport reset on route changes
│   │
│   ├── services/
│   │   ├── api.js                # API integration layer with error handling
│   │   └── supabaseClient.js     # PostgreSQL / Supabase database architecture
│   │
│   ├── styles/
│   │   ├── variables.css         # CSS tokens (colors, fonts, radii, elevations)
│   │   ├── global.css            # Typography, resets, cards, forms, utilities
│   │   └── responsive.css        # Responsive breakpoints (desktop, tablet, mobile)
│   │
│   ├── App.jsx                   # Central routing table (public + admin routes)
│   └── main.jsx                  # Application entry point
├── .env.example                  # Environment configuration template
├── index.html                    # SEO meta tags, Google Fonts & Open Graph
├── package.json
└── vite.config.js
```

---

## 4. Route Mapping

| Route | Page Component | Description |
|---|---|---|
| `/` | `Home.jsx` | Hero, company intro, services overview, Why Choose DZAVO, 7-step workflow summary, global CTA |
| `/about` | `About.jsx` | Company story, mission, vision, values, differentiators, studio culture |
| `/services` | `Services.jsx` | 7 core disciplines, detailed deliverables, category filtering |
| `/services/:slug` | `ServiceDetails.jsx` | In-depth discipline specifications, deliverables checklist, "Request This Service" CTA |
| `/process` | `Process.jsx` | The 7-step workflow: Initial Discussion → Delivery → Ongoing Support |
| `/faq` | `FAQ.jsx` | Searchable accordion answering quoting, IP ownership, and technologies |
| `/contact` | `Contact.jsx` | Project enquiry form with validation, service preselection, phone/email/WhatsApp options |
| `/privacy` | `Privacy.jsx` | Data privacy, confidentiality, and storage security standards |
| `/terms` | `Terms.jsx` | Master services agreement, IP transfer, and engagement terms |
| `/admin/*` | `AdminLayout.jsx` | Protected administration console for enquiries, services, and FAQs |
| `*` | `NotFound.jsx` | Custom 404 page with navigation recovery buttons |

---

## 5. Development & Production Commands

From the workspace root (`D:\DZAVO`):

```bash
# Start local development server
npm run dev

# Run production build
npm run build

# Preview production build locally
npm run preview
```
