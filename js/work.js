/* ==========================================================================
   WORK.JS — renders work.html from PROJECTS in data.js
   ========================================================================== */

const FILTERS = ["All", "Product Design / UX", "Branding", "Illustrations"];

function projectCardHTML(project, i = 0) {
  const disabled = !!project.comingSoon;
  const tag = disabled ? "div" : "a";
  const attrs = disabled
    ? `aria-disabled="true"`
    : `href="case-study.html?id=${project.id}" data-transition`;
  const badgeLabel = disabled ? "COMING SOON" : (project.badge || "Case Study").toUpperCase();
  return `
    <${tag} class="project-card reveal ${project.tall ? "tall" : ""} ${disabled ? "is-disabled" : ""}" style="--reveal-delay:${(i % 4) * 0.06}s" ${attrs}>
      <div class="thumb">
        <img src="${project.thumbnail}" alt="${project.title}" loading="lazy">
        <span class="badge ${disabled ? "badge-coming-soon" : ""}">[${badgeLabel}]</span>
      </div>
      <div class="info">
        <div class="info-text">
          <span class="eyebrow2">${project.eyebrow}</span>
          <h3 class="title2">${project.title}</h3>
          <p class="desc">${project.description}</p>
        </div>
        <span class="arrow">
          <svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7M17 7H8M17 7V16"/></svg>
        </span>
      </div>
    </${tag}>
  `;
}

function renderGrid(filter) {
  const grid = document.getElementById("project-grid");
  const list = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);
  grid.innerHTML = list.map((p, i) => projectCardHTML(p, i)).join("") || `<p class="sub">No projects in this category yet.</p>`;
  const count = document.getElementById("filter-count");
  if (count) count.textContent = `${list.length} PROJECT${list.length === 1 ? "" : "S"}`;
  initReveal();
  initCardTilt();
}

function renderWork() {
  const carousel = document.getElementById("carousel-strip");
  if (carousel) {
    const items = PROJECTS.map((p) => {
      const disabled = !!p.comingSoon;
      const tag = disabled ? "div" : "a";
      const attrs = disabled ? `aria-disabled="true"` : `href="case-study.html?id=${p.id}" data-transition`;
      return `
      <${tag} class="carousel-item ${disabled ? "is-disabled" : ""}" ${attrs}>
        <img src="${p.thumbnail}" alt="${p.title}" loading="lazy">
        <div class="ci-overlay">
          <span class="ci-eyebrow">${p.eyebrow}</span>
          <span class="ci-title">${p.title}</span>
          ${disabled ? `<span class="ci-coming-soon">Coming Soon</span>` : ""}
        </div>
      </${tag}>`;
    }).join("");
    // Doubled so the marquee loop (translateX -50%) is seamless.
    carousel.innerHTML = items + items;
  }

  const pills = document.getElementById("filter-pills");
  if (pills) {
    pills.innerHTML = FILTERS.map(
      (f, i) => `<button class="filter-pill ${i === 0 ? "active" : ""}" data-filter="${f}">${f}</button>`
    ).join("");
    pills.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter-pill");
      if (!btn) return;
      pills.querySelectorAll(".filter-pill").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderGrid(btn.dataset.filter);
    });
  }

  renderGrid("All");
}

function initCarousel() {
  const outer = document.querySelector(".carousel-outer");
  const track = document.getElementById("carousel-strip");
  const prevBtn = document.getElementById("carousel-prev");
  const nextBtn = document.getElementById("carousel-next");
  if (!outer || !track) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const SPEED = 0.5; // px per frame — "decent" idle scroll speed
  let offset = 0;
  let paused = false;
  let resumeTimer = null;

  function halfWidth() {
    return track.scrollWidth / 2; // content is rendered twice for a seamless loop
  }

  function apply(withTransition) {
    track.style.transition = withTransition ? "transform .55s cubic-bezier(.22,1,.36,1)" : "none";
    track.style.transform = `translateX(${offset}px)`;
  }

  function tick() {
    if (!paused && !reduceMotion) {
      offset -= SPEED;
      const hw = halfWidth();
      if (hw && Math.abs(offset) >= hw) offset += hw;
      apply(false);
    }
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);

  function pauseThenResume() {
    paused = true;
    clearTimeout(resumeTimer);
    resumeTimer = setTimeout(() => { paused = false; }, 3200);
  }

  function nudge(dir) {
    const card = track.querySelector(".carousel-item");
    const gap = 20;
    const step = (card ? card.getBoundingClientRect().width : 240) + gap;
    const hw = halfWidth();
    offset += dir * step;
    if (offset > 0) offset -= hw;
    if (offset <= -hw) offset += hw;
    apply(true);
    pauseThenResume();
  }

  prevBtn?.addEventListener("click", () => nudge(1));
  nextBtn?.addEventListener("click", () => nudge(-1));

  // Only pause when the cursor is actually over a project card — not
  // anywhere in the carousel's outer bounds (the gaps, the mask edges).
  track.querySelectorAll(".carousel-item").forEach((item) => {
    item.addEventListener("mouseenter", () => { paused = true; });
    item.addEventListener("mouseleave", () => { clearTimeout(resumeTimer); paused = false; });
  });
}

function initCardTilt() {
  if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
  document.querySelectorAll(".project-card .thumb").forEach((thumb) => {
    const card = thumb.closest(".project-card");
    card.addEventListener("mousemove", (e) => {
      const rect = thumb.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      thumb.style.transform = `perspective(900px) rotateX(${(-py * 8).toFixed(2)}deg) rotateY(${(px * 8).toFixed(2)}deg) scale3d(1.02,1.02,1.02)`;
      thumb.classList.add("tilting");
    });
    card.addEventListener("mouseleave", () => {
      thumb.style.transform = "";
      thumb.classList.remove("tilting");
    });
  });
}

document.addEventListener("DOMContentLoaded", renderWork);
document.addEventListener("DOMContentLoaded", initCarousel);
