# TC7 Studio

Premium multilingual website for **TC7 Studio**, an independent web studio for design, development, domain/DNS setup, SEO and ongoing support.

## Current design direction

The homepage was rebuilt as a product-led studio experience inspired by the clarity and pacing of high-end SaaS sites, while remaining an original TC7 implementation.

- large claim-first hero with a live development showcase
- interactive four-layer web system: structure, interface, performance and search
- premium alternating dark / warm-light visual system
- strong typography, asymmetric layouts and restrained micro-animation
- service architecture instead of generic agency cards
- compact Kimi.Studio reference rather than a large case study
- clear five-step process and focused contact section
- DE / VI / EN language switching with rewritten natural Vietnamese copy
- responsive layouts, keyboard focus states and reduced-motion support
- no external font dependency

## Brand assets

- Original uploaded logo / favicon: `assets/brand/tc7-logo.svg`
- Transparent website mark: `assets/brand/tc7-mark-transparent.svg`
- Social preview artwork: `assets/brand/og-tc7.svg`

The transparent mark is used on the website itself so the logo reads as a symbol rather than a square tile. The original uploaded file remains the favicon.

## Contact

The public homepage keeps personal details discreet. Phone, WhatsApp and email are available as contact actions; the full operator details remain on the legal pages.

Current contact:
- Phone / WhatsApp: 0173 9117103
- Email: cuong8993@gmail.com

## Architecture

- `index.html` — semantic page structure and SEO metadata
- `styles.css` — complete responsive design system
- `app.js` — language switching, mobile navigation, interactive system tabs, scroll reveals and contact form
- `impressum.html` / `datenschutz.html` — legal pages
- `wrangler.jsonc` — Cloudflare Workers Static Assets deployment

## Still pending after the final domain is connected

- set final canonical URL
- convert hreflang and Open Graph URLs to absolute production URLs
- optionally export the social preview as PNG for maximum platform compatibility
- replace Gmail with a TC7 business email when available
- replace the mailto enquiry with a server-side form if desired

## Deployment

Cloudflare Workers Static Assets deploys the repository root directly. No build step is required.
