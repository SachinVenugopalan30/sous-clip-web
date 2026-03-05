# Landing Page Spec — Sous Clip

> Single-page static site to advertise Sous Clip, deployable on Vercel/Netlify.

## Goal

Replace the current Astro landing page (`/landing`) with a polished, standalone single-page site that markets Sous Clip to the self-hosted community. Must be deployable as a static site on Vercel or Netlify with zero backend.

---

## Tech Stack

| Layer | Choice | Rationale |
|-------|--------|-----------|
| Framework | **Astro** (existing) | Already in `/landing`, static by default, zero JS shipped unless opted in |
| Styling | **Inline CSS with CSS custom properties** | Matches current approach, no build tooling needed |
| Fonts | Google Fonts: Playfair Display (700), DM Sans (400/500/700), JetBrains Mono (400) | Same as main app |
| Deployment | Vercel/Netlify static adapter | `astro build` → deploy `dist/` |

---

## Design System (match main app)

### Colors
```css
--bg: #FDFAF5;          /* cream background */
--surface: #F5F0E8;     /* warm beige cards */
--border: #E2D9CC;      /* light taupe borders */
--text: #1C1917;        /* near-black text */
--muted: #78716C;       /* warm gray secondary text */
--accent: #C2410C;      /* burnt orange — CTAs, highlights */
--accent-alt: #15803D;  /* green — success states */
--dark-bg: #1C1917;     /* dark section backgrounds */
--dark-surface: #292524; /* dark section cards */
```

### Typography
- **Headings:** Playfair Display 700 (serif, editorial feel)
- **Body:** DM Sans 400/500/700 (clean sans-serif)
- **Code/technical:** JetBrains Mono 400

### Spacing & Layout
- Max content width: `1100px`
- Section padding: `80px 0` desktop, `48px 0` mobile
- Container padding: `0 24px`
- Border radius: `8px` buttons, `12px` cards, `16px` hero visuals
- Grid gaps: `40–60px` between major elements

---

## Page Sections (top to bottom)

### 1. Navbar (NEW — not in current page)
- Sticky, transparent background that gets `var(--bg)` + subtle shadow on scroll
- Left: "Sous Clip" wordmark (Playfair Display) + ChefHat icon (inline SVG)
- Right: "GitHub" link, "Deploy with Docker" CTA button (burnt orange)
- Mobile: hamburger menu or just the two links inline

### 2. Hero
- **Layout:** 2-column grid (text left, visual right). Single column on mobile.
- **Headline:** `"Rescue recipes from the feed."` (Playfair Display, ~3.5rem)
- **Subheadline:** "Sous Clip turns any YouTube Short, Instagram Reel, or TikTok into a clean saved recipe — on your own server, in under 30 seconds."
- **CTAs:**
  - Primary: "Deploy with Docker" → links to `#quickstart` (burnt orange button)
  - Secondary: "View on GitHub" → GitHub repo (outlined button)
- **Trust badges** (small text row): "Open source, MIT licensed" · "Your data, your server" · "Bring your own AI key"
- **Right column:** Replace current placeholder with either:
  - Option A: Animated SVG/CSS mockup of the pipeline (Download → Transcribe → Extract → Saved)
  - Option B: Screenshot/GIF of the actual app in action
  - Option C: Stylized recipe card illustration showing the output

### 3. Problem Statement (emotional hook)
- Narrow centered text block (max 640px)
- Three paragraphs telling the story:
  1. The scrolling moment — spotting a recipe in a reel
  2. "You screenshot. You bookmark. You forget." (bold/medium weight)
  3. The jab at cloud recipe apps + "There had to be a better way."
- Keep current copy — it's good

### 4. How It Works (3-step process)
- **Background:** `var(--surface)` (beige)
- **Heading:** "How it works" (Playfair Display, centered)
- **3-column grid** (stacks on mobile):
  1. **Paste or share the URL** — "Drop a link or use the mobile share sheet directly from Instagram, YouTube, or TikTok."
  2. **We handle the rest** — "The video is downloaded, the audio transcribed locally with Whisper, and your chosen AI extracts the structured recipe."
  3. **Yours forever** — "A clean recipe card — ingredients, steps, cook time, servings — saved to your library on your own server."
- Each step: large accent-colored number, bold title, muted description
- **Enhancement:** Add simple inline SVG icons above each number (link icon, wand/magic icon, book icon)

### 5. Features Grid
- **6 cards** in a 3×2 grid (single column on mobile)
- Card style: `var(--surface)` background, `var(--border)` border, `12px` radius, `24px` padding
- Each card: bold title + muted description
- Cards:
  1. **Any short-form video** — YouTube Shorts, Instagram Reels, TikTok via yt-dlp
  2. **Local transcription** — Whisper on GPU or CPU, auto-detected
  3. **Your AI, your key** — Claude, OpenAI, or local Ollama
  4. **Mobile share sheet** — PWA install, share directly from any app
  5. **Personal recipe library** — Search, tag, and browse saved recipes
  6. **Self-hosted forever** — SQLite, single Docker command, data stays on your server
- **Enhancement:** Add a subtle icon (Lucide-style inline SVG) to each card header

### 6. Pipeline Demo (dark section)
- **Background:** `var(--dark-bg)` with white text
- **Heading:** "See it in action"
- **Visual:** Horizontal step flow showing the 4 pipeline stages:
  - Download → Transcribe → Extract → **Saved** (accent-colored)
- **Enhancement:** Add CSS animation — steps light up sequentially on a loop (subtle pulse/glow, no JS needed). Use `@keyframes` with staggered `animation-delay`.

### 7. Quick Start / Self-Hosting
- **Layout:** 2-column grid (text left, code block right). Stacks on mobile.
- **Left:**
  - Heading: "Built for people who believe their data is theirs."
  - Body: Mention SQLite, no cloud accounts, no vendor lock-in, reverse proxy compatible
- **Right:** Dark code block with:
  ```bash
  git clone https://github.com/SachinVenugopalan30/sous-clip
  cd sous-clip
  cp .env.example .env
  docker compose up -d
  ```
  - Below code: `→ Open http://localhost:3000` in accent color
- **Fix:** Update GitHub URLs from placeholder `yourname/Sous Clip` to actual `SachinVenugopalan30/sous-clip`

### 8. Footer
- Centered layout
- "Sous Clip" wordmark (Playfair Display)
- Tagline: "Your recipes. Your server. Forever." (italic, muted)
- Links row: GitHub · Docs · r/selfhosted · License
- Sign-off: "Built with care and a lot of cooking videos."
- **Fix:** Update GitHub link to actual repo URL

---

## Enhancements Over Current Landing Page

| Area | Current | New |
|------|---------|-----|
| Navbar | None | Sticky nav with logo + CTA |
| Hero visual | Empty placeholder div | Animated pipeline mockup or app screenshot |
| Step icons | Numbers only | Numbers + SVG icons |
| Feature cards | No icons | Icons in card headers |
| Pipeline demo | Static boxes | CSS-animated sequential glow |
| GitHub URLs | Placeholder `yourname/Sous Clip` | Actual `SachinVenugopalan30/sous-clip` |
| Scroll behavior | None | `scroll-behavior: smooth` for anchor links |
| Meta tags | Basic | Add Open Graph + Twitter Card meta for social sharing |

---

## SEO & Social Meta

Add to `<head>`:
```html
<!-- Open Graph -->
<meta property="og:title" content="Sous Clip — Your recipes. Your server. Forever." />
<meta property="og:description" content="Self-hosted recipe extractor for cooking videos. Paste a URL, get a clean recipe." />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://sous-clip.dev" />
<meta property="og:image" content="/og-image.png" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Sous Clip — Your recipes. Your server. Forever." />
<meta name="twitter:description" content="Self-hosted recipe extractor for cooking videos." />
<meta name="twitter:image" content="/og-image.png" />
```

Create an `og-image.png` (1200×630): Cream background, "Sous Clip" in Playfair Display, tagline, burnt orange accent.

---

## Responsive Breakpoints

| Breakpoint | Behavior |
|------------|----------|
| > 768px | Full 2-col/3-col grid layouts |
| ≤ 768px | Single column, reduced font sizes, stacked grids |

Key mobile adjustments:
- Hero headline: `2.5rem` (from `3.5rem`)
- Hero visual: `200px` height (from `360px`)
- All grids collapse to single column
- Navbar: inline links (no hamburger needed for 2 items)

---

## Deployment

```bash
cd landing
npm run build    # astro build
# Output: dist/
```

**Vercel:** Connect repo, set root directory to `landing/`, framework preset "Astro".

**Netlify:** Connect repo, set base directory to `landing/`, build command `npm run build`, publish directory `dist/`.

---

## Files to Change

| File | Action |
|------|--------|
| `landing/src/pages/index.astro` | Rewrite with all sections above |
| `landing/public/favicon.svg` | Verify exists (reuse app icon) |
| `landing/public/og-image.png` | Create (for social sharing) |

---

## Out of Scope

- Dark mode toggle (single light theme for marketing page)
- JavaScript interactivity beyond CSS animations
- Blog, docs, or multi-page navigation
- Analytics (can be added later via Vercel/Netlify built-in)
