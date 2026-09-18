/* ==========================================================================
   BLOCKS.JS — shared long-form content renderer.
   Used by both case-study.js (Work) and archive-post.js (Archive blog
   posts) so both templates draw from one set of block types. See the
   reference list at the bottom of js/data.js for every block type and its
   fields.
   ========================================================================== */

function paragraphs(text = "") {
  return text
    .split("\n\n")
    .map((p) => `<p>${p}</p>`)
    .join("");
}

/**
 * Renders an image OR — when no src is given yet — a clearly-labelled
 * placeholder box, so pages can be laid out before real images exist.
 * Once you have the image, just add a "src" field to that block in
 * data.js; the placeholder disappears automatically.
 */
/**
 * Renders an image OR — when no src is given, or the src fails to load —
 * a clearly-labelled placeholder box, so pages can be laid out before
 * real images exist. This is the auto-detect mechanism: once a block has
 * a "src" pointing at a path, the browser tries to load it; if the file
 * isn't there yet, it silently falls back to the placeholder box instead
 * of a broken-image icon. Drop a correctly-named file at that exact path
 * and it appears automatically on next refresh — no code edits needed.
 * See IMAGES-GUIDE.md for the naming convention.
 */
function renderMedia({ src, placeholder, tag, caption, alt, aspect, maxWidth }) {
  const styles = [];
  if (aspect) styles.push(`aspect-ratio:${aspect}`);
  if (maxWidth) styles.push(`max-width:${maxWidth}px`, `margin-left:auto`, `margin-right:auto`);
  const aspectStyle = styles.length ? ` style="${styles.join(";")}"` : "";
  const placeholderBox = `
    <div class="cs-placeholder"${src ? ' style="display:none"' : ""}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>
      <span>${placeholder || "Image pending"}</span>
    </div>`;
  const img = src
    ? `<img src="${src}" alt="${alt || caption || ""}" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">`
    : "";
  const tagHtml = tag ? `<span class="cs-tag">${tag}</span>` : "";
  const captionHtml = !tag && caption ? `<div class="cs-caption">${caption}</div>` : "";
  return `<div class="cs-media"${aspectStyle}>${img}${placeholderBox}${tagHtml}</div>${captionHtml}`;
}

const BLOCK_RENDERERS = {
  twoColText(b) {
    const hasBody = b.body && b.body.trim().length;
    return `
      <div class="cs-block cs-two-col${hasBody ? "" : " cs-two-col-heading-only"}">
        <div><div class="idx">${b.index || ""}</div><h2>${b.heading}</h2></div>
        ${hasBody ? `<div class="body">${paragraphs(b.body)}</div>` : ""}
      </div>`;
  },

  image(b) {
    return `<div class="cs-block">${renderMedia(b)}</div>`;
  },

  imageGrid(b) {
    const cols = b.cols || 2;
    const gap = b.gap != null ? b.gap : 20;
    return `
      <div class="cs-block">
        <div class="cs-image-grid" style="grid-template-columns:repeat(${cols},1fr);gap:${gap}px">
          ${b.images.map((img) => `<div>${renderMedia({ aspect: b.aspect, ...img })}</div>`).join("")}
        </div>
      </div>`;
  },

  quote(b) {
    return `
      <div class="cs-block cs-quote">
        <blockquote>&ldquo;${b.text}&rdquo;</blockquote>
      </div>`;
  },

  statGrid(b) {
    return `
      <div class="cs-block">
        ${b.heading ? `<div class="cs-stats-head">${b.heading}</div>` : ""}
        <div class="cs-stat-grid">
          ${b.stats
            .map((s) => `<div class="cs-stat"><div class="val">${s.value}</div><div class="lab">${s.label}</div></div>`)
            .join("")}
        </div>
      </div>`;
  },

  personaGrid(b) {
    return `
      <div class="cs-block">
        ${b.heading ? `<div class="cs-persona-head">${b.heading}</div>` : ""}
        <div class="cs-persona-grid">
          ${b.people
            .map(
              (p) => `
            <div class="persona-card">
              <div class="name">${p.name}</div>
              <div class="role">${p.role}</div>
              <div class="bio">${p.bio}</div>
            </div>`
            )
            .join("")}
        </div>
      </div>`;
  },

  hmw(b) {
    return `
      <div class="cs-block cs-hmw">
        <h2>${b.heading}</h2>
        <ul>${b.items.map((i) => `<li>${i}</li>`).join("")}</ul>
      </div>`;
  },

  evolution(b) {
    return `
      <div class="cs-block cs-evolution">
        <h2>${b.heading}</h2>
        <div class="evo-stages">
          ${b.stages
            .map(
              (s, i) => `
            <div class="evo-stage">
              <div class="n">${s.marker || `0${i + 1}`}</div>
              <div><div class="t">${s.title}</div><div class="b">${s.body}</div></div>
            </div>`
            )
            .join("")}
        </div>
      </div>`;
  },

  challenges(b) {
    return `
      <div class="cs-block cs-challenges">
        <h2>${b.heading}</h2>
        ${b.sub ? `<div class="sub3">${b.sub}</div>` : ""}
        <div class="chal-grid">
          ${b.items
            .map(
              (c, i) => `
            <div class="chal-card">
              <div class="n">${c.label || `Challenge 0${i + 1}`}</div>
              <div class="q">${c.q}</div>
              <div class="a">${c.a}</div>
            </div>`
            )
            .join("")}
        </div>
      </div>`;
  },

  calloutMedia(b) {
    return `
      <div class="cs-block">
        <div style="text-align:center;margin-bottom:40px;">
          ${b.eyebrow ? `<div class="eyebrow">${b.eyebrow}</div>` : ""}
          <h2 style="font-size:clamp(24px,5vw,44px);font-weight:900;text-transform:uppercase;margin-top:10px;">${b.heading}</h2>
        </div>
        <div class="cs-callouts">
          <div class="callout-col">
            ${b.left.map((c) => `<div class="callout"><div class="n">${c.n}</div><div class="b">${c.b}</div></div>`).join("")}
          </div>
          <div class="center-media">${renderMedia({ src: b.media, placeholder: b.mediaPlaceholder })}</div>
          <div class="callout-col right">
            ${b.right.map((c) => `<div class="callout"><div class="n">${c.n}</div><div class="b">${c.b}</div></div>`).join("")}
          </div>
        </div>
      </div>`;
  },

  /* ---- new block types ---- */

  // A row of image+title+body cards. Good for "five moments", concept
  // tiles, or any small collection that's better browsed side-by-side
  // than read as a stacked list.
  cardGrid(b) {
    const cols = b.cols || 3;
    return `
      <div class="cs-block">
        <div class="cs-card-grid-head">
          ${b.heading ? `<h2>${b.heading}</h2>` : ""}
          ${b.intro ? `<div class="intro">${b.intro}</div>` : ""}
        </div>
        <div class="cs-card-grid" style="grid-template-columns:repeat(${cols},1fr)">
          ${b.items
            .map(
              (c) => `
            <div class="cs-card ${!c.src && !c.placeholder ? "no-media" : ""}">
              ${c.src || c.placeholder ? renderMedia(c) : ""}
              <div>
                <div class="ct-title">${c.title}</div>
                ${c.body ? `<div class="ct-body">${c.body}</div>` : ""}
                ${c.note ? `<div class="ct-note">${c.note}</div>` : ""}
                ${c.noteBody ? `<div class="ct-note-body">${c.noteBody}</div>` : ""}
              </div>
            </div>`
            )
            .join("")}
        </div>
      </div>`;
  },

  // Colour swatch cards — chip, name, hex, one-line source/description.
  swatchGrid(b) {
    return `
      <div class="cs-block">
        ${b.heading ? `<div class="cs-card-grid-head"><h2>${b.heading}</h2>${b.intro ? `<div class="intro">${b.intro}</div>` : ""}</div>` : ""}
        <div class="cs-swatch-grid">
          ${b.swatches
            .map(
              (s) => `
            <div class="cs-swatch">
              <div class="chip" style="background:${s.hex}"></div>
              <div class="info">
                <div class="name">${s.name}</div>
                ${s.hex ? `<div class="hex">${s.hex}</div>` : ""}
                ${s.label ? `<div class="lab">${s.label}</div>` : ""}
              </div>
            </div>`
            )
            .join("")}
        </div>
      </div>`;
  },

  // Small word/label pills — brand values, personality tags, etc.
  tagPills(b) {
    return `
      <div class="cs-block">
        ${b.heading ? `<div class="cs-pills-head">${b.heading}</div>` : ""}
        <div class="cs-pills">${b.tags.map((t) => `<span class="cs-pill">${t}</span>`).join("")}</div>
      </div>`;
  },

  // Personality-mapping sliders: label — track+dot — label.
  sliderRow(b) {
    return `
      <div class="cs-block">
        ${b.heading ? `<div class="cs-pills-head" style="text-align:center;">${b.heading}</div>` : ""}
        <div class="cs-sliders">
          ${b.sliders
            .map(
              (s) => `
            <div class="cs-slider-row">
              <span class="lab">${s.left}</span>
              <div class="cs-slider-track"><span class="cs-slider-dot" style="left:${s.value}%"></span></div>
              <span class="lab right">${s.right}</span>
            </div>`
            )
            .join("")}
        </div>
      </div>`;
  },

  // Label:value spec strip — e.g. package benchmark measurements.
  defList(b) {
    return `
      <div class="cs-block">
        ${b.heading ? `<div class="cs-card-grid-head"><h2>${b.heading}</h2>${b.intro ? `<div class="intro">${b.intro}</div>` : ""}</div>` : ""}
        <div class="cs-deflist">
          ${b.items.map((i) => `<div class="item"><div class="label">${i.label}</div><div class="value">${i.value}</div></div>`).join("")}
        </div>
      </div>`;
  },

  // Big, bold, centred accent-coloured statement — mission lines,
  // pull-quotes, and closing reflections that need more weight than the
  // regular "quote" block.
  bigStatement(b) {
    return `
      <div class="cs-block cs-big-statement">
        ${b.eyebrow ? `<span class="eyebrow">${b.eyebrow}</span>` : ""}
        <p>${b.text}</p>
        ${b.cite ? `<span class="cite">${b.cite}</span>` : ""}
      </div>`;
  },

  // Small highlighted callout box — a single noteworthy fact.
  noteBox(b) {
    return `
      <div class="cs-block">
        <div class="cs-notebox">
          ${b.label ? `<span class="label">${b.label}</span>` : ""}
          <p>${b.text}</p>
        </div>
      </div>`;
  },

  // Full-bleed colour/illustration band with paired text — used to break
  // up long stretches of stacked text-only sections with atmosphere.
  colorBand(b) {
    return `
      <div class="cs-colorband ${b.reverse ? "reverse" : ""}">
        <div class="cs-colorband-inner">
          <div class="cb-media">${renderMedia({ src: b.image, placeholder: b.imagePlaceholder })}</div>
          <div class="cb-text">
            ${b.eyebrow ? `<div class="eyebrow">${b.eyebrow}</div>` : ""}
            <h2>${b.heading}</h2>
            <div class="body">${paragraphs(b.body)}</div>
            ${b.note ? `<div class="cs-notebox" style="margin-top:24px;">${b.noteLabel ? `<span class="label">${b.noteLabel}</span>` : ""}<p>${b.note}</p></div>` : ""}
          </div>
        </div>
      </div>`;
  },

  // Standalone placeholder slot, for a pending image not tied to any
  // other block (e.g. a full-width hero image still to come).
  placeholder(b) {
    return `<div class="cs-block">${renderMedia({ placeholder: b.label })}</div>`;
  },

  // A big, centred outbound call-to-action — e.g. "Play the game" linking
  // to an external build. Reuses the site's existing .btn styling so it
  // matches every other button on the site with no new visual language.
  ctaLink(b) {
    return `
      <div class="cs-block cs-cta-link">
        <a class="btn btn-accent" href="${b.href}" target="_blank" rel="noopener">${b.label}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M7 17L17 7M17 7H8M17 7V16"/></svg>
        </a>
        ${b.sub ? `<div class="cs-cta-sub">${b.sub}</div>` : ""}
      </div>`;
  },

  // An actually-playable embed, right inside the case study — a phone-style
  // frame wrapping an iframe pointed at a self-contained HTML game (or any
  // playable build). No click-through required to try it.
  gameEmbed(b) {
    return `
      <div class="cs-block cs-game-embed">
        <div class="game-frame">
          <div class="game-frame-notch"></div>
          <iframe src="${b.src}" title="${b.title || "Playable demo"}" loading="lazy" allow="autoplay; fullscreen" allowfullscreen></iframe>
        </div>
        ${b.caption ? `<div class="cs-caption">${b.caption}</div>` : ""}
      </div>`;
  },

  // A connective paragraph (or two) with no new heading — used between
  // component blocks within the same section, so the section header
  // doesn't have to repeat every time the copy continues.
  textBlock(b) {
    return `
      <div class="cs-block cs-text-block">
        <div class="body ${b.lede ? "lede" : ""}">${paragraphs(b.body)}</div>
      </div>`;
  },

  // A large, centred placeholder standing in for a video (a full
  // click-through walkthrough, a motion prototype, etc.) rather than a
  // static image — a bigger frame with a play affordance instead of the
  // plain "image pending" box. aspect defaults to a phone screen.
  // If a "src" is given, a real dummy .mp4 already sits at that path (see
  // IMAGES-GUIDE.md) — swap that file for your real video, same filename,
  // and it plays right here automatically.
  videoPlaceholder(b) {
    const aspect = b.aspect || "393/852";
    const hasSrc = !!b.src;
    const frameStyle = `aspect-ratio:${aspect}${b.maxWidth ? `;width:min(${b.maxWidth}px, 92%)` : ""}`;
    return `
      <div class="cs-block cs-video-placeholder">
        <div class="cs-video-frame" style="${frameStyle}">
          ${hasSrc ? `<video src="${b.src}" controls playsinline preload="metadata" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"></video>` : ""}
          <div class="cs-video-fallback"${hasSrc ? ' style="display:none"' : ""}>
            <span class="cs-video-play">▶</span>
          </div>
        </div>
        <div class="cs-video-caption">${b.label || "Video pending"}</div>
      </div>`;
  },

  // A live, interactive calculator: drag a slider for viewing distance,
  // watch the required letter height (and a scaled sample letter) update
  // in real time. legibleDistance ≈ letterHeight × factor.
  sizingCalculator(b) {
    const factor = b.factor || 0.3;
    const min = b.min || 3;
    const max = b.max || 30;
    const start = b.start || 12;
    return `
      <div class="cs-block cs-sizing-calc">
        ${b.heading ? `<h2>${b.heading}</h2>` : ""}
        ${b.body ? `<div class="intro">${paragraphs(b.body)}</div>` : ""}
        <div class="sc-widget" data-factor="${factor}">
          <div class="sc-visual">
            <span class="sc-letter" id="sc-letter">A</span>
            <div class="sc-baseline"></div>
          </div>
          <div class="sc-controls">
            <label for="sc-range">Reading distance</label>
            <input type="range" id="sc-range" min="${min}" max="${max}" step="1" value="${start}">
            <div class="sc-readout">
              <div><span class="sc-num" id="sc-distance">${start}</span><span class="sc-unit">m away</span></div>
              <span class="sc-eq">≈</span>
              <div><span class="sc-num" id="sc-height">${Math.round(start * factor * 100)}</span><span class="sc-unit">mm caps</span></div>
            </div>
          </div>
        </div>
      </div>`;
  },
};
