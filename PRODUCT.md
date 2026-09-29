# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences, weighted equally (confirmed 2026-09-29):

- **Home cooks** who find recipes while scrolling YouTube Shorts, Instagram Reels and TikTok, usually on a phone. The job: keep a recipe they just watched without pausing, rewatching and typing it out.
- **Self-hosters** (homelab, r/selfhosted) who run Docker at home and want to own their data instead of trusting a recipe app's servers and subscription.

The site leads with the cooking problem; self-hosting is the reason to choose Sous Clip over hosted recipe apps.

## Product Purpose

Sous Clip turns a short-form cooking video into a structured recipe (title, ingredients with quantities and units, steps, prep and cook time, servings, tags, notes, thumbnail) and keeps it in a personal library on the user's own server. Success: a recipe seen in a feed is saved, searchable and cookable a minute later, and stays the user's forever.

## Positioning

A self-hostable, privacy-first recipe extractor built for the short-form video era:

- runs entirely on the user's hardware (Docker or Podman); recipes live in a single SQLite file;
- transcribes speech locally with Whisper, and also reads the video's caption;
- works with any AI provider the user chooses: Anthropic, OpenAI, Ollama, or any OpenAI- or Anthropic-compatible endpoint, including local models, so it can run fully offline;
- installs as a phone app (PWA) and receives links straight from the share sheet;
- free and open source under the MIT license.

## Operating Context

- Entry point is usually a phone: share a Reel/TikTok/Short to Sous Clip, or paste the link.
- The server is a home machine running Docker Compose (or Podman), with a one-time Whisper model download.
- In the app: library with search, tags, sort and filters (cooking time, date added); recipe page with serving scaler, edit, share links, Markdown/text export; optional forwarding to Mealie; in-app updates through an optional Watchtower service.

## Capabilities and Constraints

- Supported sources: YouTube Shorts, Instagram Reels, TikTok (via yt-dlp). Long-form video is untested; do not claim it.
- Requires a Docker/Podman host and either an AI API key or a local model. Setup effort is real; do not describe it as one-click.
- Images are published for amd64 and arm64 from v1.3.0 onward.
- Website: static Astro site on Cloudflare Pages at https://sous-clip-web.pages.dev/ (canonical URL).
- The site and the app's home page show the repository's live GitHub star count, fetched at view time so it updates as people star it. Never hardcode or round up the number.
- Terminology: "Sous Clip" (two words), "extract", "library", "recipe".

## Brand Commitments

- Name: Sous Clip. Tagline in the README: "Your recipes. Your server. Forever."
- The app's UI keeps its current identity (Playfair Display, DM Sans, burnt orange #C2410C, chef-hat mark).
- The marketing site is being redesigned (requested 2026-09-29) but must stay recognizably the same product as the app: it keeps the burnt orange and the chef-hat mark. It must not read as a generic SaaS page (gradient blobs, icon-card grids, fake terminals, "everything you need" copy), must not oversell ease of setup, and must not trade speed, SEO or accessibility for novelty or heavy motion (user guardrails, 2026-09-29).
- Primary site action: install it (quick start). Proof: real app screenshots and a worked example (one real video turned into its recipe, labeled as an example).

## Evidence on Hand

- Real app screenshots: `../reel-2-recipe/docs/screenshots/` (banner, library, extraction, recipe). They predate v1.3.0 (no thumbnails, filters or mobile polish yet).
- GitHub: https://github.com/SachinVenugopalan30/sous-clip. 6 stars and 0 forks as of 2026-09-29.
- License: MIT (LICENSE added 2026-09-29).
- None: no testimonials, user counts, press, benchmarks or case studies. Do not fabricate them.

## Product Principles

1. **Your data stays yours.** Every claim about privacy must be true of the default setup.
2. **Honest about effort.** Say plainly what setup takes; never imply hosted convenience.
3. **Phone first.** Most recipes are found on a phone, so the path from a video to a saved recipe starts there.
4. **Provider freedom.** Never tie the product to one AI vendor.
5. **Real proof only.** Show the real app, real numbers and real code; nothing invented.

## Accessibility & Inclusion

WCAG 2.2 AA: text contrast, visible keyboard focus, 44px touch targets on phones, and respect for reduced motion. The app must meet this in both its light and dark themes (applied in v1.3.0); the website is light-only by design.
