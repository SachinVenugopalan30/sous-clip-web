---
name: Sous Clip (marketing site)
description: The marketing site as a kitchen pass, where every video comes in as an order ticket and leaves as a recipe.
colors:
  steel: "#e3e5e7"
  steel-rail: "#cfd3d7"
  steel-edge: "#9aa0a7"
  paper: "#ffffff"
  ink: "#141414"
  ink-soft: "#464a50"
  orange: "#c2410c"
  orange-deep: "#9a3309"
  orange-on-ink: "#fb923c"
typography:
  display:
    fontFamily: "Big Shoulders Display, Arial Narrow, sans-serif"
    fontSize: "clamp(50px, 6.4vw, 88px)"
    fontWeight: 900
    lineHeight: 0.9
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Big Shoulders Display, Arial Narrow, sans-serif"
    fontSize: "clamp(40px, 5.6vw, 68px)"
    fontWeight: 900
    lineHeight: 0.95
  title:
    fontFamily: "Big Shoulders Display, Arial Narrow, sans-serif"
    fontSize: "34px"
    fontWeight: 900
    lineHeight: 0.95
  title-sm:
    fontFamily: "Big Shoulders Display, Arial Narrow, sans-serif"
    fontSize: "21px"
    fontWeight: 700
    lineHeight: 1.05
  body:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.55
  body-lede:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "clamp(18px, 1.6vw, 21px)"
    fontWeight: 400
    lineHeight: 1.55
  body-sm:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 700
    letterSpacing: "0.06em"
  code:
    fontFamily: "ui-monospace, SF Mono, Menlo, Consolas, monospace"
    fontSize: "14px"
    lineHeight: 1.7
rounded:
  none: "0"
  clip: "2px 2px 4px 4px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "28px"
  xl: "48px"
  gutter: "clamp(16px, 4vw, 40px)"
  band: "clamp(64px, 9vw, 112px)"
  measure: "1200px"
components:
  button-primary:
    backgroundColor: "{colors.orange}"
    textColor: "{colors.paper}"
    typography: "{typography.display}"
    rounded: "{rounded.none}"
    padding: "0 24px"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.orange-deep}"
  button-outline:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0 14px"
    height: "44px"
  button-outline-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  ticket:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "28px 28px 24px"
    width: "min(100%, 440px)"
  stub:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "20px 14px 12px"
    width: "196px"
  clip:
    backgroundColor: "{colors.ink}"
    rounded: "{rounded.clip}"
    width: "34px"
    height: "14px"
  stamp:
    textColor: "{colors.orange}"
    typography: "{typography.title}"
    padding: "4px 10px 2px"
  code-ticket:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.code}"
    padding: "20px"
  nav-link:
    textColor: "{colors.ink}"
    padding: "0 12px"
    height: "44px"
---

# Design System: Sous Clip (marketing site)

This file covers the marketing site at sous-clip-web only. The Sous Clip app keeps its own identity (Playfair Display, DM Sans) and is not described here; the two share burnt orange and the chef-hat mark, nothing else.

## Overview

**Creative North Star: "Order Up"**

The site is the pass of a working kitchen. A cool steel field is the counter, a brushed rail runs across it, and bright white ticket stock hangs from black clips. Everything written on a ticket is printed in black ink; burnt orange is the printer's second ribbon, used for the things a cook must not miss: the stamp, modifiers, step numbers, the one action that matters. Type is signage over paperwork: a condensed, heavy display face for anything that would be shouted across the line, and a plain workhorse sans for everything read up close.

The world is flat and physical at once. Nothing floats on a shadow; depth comes from paper sitting on steel, from clips biting into ticket tops, and from a slight hand-hung tilt on the stubs. Density follows a real ticket: tight line-heights in display type, generous air between bands, tabular figures wherever a number is counted.

The site refuses the SaaS page: no gradients, no icon-card grids, no mock terminals, no glow. Proof is real: app screenshots hung on the rail and one real extraction printed as a ticket.

**Key Characteristics:**
- Steel field, white ticket stock, black ink, one burnt-orange ribbon.
- Condensed uppercase signage (Big Shoulders Display) over a workhorse sans (Hanken Grotesk).
- Square corners everywhere; the only rounding is on the metal clip.
- Rules, dashed tear lines and solid ink borders do the structural work shadows would do elsewhere.
- One motion moment: the hero ticket prints once on load.

## Colors

A cool neutral kitchen with a single warm ribbon.

### Primary
- **Ticket-Printer Orange** (orange): the brand burnt orange shared with the app. The stamp, the second line of the hero headline, ingredient-meta line, step numbers, station numbers, the FAQ toggle, the Install nav link, the primary button, links inside the code ticket, focus rings, selection and caret. It clears 5.2:1 on paper and 4.6:1 on steel.
- **Scorched Ribbon** (orange-deep): hover state for the primary button only.
- **Ribbon on Ink** (orange-on-ink): the lighter orange that replaces the brand orange on the ink band, where brand orange falls to 3.3:1. It clears 7.6:1 on ink and is used only for display-type labels there.

### Neutral
- **Pass Steel** (steel): the page field and header, and the alternate band colour. Also the browser theme colour.
- **Brushed Rail** (steel-rail): the rail bar, the rail under the screenshots, and the rail above the footer.
- **Rail Edge** (steel-edge): the lower lip of the rail bar and the scrollbar thumb.
- **Ticket Stock** (paper): every ticket, stub, screenshot mount, code ticket and paper band. Also the text colour on the ink band and on orange.
- **Printer Ink** (ink): all body text, clips, borders, rules, tear lines, and the install band.
- **Faded Ink** (ink-soft): secondary lines such as fine print, ticket intake line, stub times and captions. 7.5:1 on steel, 9:1 on paper.

### Named Rules
**The Second Ribbon Rule.** Orange marks what a cook must not miss, and nothing else. It is never a background for a band or a card; the only orange fill is the primary button.

**The Ribbon Swap Rule.** On the ink band, brand orange gives way to the lighter orange-on-ink. Brand orange text on ink is never shipped.

## Typography

**Display Font:** Big Shoulders Display, variable 100 to 900, self-hosted woff2 (with Arial Narrow, sans-serif)
**Body Font:** Hanken Grotesk, variable 100 to 900, self-hosted woff2 (with system-ui, sans-serif)
**Code Font:** the system monospace stack (ui-monospace, SF Mono, Menlo, Consolas)

**Character:** Kitchen signage over kitchen paperwork. The display face is condensed, heavy and always uppercase; the sans is neutral and does the reading. Both fonts are preloaded and use `font-display: swap`.

### Hierarchy
- **Display** (900, clamp(50px, 6.4vw, 88px), 0.9, -0.01em, uppercase, balanced wrap): the hero headline only. Its second sentence drops to its own line in orange.
- **Headline** (900, clamp(40px, 5.6vw, 68px), 0.95, uppercase): section titles.
- **Title** (900, 32 to 34px, 0.95, uppercase): the ticket's recipe title and station names. Station numbers sit beside them in orange at 56px.
- **Small title** (700 to 900, 20 to 24px, uppercase): stub titles, spec-sheet terms, ticket section labels, the "You'll need" label, the primary button and the wordmark (30px).
- **Body** (400, 17px, 1.55): all running text. Ledes run 18 to 21px at a 40 to 52ch measure; answers and station copy cap at 38 to 60ch.
- **Small body** (400 to 700, 13 to 15px): fine print, ticket lines, captions, stub feet, footer.
- **Label** (700, 13px, 0.06em, uppercase): code-ticket step headers only.
- **Code** (14px, 1.7): install commands and inline file names.

### Named Rules
**The Signage Rule.** The display face is always uppercase and always 700 or 900. Anything set in it is something you would read from across the kitchen; running text never uses it.

**The Tabular Rule.** Every counted number (ticket numbers, stub times, ingredient and step counts, step numerals, star counts) uses tabular figures.

## Layout

A single centred column capped at 1200px with a fluid side gutter (16px on phones, up to 40px). The page is a stack of full-bleed bands whose vertical padding runs 64 to 112px, alternating steel and paper, with one ink band for installation. Inside bands, two-column splits (hero 1.2:0.8, spec 0.9:1.1, install 0.85:1.15, FAQ 0.7:1.3) collapse to one column at 860px and below. The three stations sit in three equal columns on desktop and stack below 860px.

Two horizontal scrollers carry the rail motif: the stub rail under the header (no visible scrollbar) and the screenshot rail (thin scrollbar, mandatory snap, cards at min(85vw, 560px)). Both deliberately bleed off the right edge on phones.

Below 640px the header keeps only the wordmark and the orange Install link. Every tappable element is at least 44px tall; the primary button and the hero GitHub badge are 52px.

Anchor scrolling is smooth, with 24px of top padding.

## Elevation & Depth

The system has no shadows. Depth is physical: white paper laid on grey steel, black clips overlapping ticket tops by half their height, and the rail bar built from a 2px white top edge, a steel-rail body and a 3px steel-edge lip. The stubs hang at small individual tilts (-1.5deg to 1.5deg, pivoting from the clip) and the stamp is struck at -3deg.

### Named Rules
**The Paper-on-Steel Rule.** Lift is shown by contrast of material, never by `box-shadow`. A new surface that needs to feel raised becomes a white ticket on steel, clipped to a rail.

## Shapes

Square corners throughout: tickets, stubs, buttons, the badge, the code ticket, screenshot mounts. The only rounded object is the clip (2px top corners, 4px bottom), because it is metal, not paper.

Structure comes from lines with fixed weights: 4px solid ink opens a list (stations, spec sheet, first FAQ row); 1px solid ink separates rows; 2px solid ink under ticket section labels and around outline buttons; 2px dashed ink is a tear line, used across the ticket and between code-ticket steps; 18px bars of steel-rail act as rails. Ingredient bullets are 11px empty ink boxes, like tick boxes on a prep list.

## Components

### Buttons
- **Shape:** square (0 radius).
- **Primary:** orange fill, paper text, display face at 900, 24px, uppercase, 0.02em tracking, 52px tall, 24px side padding. Only one per view: "Install Sous Clip".
- **Hover / Focus:** fill deepens to orange-deep over 0.15s. Focus is the global 3px orange outline at 3px offset.
- **Outline (copy button, GitHub badge):** paper fill, 2px ink border, ink text in the sans at 700; on hover it inverts to ink fill with paper text.

### GitHub stars badge
An outline button carrying the inline GitHub mark, a label, and a count cell split off by a 2px rule in the current text colour, with an inline star and a tabular number. The count is fetched at build time and again in the browser on every visit, formatted in compact notation; if GitHub is unreachable the count cell stays hidden and the badge still works as a link. Its accessible name always includes the exact count ("Star on GitHub, 6 stars"). It appears beside the primary button (52px) and in the footer (44px, label "GitHub").

### Ticket (signature)
The worked example, hung from a large clip (56 x 18px). White stock, 28px padding, max 440px wide. Top line: the orange stamp on the left, a tabular, 0.06em-tracked ticket number on the right. Then a faded intake line, a full-bleed dashed tear, the recipe title in display type, an orange meta line, and ink-ruled section labels with counts. Ingredients run in two columns with empty tick boxes; steps are numbered in orange in a 26px gutter. A right-aligned caption under the ticket labels it as real output.

### Stamp
The display face at 900, 26px, in orange inside a 3px orange border, rotated -3deg. Used once per ticket for "Order up".

### Stub
A small ticket on the top rail: 196px wide, white, display-face title at 21px, a foot row with the time in faded ink and a bold tabular ticket number. Each stub has its own tilt and a small clip (34 x 14px).

### Clip
A black, slightly rounded bar centred on the top edge of whatever it holds (stub, ticket, screenshot mount), overlapping by half its height. It is decorative and hidden from assistive technology.

### Screenshot mount
A real app screenshot on a white mount (10px padding, 14px at the bottom) with a bold caption, clipped to an 18px steel-rail bar. On phones the library and recipe shots swap to cropped detail images.

### Spec sheet
A definition list opening on a 4px ink rule, each row split by a 1px ink rule into a display-face term (21px, uppercase) and a plain-sans value.

### Code ticket
A white ticket inside the ink band. Each step opens with an uppercase label header over a 2px dashed tear, with an outline Copy button on the right. Commands sit in monospace at 14px/1.7 with horizontal scrolling. Copy buttons exist only where the clipboard API does; the button reports "Copied" or "Copy failed" through its label for two seconds.

### FAQ toggle
Native `details`/`summary`. Each question is a 19px bold row at least 44px tall, closed by a 1px ink rule. The toggle is an 18px orange plus built from two 3px bars; opening collapses the vertical bar (scaleY to 0 over 0.2s) to leave a minus.

### Navigation
Plain sans at 500 in 44px-tall links with 12px side padding; hover underlines. The Install link is bold orange and is the only link kept on phones. The wordmark pairs the orange chef-hat outline with "SOUS CLIP" in the display face at 900, 30px, in ink.

### Motion and accessibility
- Motion is limited to the hero ticket printing once on load (a clip-path reveal from 45% to full height over 1.1s, cubic-bezier(0.16, 1, 0.3, 1)) and colour or toggle transitions of 0.15 to 0.2s.
- Under `prefers-reduced-motion: reduce` every animation and transition is removed and anchor scrolling becomes instant.
- Focus is always visible as a 3px orange outline with 3px offset; selection is orange with paper text.
- The page declares a light-only colour scheme.

## Do's and Don'ts

### Do:
- **Do** put new content on white ticket stock over steel, and hang it from a clip when it belongs to the rail.
- **Do** keep orange for stamps, numbers, modifiers and the single primary action; swap to orange-on-ink on the ink band.
- **Do** set headings in the uppercase display face at 700 or 900, and all reading text in Hanken Grotesk at 17px/1.55.
- **Do** use tabular figures for every count, time and ticket number.
- **Do** separate with ink rules and dashed tear lines at the recorded weights (4px opener, 2px label rule, 1px row rule, 2px dashed tear).
- **Do** keep touch targets at 44px or more and the orange focus outline on every interactive element.
- **Do** show the live GitHub star count from the API, never a typed-in number.

### Don't:
- **Don't** add `box-shadow`, gradients, blur or glow; depth is paper on steel.
- **Don't** round the corners of paper surfaces or buttons; only the metal clip is rounded.
- **Don't** fill bands or cards with orange, or set brand orange text on the ink band.
- **Don't** use the display face for running text or in lowercase.
- **Don't** add motion beyond the one ticket print, and never motion that survives reduced-motion.
- **Don't** borrow the app's Playfair Display or DM Sans here.
