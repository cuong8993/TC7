# TC7 Studio

Premium multilingual website for **TC7 Studio**, an independent digital studio for web design, redesign, domain/DNS setup, SEO, advertising foundations and ongoing support.

## What is implemented

- premium dark editorial visual direction with TC7 blue accent
- responsive desktop, tablet and mobile layouts
- English / German / Vietnamese language switcher with saved language preference
- animated hero, subtle cursor light, loader and scroll reveals
- Kimi.Studio flagship case-study presentation
- interactive before / after redesign slider
- service, process, studio and contact sections
- direct project enquiry via email client
- reduced-motion accessibility support
- basic SEO title and meta description
- no framework and no build step: the site is immediately deployable as static HTML

## Preview locally

```bash
python -m http.server 8080
```

Then open `http://localhost:8080`.

## Deploy

The current site is a dependency-free static site, so it can be deployed directly with GitHub Pages, Netlify, Cloudflare Pages, Vercel or a normal web host. The publish directory is the repository root and there is no build command.

## Before commercial launch

Two real-world details still need to be replaced/added because they were not available in the repository:

1. **Contact address:** the form currently opens `hello@tc7.studio`. Replace it in `index.html` if the final TC7 email/domain is different.
2. **German legal pages:** add the real `Impressum` and `Datenschutzerklärung` before using the website commercially. These require the actual operator/business details and should not be invented in code.

Once the final domain is known, also add its canonical URL and production Open Graph URL.

## Brand

**TC7 Studio**  
*Design like an agency. Support like a partner.*
