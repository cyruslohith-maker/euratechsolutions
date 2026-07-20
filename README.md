# Eura Tech Solutions

> **Intelligent Voice AI System Built for Business Operations**

Custom Voice AI infrastructure that handles inbound inquiries, routes caller intent, automates calendar bookings, and syncs with your CRM in real time.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Icons | Lucide React |
| Database | Supabase (PostgreSQL) |
| Deployment | Vercel |

---

## Getting Started

### 1. Clone & Install

```bash
git clone https://github.com/cyruslohith-maker/euratechsolutions.git
cd euratechsolutions
npm install
```

### 2. Set Up Environment Variables

```bash
cp .env.local.example .env.local
```

Open `.env.local` and fill in your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

> Get these from [app.supabase.com](https://app.supabase.com) → Project Settings → API

### 3. Set Up the Database

1. Go to your Supabase project → **SQL Editor**
2. Copy the contents of [`supabase-schema.sql`](./supabase-schema.sql)
3. Paste and run it — this creates the `leads` table with Row Level Security

### 4. Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Project Structure

```
eura-tech/
├── app/
│   ├── layout.tsx          # Root layout, metadata, schema.org JSON-LD
│   ├── page.tsx            # Landing page
│   ├── terms/page.tsx      # Terms & Conditions (placeholder)
│   └── privacy/page.tsx    # Privacy Policy (placeholder)
├── components/
│   ├── Navbar.tsx          # Sticky nav with mobile menu
│   ├── Hero.tsx            # Hero section with CTAs
│   ├── DemoModal.tsx       # Lead capture form → WebRTC demo
│   ├── ImpactBar.tsx       # 3-column stats bar
│   ├── ArchitectureGrid.tsx # System features grid
│   ├── UseCases.tsx        # 3 operational use case cards
│   ├── FinalCTA.tsx        # Bottom CTA section
│   └── Footer.tsx          # Footer with legal links
├── lib/
│   └── supabase.ts         # Supabase client (env vars only)
├── public/
│   └── logo.png            # Eura logo
├── supabase-schema.sql     # Database setup SQL
└── .env.local.example      # Environment variable template
```

---

## Pages

| Route | Description |
|---|---|
| `/` | Main landing page |
| `/terms` | Terms & Conditions (placeholder — add legal content) |
| `/privacy` | Privacy Policy (placeholder — add legal content) |

---

## Deploying to Vercel

```bash
npx vercel --prod
```

Add your environment variables in the Vercel dashboard under **Project → Settings → Environment Variables**:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

---

## Lead Capture Flow

1. Visitor clicks **Try Live Demo**
2. Modal opens with 6-field lead form (Name, Business, Email, Phone, Country, State)
3. On submit → lead is saved to Supabase `leads` table
4. Success state loads the interactive WebRTC demo player in an iframe
5. View captured leads in your Supabase dashboard → Table Editor → `leads`

---

## Design System

| Token | Value |
|---|---|
| Background (dark) | `#09090B` |
| Charcoal accent | `#18181B` |
| Pure white | `#FFFFFF` |
| Border gray | `#E4E4E7` |
| Muted text | `#71717A` |
| Font | Inter (sans) + JetBrains Mono |

---

## License

© 2025 Eura Tech Solutions. All rights reserved.
