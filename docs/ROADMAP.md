# Roadmap

Built in phases against the Master Website Upgrade Brief. Add complexity only when measured results justify it.

## Done (v0.2): rebuild on real content
- Vite + React + TypeScript, router, dark design system, reduced-motion support, skip link, keyboard focus states
- Real content from the live site in `src/content/site.ts`: 8 services, 3 packages, 8 one-time prices, FAQ, founder, process, portfolio items
- Pages: Home, Services, per-service landing pages (`/services/:slug`), Portfolio (search, category filters, load more), Pricing (package cards, one-time prices, package quiz), About, multi-step Contact/Enquiry form
- Consent-based checklist and newsletter signup
- Analytics helper with events: cta_click, package_quiz_used, portfolio_filter, portfolio_project_view, service_enquiry_click, form_start, form_complete, lead_signup, faq_open
- SEO: per-page title/description, canonical via `VITE_SITE_URL`, JSON-LD, robots.txt

## Deliberately not carried over from the live site
These were placeholders on the live site, so they are hidden here until real data is supplied (fill `stats`, `testimonials`, `proofStory.result`):
- Illustrative dashboard numbers
- "50+ books / 30+ authors / 5 star" sample stats
- Placeholder testimonial
- Proof-story result

## To do (needs the owner)
- Set `VITE_FORM_ENDPOINT` and `VITE_SIGNUP_ENDPOINT` (until set, forms fall back to email/WhatsApp links; they do not pretend to submit)
- Add the remaining ~16 portfolio projects (the live site lists 35; 19 were visible)
- Confirm cover/spotlight titles and categories (generic titles were used where unnamed)
- Move hot-linked images (currently loaded from the Lovable site) into `public/`
- The live quiz has 3 questions; only the first was visible, so only that one is implemented
- Add the checklist PDF delivery and a real analytics account

## Next
- Case study pages, blog and resource library, sitemap generation
- Before/after slider, ROI/royalty calculator (assumptions disclosed)
- AI service advisor and portfolio search grounded in real data (needs a server-side endpoint; keys never in the browser)
- Client portal, payments, admin dashboard (needs a real backend)
