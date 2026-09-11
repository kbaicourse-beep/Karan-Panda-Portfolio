# How To Add, Replace, Resize & Remove Images — No Coding Required

This is the one file to keep open whenever you want to swap a placeholder
for a real photo.

---

## Every image slot on the site already has a dummy file sitting in it

Every single image across every project and every blog post has an actual
placeholder JPG saved at its exact expected path — a labeled dark image
with the placeholder's name printed right on it, so you can open the file
and immediately see which slot it belongs to. **You never need to add a
`src` line in `data.js` — just replace the file.**

```
images/panda/                      ← every PANDA placeholder
images/rath-yatra/                 ← every Rath Yatra placeholder (21 of these are already real photos, pulled from your deck!)
images/pushpaj/                    ← every Pushpaj placeholder
images/masked-murders/             ← every Masked Murders placeholder
images/chilika-dairy/              ← every Chilika Dairy placeholder
images/blog-patachitra/            ← the Patachitra archive post
images/blog-building-this-site/    ← the "Building — And Rebuilding" post
```

Student Budget, Last Benthrite, and Grocery Wallet keep their images at
the site root (`images/`) instead of their own subfolder, but they're
real files too — the same swap-the-file method works identically.

**To replace any of them:**
1. Find the file — its filename matches the placeholder's label, so
   they're easy to spot by name.
2. Open it if you want to confirm which slot it is (the label is printed
   on the image itself).
3. Save your real photo over it with **the exact same filename**.
4. Hard-refresh the page (Ctrl/Cmd+Shift+R). Done.

No `data.js` editing required for any of this.

If you ever want to double-check which file a specific placeholder on the
page maps to, open `js/data.js`, search for the placeholder's visible
label, and the `src:` on that line is the file to replace.

---

## The one rule, if you ever do open `data.js`

**Every image is controlled by one `src: "images/..."` line.** Swap the
file at that path, or change the path to point somewhere else — either
works. The site always tries to load the real file first and only shows
the dashed "pending" box if that file is missing, so you can never end up
with a broken-image icon by accident.

---

## Part 1 — Removing an image (going back to a placeholder)

Delete the file from its folder — but since a dummy file already sits in
every slot, "empty" isn't really a state on this site anymore. If you
truly want the dashed placeholder box back instead of any image, open
`js/data.js`, find the line, and delete the `src: "..."` part entirely:

```js
// Before
{ type: "image", src: "images/panda/hero-visual.jpg", placeholder: "Hero visual" },

// After
{ type: "image", placeholder: "Hero visual" },
```

**To remove an image block entirely** (not just revert to a placeholder),
delete the whole `{ ... },` line — from its opening `{` to its closing
`},` and nothing else.

---

## Part 2 — Adding a brand-new image slot, anywhere you want

Open `data.js`, find a nearby image block, and add a new one right after
it in the same shape — pick your own filename and drop a photo there
whenever you like (or leave it as a placeholder for now):

```js
{ type: "image", src: "images/panda/one-more-screen.jpg", placeholder: "One More Screen" },
```

For a new slot inside an `imageGrid`, add another line inside its
`images: [ ... ]` list:

```js
{ src: "images/pushpaj/one-more-shot.jpg", placeholder: "One More Shot" },
```

The grid automatically makes room — no layout math needed.

---

## Part 3 — Sizing & cropping cheat sheet

You genuinely don't need to crop precisely — the site crops for you to
whatever shape the box is. Starting with roughly the right shape means
less gets cropped away, so your subject stays centred. Every dummy image
already sitting in its slot is sized to the shape that slot expects — if
you want to match that exactly, check the dummy file's own dimensions
(printed in the bottom-right corner of each one) before replacing it.

| Where it's used | Shape | Comfortable size to start from |
|---|---|---|
| App/portal prototype screens (`aspect: "393/852"`) | Tall, phone-shaped | A real phone screenshot — 393×852px or any multiple (e.g. 1179×2556) |
| Most case-study photos (`image`, `imageGrid` without `aspect`) | Landscape, roughly 16:10 | ~1600×1000px |
| Work-grid thumbnails (`thumbnail` field) | Landscape | ~1200×900px |
| About-page portrait | Tall portrait | ~900×1125px |
| Persona / art pieces / packaging shots | Tall portrait | ~900×1125px |
| Logo mark, icons, swatches | Square | ~800×800px |

If a photo comes out looking oddly cropped (e.g. someone's head cut off),
pick a version of the photo where the important part is more centred, or
nudge the crop yourself before uploading — the site can't selectively
re-crop for you.

---

## Quick troubleshooting

| What you see | What's wrong |
|---|---|
| Nothing changed after replacing a file | Hard-refresh (Ctrl/Cmd+Shift+R) — browsers cache images aggressively |
| Still showing the dummy placeholder image | The filename doesn't exactly match — copy it from the existing file rather than retyping it, including the extension (`.jpg` vs `.png`) |
| Photo looks stretched | Shouldn't happen — the site always crops, never stretches |
| Whole page goes blank (after editing `data.js` directly) | Almost always a missing comma or quote mark near your last edit — open the browser console (F12) and it'll name the exact line |

---

## If you'd rather skip all of this

You can also just tell me (in a future chat) which photo goes with which
placeholder — describe it or upload it — and I'll drop it in, size it
correctly, and hand you back the updated files.
