# Portfolio Website Build Plan

## Step 1: Set up Layout and Global Styles
- Update src/app/layout.tsx with metadata, fonts, and global styles.
- Add SEO metadata, fonts (Inter, Poppins, Space Grotesk).

## Step 2: Create Components
- Navbar component with social icons.
- Hero component with animations.
- About component.
- Projects component with cards.
- Services component.
- VideoDemo component.
- Contact component with form.
- Footer component.

## Step 3: Create Pages
- src/app/page.tsx (Home with all sections).
- src/app/about/page.tsx.
- src/app/projects/page.tsx.
- src/app/projects/[slug]/page.tsx.
- src/app/services/page.tsx.
- src/app/contact/page.tsx.

## Step 4: Add API Route
- src/app/api/contact/route.ts for contact form.

## Step 5: Add SEO and Assets
- Add sitemap.xml, robots.txt.
- Create dummy images in public/images and public/projects.
- Add structured data.

## Step 6: Testing and Deployment
- Run locally with npm run dev.
- Test responsiveness and animations.
- Deploy to Vercel.
