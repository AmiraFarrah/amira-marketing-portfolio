# Where every file goes

All media lives in `public/media/`. Paths in `src/data/content.ts` are written from `/media/...`.
File names below are exact — match them and nothing needs editing.

---

## 1. Videos → `public/media/video/`

| Your file | Rename it to |
|---|---|
| Interview with 1st President of AIESEC International (1:34) | `aiesec-first-president-interview.mp4` |
| Henkel Sales Manager talking to camera (1:34) | `henkel-manager-testimonial.mp4` |
| You presenting, French, ~2 min | `successor-role-explainer.mp4` |
| Brussels walk-and-talk with subtitles (0:57) | `brussels-member-story.mp4` |
| "Young Leaders Wanted" newspaper (0:15) | `young-leaders-newspaper.mp4` |
| Street activation, Brussels (0:26) | `street-activation-brussels.mp4` |
| Henkel Company Day motion graphic (0:16) | `henkel-company-day.mp4` |
| Black Friday exchange (0:10) | `black-friday-exchange.mp4` |
| Join AIESEC office / Be Change (0:16) | `join-aiesec-office.mp4` |

**Compress first.** Several files are 170–214 MB. That is far too heavy for a website.
Target: under 8 MB each. In CapCut or Premiere, export at 720x1280, H.264, ~2 Mbps.

If you have more successor videos, add them to `videoSection.items` in `content.ts`
using the same shape, and name them `successor-role-explainer-2.mp4`, `-3.mp4`, etc.

---

## 2. Posters → `public/media/posters/`

One still image per video, same name, `.jpg`. Pick a frame where a face or the text is visible.

```
aiesec-first-president-interview.jpg
henkel-manager-testimonial.jpg
successor-role-explainer.jpg
brussels-member-story.jpg
young-leaders-newspaper.jpg
street-activation-brussels.jpg
henkel-company-day.jpg
black-friday-exchange.jpg
join-aiesec-office.jpg
```

---

## 3. AI enablement → `public/media/ai/`

| What | File name |
|---|---|
| Cover slide of the Copilot deck | `copilot-deck-cover.jpg` |
| A strong slide from the deck | `copilot-slide-1.jpg` |
| A second slide | `copilot-slide-2.jpg` |
| Screenshot of an n8n workflow canvas | `n8n-workflow.jpg` |
| The prompt structure, as a slide or graphic | `prompt-framework.jpg` |

**Blur client names and logos before exporting.** The section already carries a
"Client-specific details removed" label, so redaction reads as professional, not evasive.

---

## 4. Design → `public/media/design/`

Screenshots you already sent, renamed:

| Screenshot | File name |
|---|---|
| Charte graphique: logo, palette, typography, icons | `lob-system.jpg` |
| Buttons and components | `lob-buttons.jpg` |
| Section 1 + 2: loading, sign-up, login | `lob-onboarding.jpg` |
| Section 3 + 4: get access, map search | `lob-maps.jpg` |
| Section 5 + 6: lost pet, adopt | `lob-report.jpg` |
| Section 7 + 8: food donation, profile | `lob-profile.jpg` |

Crop out the dark checkerboard background before exporting.

---

## 5. Campaigns → `public/media/campaigns/`

| What | File name |
|---|---|
| EY awareness post ("Even a baby step") | `ey-awareness.jpg` |
| EY conversion post ("Meet us today") | `ey-conversion.jpg` |
| Same as `ey-awareness.jpg`, used as the list thumbnail | `ey-cover.jpg` |
| Anything from the DHL partnership work | `dhl-cover.jpg` |
| Screenshot of the EXPA screening process or its guide | `screening-cover.jpg` |
| A photo from UNGA / SAP event / AIESEC International | `unga-cover.jpg` |

---

## 6. Text you must replace

Open `src/data/content.ts` and search for **"Replace this"**. Five places:

1. `aiSection` → Copilot → `outcome`
2. `aiSection` → n8n → `outcome`
3. `aiSection` → prompts → `outcome`
4. `campaignSection` → DHL → `action` (what you actually did to grow it)
5. `campaignSection` → EY → `outcome` + the two `—` metrics

Approximate numbers are fine. "Around 80 registrations" beats a dash.

---

## 7. If a file is missing

Delete that item from the array in `content.ts`. Nothing else breaks.
An empty section looks worse than a shorter one.
