# IB AI Solutions — Video Production Lead Generation Site

Professional AI video production site for lead generation. Bilingual (German + English), modern dark theme with gradient accents.

## Features

- ✅ Bilingual (DE/EN) with language switcher
- ✅ Service showcase (3 tiers: Product, Ad Spot, Premium)
- ✅ Portfolio section (placeholder for video samples)
- ✅ Lead generation form
- ✅ Modern dark theme with blue/purple gradients
- ✅ Responsive design
- ✅ Smooth animations

## Setup

```bash
cd ~/projects/ib-ai-solutions
npm install
npm run dev
```

Visit: **http://localhost:3000**

## Project Structure

```
app/
├── layout.tsx (Root layout)
├── globals.css (Global styles)
├── page.tsx (Homepage + all sections)
├── page.css (Page-specific styles)
├── next.config.js
└── tsconfig.json
```

## Sections

1. **Navigation** — Sticky nav with language switcher
2. **Hero** — Headline + gradient blobs animation
3. **Services** — 3 service cards (Product, Ad Spot, Premium)
4. **Portfolio** — Placeholder for 4 video samples
5. **Contact Form** — Lead generation inquiry form
6. **Footer** — Simple footer

## Next Steps

1. **Finalize Branding** — Tomorrow evening (decide on IB AI Solutions vs co-branding)
2. **Add Video Samples** — Replace portfolio placeholders with actual videos
3. **Form Submission** — Wire form to email (nodemailer or Sendgrid)
4. **Domain & Deployment** — Register domain, deploy to Vercel
5. **Analytics** — Add Google Analytics (optional)

## Status

- **MVP:** Complete, locally tested
- **Videos:** Pending (will be added this week)
- **Branding:** Pending (tomorrow evening)
- **Form submission:** Currently logs to console (will wire to email later)

---

Built locally March 11, 2026. Ready for samples + branding decision.
