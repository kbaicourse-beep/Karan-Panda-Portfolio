/* ==========================================================================
   CASE-STUDY.JS — renders case-study.html?id=PROJECT_ID from PROJECTS
   in data.js. One template, reused for every project. Block rendering
   itself lives in js/blocks.js (shared with the Archive post template).
   ========================================================================== */

/**
 * Renders the opt-in "illustrated" hero: light gradient, CSS-drawn phone
 * mockup, floating problem-flag cards, layered typography. Used only when
 * a project sets caseStudy.heroLayout === "illustrated" — every other
 * case study keeps the plain hero untouched.
 */
function renderIllustratedHero(project, cs) {
  const flags = (cs.heroFlags || [])
    .map(
      (f) => `
      <div class="hero-flag">
        <span class="dot ${f.level || "info"}">${f.mark || "!"}</span>
        <span class="txt">${f.label}${f.stat ? `<span class="stat">${f.stat}</span>` : ""}</span>
      </div>`
    )
    .join("");

  const icons = (cs.heroIcons || []).map((i) => `<div class="hero-il-icon-chip">${i}</div>`).join("");

  const metaCols = cs.meta
    .map((m) => `<div><span class="m-label">${m.label}</span><span class="m-val">${m.val}</span></div>`)
    .join("");

  return `
    <div class="hero-illustrated-bg"></div>
    <div class="hero-illustrated-topbar">
      <a class="back-link" href="work.html">← Back to Work</a>
      <span class="hero-context">${cs.heroContext || `Case Study — ${cs.tag}`}</span>
    </div>
    <div class="hero-illustrated-grid wrap">
      <div class="hero-il-left">
        <div class="hero-il-wordmark">${project.title}</div>
        <div class="hero-il-progress"></div>
        <div class="hero-il-subtag">${cs.heroSubtag || ""}</div>
        <div class="hero-il-eyebrow"><span class="idx">${cs.indexLabel}</span> — ${cs.tag.toUpperCase()}</div>
        ${icons ? `<div class="hero-il-icon-row">${icons}</div>` : ""}
        <div class="hero-il-title">${project.title}</div>
        <div class="hero-il-tagline">${cs.tagline}</div>
      </div>
      <div class="hero-il-right">
        <div class="hero-phone">
          <div class="ph-topbar">
            <span class="ph-brand">${project.title.toLowerCase()}</span>
            <span class="ph-icons"><span class="ph-avatar"></span></span>
          </div>
          <div class="ph-greet">Hello Karan</div>
          <div class="ph-sub">Ready to print your next project?</div>
          <div class="ph-card">
            <div class="ph-tag">FAST · SIMPLE · SECURE</div>
            <div class="ph-line">Upload and print your documents in seconds.</div>
            <div class="ph-cta">Quick Print Now →</div>
          </div>
          <div class="ph-orders-head"><span>Orders</span><span>See All ›</span></div>
          <div class="ph-list-row">
            <span>Assignment.pdf · 12pg · Colour</span>
            <span class="ph-status">Printing</span>
          </div>
          <div class="ph-progress-track"></div>
        </div>
        <div class="hero-flags">${flags}</div>
      </div>
    </div>
    <div class="hero-il-meta">${metaCols}</div>
  `;
}

function renderCaseStudy() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const project = PROJECTS.find((p) => p.id === id) || PROJECTS[0];
  const cs = project.caseStudy;

  // "Coming Soon" projects aren't linked to anywhere in the UI, but if
  // someone still lands here directly (an old link, a search result),
  // send them back to Work instead of showing a case study that isn't
  // ready yet.
  if (project.comingSoon) {
    window.location.replace("work.html");
    return;
  }

  document.title = `${project.title} — Case Study — ${SITE.name}`;

  const heroPlain = document.getElementById("hero-plain");
  const heroIllustratedMount = document.getElementById("hero-illustrated-mount");
  const heroSection = document.getElementById("cs-hero-section");

  if (cs.heroLayout === "illustrated" && heroIllustratedMount) {
    if (heroPlain) heroPlain.style.display = "none";
    heroIllustratedMount.style.display = "";
    heroIllustratedMount.innerHTML = renderIllustratedHero(project, cs);
    if (heroSection) heroSection.classList.add("hero-illustrated");
  } else {
    // Default path — unchanged behaviour for every other case study.
    const heroBg = document.getElementById("hero-bg-img");
    if (heroBg) {
      if (cs.heroImage) {
        heroBg.src = cs.heroImage;
        heroBg.style.display = "";
        // Graceful fallback: if the file isn't there yet, hide the hero
        // background instead of showing a broken-image icon — same
        // auto-detect behaviour as every other image on the site.
        heroBg.onerror = () => { heroBg.style.display = "none"; };
      } else {
        heroBg.style.display = "none";
      }
    }

    const indexLabel = document.getElementById("cs-index-label");
    if (indexLabel) {
      indexLabel.innerHTML = `<span style="color:var(--accent)">${cs.indexLabel}</span> <span style="color:var(--t-60)">— ${cs.tag.toUpperCase()}</span>`;
    }

    const title = document.getElementById("cs-title");
    if (title) title.textContent = project.title.toUpperCase();

    const tagline = document.getElementById("cs-tagline");
    if (tagline) tagline.textContent = cs.tagline;

    const meta = document.getElementById("cs-meta");
    if (meta) {
      meta.innerHTML = cs.meta
        .map((m) => `<div><span class="m-label">${m.label}</span><span class="m-val">${m.val}</span></div>`)
        .join("");
    }
  }

  const blocksMount = document.getElementById("cs-blocks");
  if (blocksMount) {
    const built = extractNavSections(cs.blocks, BLOCK_RENDERERS);
    blocksMount.innerHTML = `<div class="wrap">${built.html}</div>`;
    buildTocRail(built.navSections);
    initSizingCalculators(blocksMount);
  }

  // Next project — whichever one comes after this in PROJECTS (wraps around).
  // The card's background is that next project's own hero image, pulled
  // live from its caseStudy.heroImage — change that image and this teaser
  // updates automatically, no separate image to keep in sync.
  const idx = PROJECTS.findIndex((p) => p.id === project.id);
  const next = PROJECTS[(idx + 1) % PROJECTS.length];
  const nextMount = document.getElementById("next-project");
  if (nextMount && next) {
    const nextHero = next.caseStudy.heroImage || next.thumbnail;
    nextMount.innerHTML = `
      <a href="case-study.html?id=${next.id}" class="next-project-card" data-transition>
        <div class="next-bg"><img src="${nextHero}" alt="" loading="lazy" onerror="this.style.display='none';"></div>
        <div class="next-project-inner">
          <div class="label">Next Project</div>
          <h3>${next.title}</h3>
          <span class="btn">View Case Study
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M7 17L17 7M17 7H8M17 7V16"/></svg>
          </span>
        </div>
      </a>
    `;
  }

  initReveal();
  initCounters();
  initReadingProgress();
}

document.addEventListener("DOMContentLoaded", renderCaseStudy);
