/* ==========================================================================
   HOME.JS — renders index.html from HOME + PROJECTS in data.js
   ========================================================================== */

function findProject(id) {
  return PROJECTS.find((p) => p.id === id);
}

function renderFeaturedRow(project, index, isBanner) {
  const idxLabel = `[0${index + 1}]`;
  const cs = project.caseStudy;

  if (isBanner) {
    const bannerCta = project.comingSoon
      ? `<span class="btn is-disabled" aria-disabled="true"><strong>Coming Soon</strong></span>`
      : `<a class="btn" href="case-study.html?id=${project.id}">View Case Study
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M7 17L17 7M17 7H8M17 7V16"/></svg>
        </a>`;
    return `
      <div class="feat-banner ${project.comingSoon ? "is-coming-soon" : ""}">
        <div class="feat-banner-top">
          <span class="tag">${project.badge || "Case Study"}</span>
          <span class="rule"></span>
          <span class="year">${project.year}</span>
          <span style="margin-left:auto" class="year">Case Study — ${idxLabel}</span>
        </div>
        <div class="feat-banner-media" style="background-image:url('${cs.heroImage}'); background-position: ${cs.heroImagePosition || "center"};">
          <div class="feat-banner-content">
            <h3>${project.title.toUpperCase()}</h3>
            ${bannerCta}
          </div>
        </div>
        <div class="feat-banner-meta">
          ${cs.meta.slice(0, 4).map((m) => `<div><span class="label">${m.label}</span><span class="val">${m.val}</span></div>`).join("")}
        </div>
      </div>
    `;
  }

  const outcome = project.homeOutcome || { label: "Outcome", stat: null, text: project.description };

  const media = project.mediaGroup
    ? `<div class="feat-media-group">
        <div class="g-tall"><img src="${project.mediaGroup[0]}" alt="${project.title}" loading="lazy"></div>
        <div class="g-stack">
          <div><img src="${project.mediaGroup[1]}" alt="${project.title} mark" loading="lazy"></div>
          <div><img src="${project.mediaGroup[2]}" alt="${project.title} lockup" loading="lazy"></div>
        </div>
      </div>`
    : `<div class="feat-media"><img src="${project.thumbnail}" alt="${project.title}" loading="lazy"></div>`;

  const cta = project.comingSoon
    ? `<span class="btn is-disabled" aria-disabled="true"><strong>Coming Soon</strong></span>`
    : `<a class="btn" href="case-study.html?id=${project.id}">View Case Study
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M7 17L17 7M17 7H8M17 7V16"/></svg>
      </a>`;

  return `
    <div class="feat-row ${index % 2 === 1 ? "reverse" : ""} ${project.comingSoon ? "is-coming-soon" : ""}">
      ${media}
      <div>
        <div class="feat-tagrow">
          <span class="idx">${idxLabel}</span>
          <span class="rule"></span>
          <span class="tag ${project.comingSoon ? "tag-coming-soon" : ""}">${project.comingSoon ? "<strong>Coming Soon</strong>" : (project.badge || "Case Study")}</span>
        </div>
        <h3 class="feat-title">${project.title}</h3>
        <div class="feat-outcome">
          <span class="label">${outcome.label}</span>
          <p>${outcome.stat ? `<span class="stat">${outcome.stat}</span>` : ""}${outcome.text}</p>
        </div>
        ${cta}
      </div>
    </div>
  `;
}

/**
 * The interactive "Try It — PANDA, Live" phone demo in the hero. Three
 * tap states walk through a print order end to end, each showing a real
 * screen from the V1 app. Auto-advances once, gently, until the person
 * taps a stage themselves — then it stops assuming and just responds.
 */
const APP_DEMO_STATES = {
  upload: {
    caption: "Tap a stage to see how a print order moves through PANDA, end to end.",
    image: "images/panda-print/PANDA-09-V1-APP-HOME-FLASH.jpg",
    alt: "PANDA app home screen — Quick Print Now",
  },
  print: {
    caption: "Once it's queued, PANDA shows live wait times instead of leaving you guessing at the shop.",
    image: "images/panda-print/PANDA-11-V1-APP-ORDER-UPLOAD.jpg",
    alt: "PANDA app live order tracking — printing in progress",
  },
  ready: {
    caption: "Pickup confirmation — no more standing in line to ask if it's done yet.",
    image: "images/panda-print/PANDA-13-V1-APP-LIVE-ORDER.jpg",
    alt: "PANDA app order ready for collection — QR code",
  },
};

function initHeroAppDemo() {
  const screen = document.getElementById("app-screen");
  const caption = document.getElementById("app-demo-caption");
  const tabsWrap = document.getElementById("app-tabs");
  if (!screen || !tabsWrap) return;

  const order = ["upload", "print", "ready"];
  let current = 0;
  let autoTimer = null;
  let userInteracted = false;

  function setState(key) {
    const state = APP_DEMO_STATES[key];
    if (!state) return;
    screen.style.opacity = "0";
    setTimeout(() => {
      screen.innerHTML = `<img src="${state.image}" alt="${state.alt}" loading="lazy">`;
      screen.style.opacity = "1";
    }, 150);
    if (caption) caption.textContent = state.caption;
    tabsWrap.querySelectorAll(".app-tab").forEach((t) => t.classList.toggle("is-active", t.dataset.state === key));
    current = order.indexOf(key);
  }

  function autoAdvance() {
    if (userInteracted) return;
    current = (current + 1) % order.length;
    setState(order[current]);
  }

  tabsWrap.addEventListener("click", (e) => {
    const btn = e.target.closest(".app-tab");
    if (!btn) return;
    userInteracted = true;
    clearInterval(autoTimer);
    setState(btn.dataset.state);
  });

  setState("upload");
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    autoTimer = setInterval(autoAdvance, 3200);
  }
}

function renderHome() {
  const heroName = document.getElementById("hero-name");
  const heroTagline = document.getElementById("hero-tagline");
  const heroCta = document.getElementById("hero-cta");
  if (heroName) heroName.textContent = HOME.heroName;
  if (heroTagline) heroTagline.innerHTML = mdAccent(HOME.heroTagline.toUpperCase());
  if (heroCta) heroCta.textContent = HOME.heroCta;

  const rows = document.getElementById("featured-rows");
  if (rows) {
    rows.innerHTML = HOME.featuredProjectIds
      .map((id, i) => {
        const project = findProject(id);
        if (!project) return "";
        const isBanner = i === HOME.featuredProjectIds.length - 1 && HOME.featuredProjectIds.length > 2;
        return `<div class="reveal" style="--reveal-delay:${Math.min(i, 3) * 0.06}s">${renderFeaturedRow(project, i, isBanner)}</div>`;
      })
      .join("");
  }

  const ctaHeading = document.getElementById("cta-heading");
  const ctaBtn = document.getElementById("cta-btn");
  if (ctaHeading) ctaHeading.innerHTML = mdAccent(HOME.ctaHeading.toUpperCase());
  if (ctaBtn) ctaBtn.textContent = HOME.ctaButton;

  const archiveHeading = document.getElementById("archive-heading");
  const archiveGrid = document.getElementById("archive-grid");
  if (archiveHeading) archiveHeading.textContent = HOME.archiveHeading;
  const archiveTagEl = document.querySelector(".archive-strip .archive-head .tag");
  if (!archiveTagEl && archiveHeading) {
    archiveHeading.insertAdjacentHTML("beforebegin", "");
  }
  if (archiveGrid) {
    archiveGrid.innerHTML = HOME.archive
      .map(
        (a, i) => `
        <a class="archive-item reveal" style="--reveal-delay:${i * 0.08}s" href="${a.href}">
          <div class="thumb">${
            a.placeholder
              ? `<div class="thumb-placeholder"><span></span></div>`
              : `<img src="${a.image}" alt="${a.title}" loading="lazy">`
          }${a.isNew ? `<span class="new-badge">New</span>` : ""}<div class="a-overlay"><span>${a.title}</span></div></div>
          <div class="meta"><span class="t">${a.title}</span><span class="k">${a.tag}</span></div>
        </a>
      `
      )
      .join("");
  }

  // Wrap the archive heading + tag in a flex head row to match the design.
  const archiveSection = document.querySelector(".archive-strip .wrap") || document.querySelector(".archive-strip");
  if (archiveHeading && !archiveHeading.closest(".archive-head")) {
    const head = document.createElement("div");
    head.className = "archive-head";
    archiveHeading.parentNode.insertBefore(head, archiveHeading);
    head.appendChild(archiveHeading);
    const tagSpan = document.createElement("span");
    tagSpan.className = "tag";
    tagSpan.textContent = HOME.archiveTag;
    head.appendChild(tagSpan);
  }

  initReveal();
  initCounters();
  initHeroAppDemo();
}

document.addEventListener("DOMContentLoaded", renderHome);
