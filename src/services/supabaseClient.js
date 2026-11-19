/**
 * DZAVO Technology — Supabase / PostgreSQL Integration Blueprint & Client Prep
 * 
 * Strict Security Guidelines Followed:
 * 1. Never expose secret keys in client-side frontend code.
 * 2. Only public anonymous keys (VITE_SUPABASE_ANON_KEY) are consumed by the browser.
 * 3. All administrative mutations require Row Level Security (RLS) and server-side authentication.
 * 
 * PostgreSQL Entities Architecture:
 * 
 * 1. Table: enquiries
 *    - id: uuid primary key default gen_random_uuid()
 *    - full_name: text not null
 *    - email: text not null
 *    - phone: text not null
 *    - company: text
 *    - service_slug: text not null
 *    - project_description: text not null
 *    - preferred_contact_method: text not null
 *    - status: text default 'new' check (status in ('new', 'in_review', 'contacted', 'closed'))
 *    - created_at: timestamptz default timezone('utc'::text, now()) not null
 * 
 * 2. Table: services
 *    - id: text primary key
 *    - slug: text unique not null
 *    - title: text not null
 *    - short_description: text not null
 *    - full_description: text not null
 *    - features: jsonb default '[]'::jsonb
 *    - deliverables: jsonb default '[]'::jsonb
 *    - is_active: boolean default true
 * 
 * 3. Table: projects
 *    - id: text primary key
 *    - slug: text unique not null
 *    - title: text not null
 *    - client_name: text not null
 *    - industry: text not null
 *    - category: text not null
 *    - summary: text not null
 *    - challenge: text not null
 *    - solution: text not null
 *    - results: jsonb default '[]'::jsonb
 *    - deliverables: jsonb default '[]'::jsonb
 *    - tech_stack: jsonb default '[]'::jsonb
 *    - featured: boolean default false
 * 
 * 4. Table: team_members
 *    - id: text primary key
 *    - name: text not null
 *    - role: text not null
 *    - department: text not null
 *    - bio: text not null
 *    - skills: jsonb default '[]'::jsonb
 *    - is_placeholder: boolean default false
 * 
 * 5. Table: testimonials
 *    - id: text primary key
 *    - quote: text not null
 *    - author: text not null
 *    - role: text not null
 *    - company: text not null
 *    - verified_client: boolean default true
 * 
 * 6. Table: faqs
 *    - id: text primary key
 *    - question: text not null
 *    - answer: text not null
 *    - category: text not null
 */

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || "";
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || "";

export const isSupabaseConfigured = Boolean(
  SUPABASE_URL && 
  SUPABASE_ANON_KEY && 
  SUPABASE_URL.startsWith("http")
);

export const supabaseConfig = {
  url: SUPABASE_URL,
  isConfigured: isSupabaseConfigured,
  message: isSupabaseConfigured
    ? "Supabase credentials detected."
    : "Supabase integration prepared. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to your .env file to activate live PostgreSQL sync."
};

