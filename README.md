# Karan Panda — Portfolio Website

A fast, static, dark-themed portfolio site matching your Figma design. No
build tools, no database, no backend — just HTML, CSS and JavaScript. It
works by opening `index.html` in a browser, and it's built so **you can
change every piece of text, every image, and every project by editing one
file: `js/data.js`.**

---

## 1. How the site is organized

```
site/
├── index.html            Home page
├── work.html              Work grid (filters: All / Product Design·UX / Branding / Illustrations)
├── about.html             About page
├── case-study.html        ONE template used for every case study — the project
│                           shown depends on the link, e.g. case-study.html?id=student-budget
├── css/style.css          All colors, fonts, spacing (design tokens at the top)
├── js/data.js             ⭐ ALL YOUR CONTENT LIVES HERE — text, images, projects
├── js/main.js              Nav + footer + mail-me link (no editing needed)
├── js/home.js, work.js, about.js, case-study.js   Page logic (no editing needed)
├── images/                 All image files, already cropped from your Figma exports
└── assets/resume.pdf       Your downloadable resume
```

You will basically only ever open **`js/data.js`**. Everything else is
"plumbing" that reads from it.

---

## 2. How to edit text

Open `js/data.js` in any text editor (Notepad, VS Code, TextEdit, even
Google Docs' plain-text mode — just keep the `.js` extension).

The file is split into clearly labeled sections:

- **`SITE`** → your name, email, resume file path, nav links, LinkedIn/Behance/Read.cv URLs.
- **`HOME`** → homepage hero text, which projects are featured and in what order, the archive strip.
- **`ABOUT`** → every line of text on the About page (bio, hobbies, games, art captions, honors).
- **`PROJECTS`** → an array (list) of every project, each one a `{ ... }` block, including its full case study.

To change a headline, find the matching quoted text and replace it, e.g.:

```js
heading: "Products are only one part of who I am.",
```

becomes

```js
heading: "Design is one part of who I am.",
```

**Keep the quotation marks** and the comma at the end of the line — those are
what make it valid code. Text wrapped in `**double asterisks**` (like in
`HOME.heroTagline`) renders in the cyan accent colour — keep the asterisks
around whatever word you want highlighted.

If you're ever unsure whether you broke something, just open `index.html`
in your browser (see "Viewing it locally" below) — a blank page or a page
missing content usually means a quote mark or comma is missing somewhere
near your last edit. Browser DevTools (F12 → Console) will name the exact
line.

---

## 3. How to change images

1. Put your new image file in the `images/` folder.
2. In `js/data.js`, find the field pointing at the old image, e.g.:
   ```js
   thumbnail: "images/proj-student-budget.jpg",
   ```
3. Change it to your new filename:
   ```js
   thumbnail: "images/my-new-cover.jpg",
   ```

No resizing tool needed — the CSS crops/scales images automatically to fit
each layout (`object-fit: cover`), so any reasonably-sized photo will work.

**About the images already in `/images`:** most were cropped directly from
the Figma screenshots you uploaded (your portrait, your artwork, the 8 work
thumbnails, the Chilika Dairy packaging shots, The Last Benthrite character
art). A few are original placeholders I generated instead of real assets:

- `images/game-cover-1.jpg` / `game-cover-2.jpg` — stand-ins for Mortal
  Kombat 1 / Marvel's Spider-Man. I couldn't use the real box art since
  that's Warner Bros./Marvel-owned artwork, not yours to publish. Swap in
  your own screenshot any time by replacing the file (or pointing
  `ABOUT.games.favorites[].cover` at a new one).
- `images/game-icon-1.jpg` / `game-icon-2.jpg` — stand-ins for the Clash
  Royale / Clash of Clans app icons (Supercell-owned artwork), same reasoning.
- `images/archive-*.jpg` — simple placeholder tiles for the three "Archive"
  blog-post teasers on the homepage, since those posts don't exist yet.

Everything else (your portrait, your illustrations, your branding work, your
game-jam art, all 8 project thumbnails) is real, cropped from your own files.

---

## 4. How to add, remove, or reorder a project

Open `js/data.js` and scroll to the `PROJECTS` array. Each project is a
block that starts like this:

```js
{
  id: "student-budget",              // unique, used in the URL
  title: "Student Budget",
  category: "Product Design / UX",   // controls which filter pill it shows under on the Work page
  badge: "Case Study",               // small tag shown on the thumbnail: [CASE STUDY]
  eyebrow: "Financial Wellness App",
  description: "One or two sentence summary shown on the Work grid.",
  thumbnail: "images/proj-student-budget.jpg",
  year: "2025",
  tall: false,                       // true = taller card on the Work grid (for portrait images)
  caseStudy: { ... the full case study page content ... }
},
```

`category` must be exactly one of `"Product Design / UX"`, `"Branding"`, or
`"Illustrations"` to match the filter pills on the Work page. `badge` can be
anything — it's just the small label on the thumbnail (`Case Study`,
`Branding`, `Illustration`, `Publication`, etc.).

- **To add a project:** copy an entire block (from its opening `{` to the
  closing `},`), paste it anywhere in the list, give it a new unique `id`,
  and update the fields.
- **To remove a project:** delete its whole block (opening `{` to closing `},`).
- **To reorder on the Work page:** cut and paste blocks up/down — the grid
  follows this order automatically.
- **To feature a project on the homepage:** add its `id` to
  `HOME.featuredProjectIds` (order there = order on the homepage). The
  **last** id in that list renders as the large banner-style row — keep
  that one for whichever project has the widest hero image.

---

## 5. How case studies work (the flexible part)

Each project has a `caseStudy.blocks` array — a list of sections stacked
top to bottom. You can mix, reorder, add, or delete these freely, and the
page updates instantly. Available block types (copy/paste and edit — a
copy of this list is also at the bottom of `js/data.js`):

```js
{ type: "twoColText", index: "01 / Context", heading: "Overview", body: "Paragraph one.\n\nParagraph two." }
{ type: "image", src: "images/x.jpg", caption: "Optional caption" }
{ type: "imageGrid", cols: 2, images: [{ src: "images/a.jpg", caption: "" }, { src: "images/b.jpg" }] }
{ type: "quote", text: "A short pull-quote." }
{ type: "statGrid", heading: "Optional heading", stats: [{ value: "65%", label: "Improvement" }] }
{ type: "personaGrid", heading: "Meet our users", people: [{ name: "Ananya Rao", role: "Design Student", bio: "..." }] }
{ type: "hmw", heading: "HMW", items: ["How might we...", "How might we..."] }
{ type: "evolution", heading: "Design Evolution", stages: [{ title: "Wireframe", body: "..." }] }
{ type: "challenges", heading: "Visual Challenges", sub: "optional sub-line", items: [{ q: "Question?", a: "Answer." }] }
{ type: "calloutMedia", eyebrow: "The Hero Revealed", heading: "Final Character Design", media: "images/x.jpg", left: [{n:"01. Label", b:"..."}], right: [{n:"02. Label", b:"..."}] }
```

Each `caseStudy` also has its own hero fields — edit these to change the
banner at the top of the case-study page:

```js
caseStudy: {
  tag: "Case Study",                 // small label above the title
  indexLabel: "[01]",
  tagline: "One sentence under the title.",
  heroImage: "images/xxx.jpg",       // big background image behind the title
  meta: [                            // the 3–4 columns under the title (Role / Tools / Duration / etc.)
    { label: "Role", val: "Product Designer" },
  ],
  blocks: [ ... ],
}
```

The "Next Project" section at the bottom of every case study is automatic —
it always links to whichever project comes next in the `PROJECTS` array
(wrapping back to the first one at the end), so you never have to set it
manually.

---

## 6. The "Mail Me" button and email

Every "Mail Me" button and the footer email link both open the visitor's
email app addressed to **kcreate.work@gmail.com** (a `mailto:` link — this
is standard web behaviour, not something the site can control further; which
app opens depends on the visitor's own device settings). To change the
address everywhere at once, edit one line near the top of `js/data.js`:

```js
email: "kcreate.work@gmail.com",
```

---

## 7. Viewing it on your computer

Because the pages load `js/data.js` with JavaScript, some browsers block
this when you just double-click `index.html` (a "CORS" restriction on
`file://` links). If pages look empty:

- **Easiest fix:** use VS Code with the free "Live Server" extension →
  right-click `index.html` → "Open with Live Server."
- **Or, from a terminal**, inside the `site` folder run:
  ```
  python3 -m http.server 8000
  ```
  then open `http://localhost:8000` in your browser.

---

## 8. Putting it online (so you can send the link to companies)

You don't need a paid host — this is a static site, so any of these work
and are free:

**Netlify (easiest)**
1. Go to netlify.com → sign up → drag the whole `site` folder onto the
   "Deploy manually" box on your dashboard.
2. You'll get a live URL in ~10 seconds (you can rename it, and later add a
   custom domain like `karanpanda.com`).

**GitHub Pages**
1. Create a new GitHub repository, upload all the files in `site/`.
2. Go to Settings → Pages → set the source to your main branch.
3. Your site is live at `https://yourusername.github.io/reponame`.

**Vercel** works the same drag-and-drop way as Netlify.

Any time you edit `js/data.js` afterward, just re-upload/re-drag the folder
(or push to GitHub) to update the live site.

---

## 9. Quick troubleshooting

| Problem | Likely cause |
|---|---|
| Page loads but content is missing | Check the browser console (F12 → Console tab) for a red error — it usually names the exact line in `data.js` |
| "Mail me" doesn't open your email app | That's your device's default mail app setting, not the site — it triggers a standard `mailto:` link to kcreate.work@gmail.com |
| Images not showing | Check the filename in `data.js` exactly matches the file in `/images`, including capitalization and extension |
| Changes not appearing after edit | Hard-refresh the browser (Ctrl/Cmd + Shift + R) — browsers cache files aggressively |
| A project's filter pill looks wrong on the Work page | Check `category` is spelled exactly `"Product Design / UX"`, `"Branding"`, or `"Illustrations"` |

---

## 10. Things worth doing next

- Swap in your real LinkedIn and Read.cv URLs — they're placeholders (`"#"`) in `SITE.links` right now. Behance is already filled in.
- Replace the two game-cover placeholders and two game-icon placeholders (see section 3) with your own screenshots if you'd like real imagery there instead of abstract tiles.
- The four case studies for Cavendish Learning, AI Story Explorations, Verse Quarterly and Urban Rhythm are intentionally lighter (they didn't have full Figma case-study screens to pull from) — flesh them out with more blocks any time using the reference in section 5.

---

Built for **Karan Panda** — kcreate.work@gmail.com
