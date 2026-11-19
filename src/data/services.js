/**
 * DZAVO Technology — Services Central Data Model
 * 
 * Centralized, editable registry of all professional services offered.
 * Strictly adheres to corporate guidelines: NO PRICING or subscription tiers.
 */

export const services = [
  {
    id: "web-dev",
    slug: "website-design-development",
    title: "Website Design & Development",
    shortDescription: "Bespoke, high-performance web platforms engineered with modern frontend frameworks, thoughtful interactions, and rock-solid SEO fundamentals.",
    fullDescription: "We engineer enterprise-grade web experiences that combine aesthetic refinement with robust technical architecture. From responsive corporate platforms to headless CMS integrations and high-converting product portals, our web applications load in milliseconds, adhere to WCAG accessibility benchmarks, and convert visitors into long-term clients.",
    icon: "Layout",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Custom React & Next.js Architecture",
      "Semantic, Accessible HTML5 & CSS3 Standards",
      "Headless CMS Integration (Sanity, Strapi, Contentful)",
      "Technical SEO & Core Web Vitals Optimization",
      "Ultra-Fast Global Edge Deployment",
      "Full Cross-Browser & Device Verification"
    ],
    deliverables: [
      "Complete responsive website codebase",
      "Component-driven design system",
      "Content management administrative dashboard",
      "SEO audits and Schema.org structured data",
      "Performance optimization benchmark report",
      "Comprehensive deployment documentation"
    ],
    relatedProjects: ["strata-analytics", "aurora-health", "vanguard-fintech"],
    popular: true
  },
  {
    id: "ui-ux",
    slug: "ui-ux-design",
    title: "UI/UX Design & Product Strategy",
    shortDescription: "Human-centered digital interfaces, design systems, and user journeys shaped by rigorous research, interactive prototypes, and usability testing.",
    fullDescription: "Great digital products solve real human problems effortlessly. We bridge user needs with strategic business goals through deep ethnographic research, systematic wireframing, high-fidelity Figma components, and iterative usability testing. Our design systems are architected to scale seamlessly alongside engineering teams.",
    icon: "Layers",
    heroImage: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1200&q=80",
    features: [
      "User Research & Journey Mapping",
      "Information Architecture & Wireframing",
      "Scalable Multi-Brand Design Systems",
      "Interactive High-Fidelity Prototypes",
      "Micro-Interactions & Motion Design",
      "Design-to-Code Developer Handover Specs"
    ],
    deliverables: [
      "Atomic Figma UI kit & component tokens",
      "Full click-through interactive prototype",
      "User research synthesis & usability testing report",
      "Responsive screen library for all screen breakpoints",
      "Design token library export for frontend teams"
    ],
    relatedProjects: ["strata-analytics", "nexus-logistics", "aurora-health"],
    popular: true
  },
  {
    id: "software-dev",
    slug: "software-development",
    title: "Custom Software Development",
    shortDescription: "Tailored web applications, internal operational tools, and secure cloud software engineered for reliability, security, and scalability.",
    fullDescription: "We build bespoke software systems that replace fragile legacy spreadsheets and disjointed SaaS subscriptions with cohesive, secure business tools. Leveraging cloud-native architectures, relational databases, and clean modular code, we deliver high-availability software built to withstand mission-critical enterprise workloads.",
    icon: "Cpu",
    heroImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Cloud-Native Distributed Architecture",
      "RESTful & GraphQL API Infrastructure",
      "Role-Based Access Control (RBAC) & Multi-Tenancy",
      "Relational & Document Database Schema Design",
      "Continuous Integration & Automated Testing Pipelines",
      "Automated Health Monitoring & Audit Logs"
    ],
    deliverables: [
      "Full production source code repository",
      "Automated CI/CD deployment pipelines",
      "OpenAPI / Swagger interactive documentation",
      "Database migration scripts and security audit",
      "Service Level Agreement (SLA) & technical runbook"
    ],
    relatedProjects: ["nexus-logistics", "vanguard-fintech"],
    popular: false
  },
  {
    id: "branding",
    slug: "branding-graphic-design",
    title: "Branding & Graphic Design",
    shortDescription: "Distinct visual identities, typographic systems, and digital brand collateral that establish immediate enterprise credibility.",
    fullDescription: "A brand is the emotional contract a company holds with its audience. We forge comprehensive brand identities—from custom logotypes and bespoke typographic hierarchies to digital asset suites, brand guidelines, and collateral—that position technology enterprises as category authorities.",
    icon: "Palette",
    heroImage: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Logotype Design & Typographic Wordmarks",
      "Brand Color Harmonization & Accessibility Specs",
      "Typography Pairing & Licensing Consultation",
      "Iconography & Vector Illustration Systems",
      "Corporate Stationery & Digital Pitch Decks",
      "Comprehensive Brand Identity Guidelines"
    ],
    deliverables: [
      "Master vector logo files (SVG, EPS, PDF, PNG)",
      "50+ Page Comprehensive Brand Manual",
      "Digital stationery & pitch deck templates",
      "Social media brand asset kit",
      "Font pairing guidelines and licensing documentation"
    ],
    relatedProjects: ["lumina-capital", "zenith-biotech"],
    popular: false
  },
  {
    id: "video-editing",
    slug: "video-editing-motion",
    title: "Video Editing & Motion Graphics",
    shortDescription: "Cinematic product launch videos, animated explanatory reels, and motion design that articulate complex technological value.",
    fullDescription: "We transform technical narratives into captivating motion experiences. Through cinematic pacing, 3D/2D animation, interface walk-throughs, and crisp sound design, our videos help technology firms introduce new products, pitch investors, and onboard users with impact.",
    icon: "Video",
    heroImage: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80",
    features: [
      "SaaS Product Walkthrough Animations",
      "Explainer Video Storyboarding & Direction",
      "2D/3D Motion Graphics & Micro-Animations",
      "Professional Color Grading & Sound Engineering",
      "Multi-Format Aspect Ratios for Omnichannel Release",
      "Animated UI Showcase Loops for Landing Pages"
    ],
    deliverables: [
      "Master 4K & 1080p video exports in web formats",
      "Short cut-downs optimized for social platforms",
      "Lottie / SVG animations for web integration",
      "Original project files and licensed audio tracks"
    ],
    relatedProjects: ["vanguard-fintech", "lumina-capital"],
    popular: false
  },
  {
    id: "marketing",
    slug: "digital-marketing",
    title: "Strategic Digital Marketing & Growth",
    shortDescription: "Data-informed digital acquisition, technical search visibility, and content ecosystems tailored for B2B technology businesses.",
    fullDescription: "Sustainable growth requires precision, not vanity metrics. We construct multi-channel B2B marketing engines that combine organic search dominance, authoritative technical content, targeted account-based marketing, and conversion funnel optimization to drive qualified enterprise enquiries.",
    icon: "TrendingUp",
    heroImage: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Technical Search Engine Optimization (SEO)",
      "High-Intent Content Strategy & Thought Leadership",
      "Conversion Rate Optimization (CRO)",
      "Data Analytics & Attribution Tracking (GA4)",
      "Account-Based Marketing (ABM) Infrastructure",
      "Competitor Landscape & Market Gap Intelligence"
    ],
    deliverables: [
      "Quarterly technical SEO roadmap",
      "Content strategy & keyword clustering blueprint",
      "Custom Looker / GA4 attribution dashboard",
      "A/B testing execution reports and insights"
    ],
    relatedProjects: ["strata-analytics", "nexus-logistics"],
    popular: false
  },
  {
    id: "other-solutions",
    slug: "other-digital-solutions",
    title: "Cloud Architecture & Digital Solutions",
    shortDescription: "Scalable cloud infrastructure, legacy system migrations, API integrations, and bespoke technology consultation.",
    fullDescription: "When off-the-shelf tools fail to meet specialized technical demands, DZAVO delivers bespoke digital engineering. From automated data pipelines and cloud migrations (AWS, GCP, Azure) to AI workflow automation and third-party integrations, we architect durable systems engineered for stability.",
    icon: "Cloud",
    heroImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Cloud Infrastructure Architecture (AWS/GCP)",
      "Docker & Kubernetes Container Orchestration",
      "Enterprise Payment & ERP API Integrations",
      "AI & LLM Workflow Automation",
      "Data Pipeline & Analytics Architecture",
      "Legacy Code Refactoring & Security Hardening"
    ],
    deliverables: [
      "Infrastructure as Code (Terraform) templates",
      "Security & compliance documentation",
      "Data pipeline specifications and schema models",
      "Disaster recovery and backup protocol procedures"
    ],
    relatedProjects: ["nexus-logistics", "vanguard-fintech", "zenith-biotech"],
    popular: false
  }
];

export const getServiceBySlug = (slug) => {
  return services.find((service) => service.slug === slug);
};

export const getServiceById = (id) => {
  return services.find((service) => service.id === id);
};

