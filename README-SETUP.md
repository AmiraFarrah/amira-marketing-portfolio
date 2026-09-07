# Setup

## 1. Copy files into your repo

From this bundle into `amira-marketing-portfolio/`:

```
src/App.tsx                    (replaces yours)
src/components/Hero.tsx
src/components/Band.tsx
src/components/VideoGrid.tsx
src/components/CaseList.tsx
src/data/content.ts
src/styles/portfolio.css
public/media/                  (the whole folder)
```

Keep your existing `main.tsx`, `index.html`, `vite.config`, `package.json`.

## 2. Check main.tsx

It should render `<App />` and nothing else. If it imports `./index.css`, that's fine —
`portfolio.css` is imported inside `App.tsx` and loads after it.

If your `index.css` has aggressive resets that fight the design, comment out its import.

## 3. No new dependencies

This uses only React. No Tailwind classes, no animation library, no router.
It works whether your Tailwind is v3, v4, or broken.

## 4. Run

```bash
npm install
npm run dev
```

## 5. Deploy

Push to `main`. Vercel rebuilds automatically.

---

## Notes on the design

**The scroll effect** you liked from the Canva site: the hero is `position: sticky`
behind the content, and the content sheet scrolls over it. One effect, done once —
not a fade-in on every section.

**The caption bars** (small dark labels on video frames and tags) mirror the burned-in
subtitles in your own footage. That's the one visual signature the site repeats.

**Colours** are set in `src/styles/portfolio.css` at the top:

```css
--ink:    #16202B   /* dark sections */
--paper:  #F7F6F2   /* light sections */
--signal: #E8B23A   /* accent */
```

Change those three and the whole site changes.

## 6. Video weight

Videos are the only performance risk. Compress everything to under 8 MB before committing.
GitHub also rejects single files over 100 MB, so this is not optional.
