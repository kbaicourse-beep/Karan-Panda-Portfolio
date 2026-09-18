/* ==========================================================================
   MAIN.JS — shared nav + footer, rendered on every page.
   You shouldn't need to edit this file — edit js/data.js instead.
   ========================================================================== */

/**
 * The K/P brand mark, traced from the logo artwork as a single closed
 * path in a 0–100 viewBox. Shared by the nav logo and the site loader so
 * there's exactly one source of truth for the shape.
 */
const LOGO_MARK_PATH = "M 92.38 0.00 L 38.41 0.33 L 0.00 47.68 L 42.05 99.67 L 51.66 100.00 L 51.66 78.48 L 26.82 47.68 L 49.01 20.53 L 72.19 20.20 L 72.19 40.73 L 55.96 55.96 L 71.52 74.83 L 92.38 53.64 Z";
window.LOGO_MARK_PATH = LOGO_MARK_PATH;

/** Turns **bold** markup into <span class="accent">bold</span>. */
function mdAccent(str = "") {
  return str.replace(/\*\*(.+?)\*\*/g, '<span class="accent">$1</span>');
}

/** Escapes nothing fancy — content is trusted (it's your own data.js). */
function el(html) {
  const t = document.createElement("template");
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
}

function currentPage() {
  const path = window.location.pathname.split("/").pop() || "index.html";
  return path;
}

function renderNav() {
  const mount = document.getElementById("site-nav");
  if (!mount) return;
  const page = currentPage();

  const links = SITE.nav
    .map((item) => {
      const href = item.external ? SITE.resumeFile : item.href;
      const isActive = !item.external && href === page;
      const target = item.external ? ' target="_blank" rel="noopener"' : "";
      const icon = item.icon ? ' <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3v13m0 0l-5-5m5 5l5-5M5 21h14"/></svg>' : "";
      const transitionAttr = item.external ? "" : " data-transition";
      return `<li><a href="${href}" class="${isActive ? "active" : ""}"${target}${transitionAttr}>${item.label}${icon}</a></li>`;
    })
    .join("");

  mount.innerHTML = `
    <div class="nav-inner">
      <a href="index.html" class="nav-logo" data-transition aria-label="${SITE.name}">
        <svg viewBox="0 0 100 100" class="nav-logo-mark"><path d="${LOGO_MARK_PATH}"></path></svg>
      </a>
      <ul class="nav-links">${links}</ul>
      <div class="nav-cta">
        <a href="mailto:${SITE.email}" class="btn btn-accent">Mail Me</a>
      </div>
      <button class="nav-toggle" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  `;

  const toggle = mount.querySelector(".nav-toggle");

  // A body-level backdrop (not nested inside the sticky-positioned header)
  // so position:fixed is guaranteed viewport-relative with no ancestor
  // stacking-context surprises. Dims/blurs the page behind the mobile
  // dropdown and lets a tap outside, or Escape, close it — rather than
  // leaving the rest of the page floating there, fully visible and
  // tappable, underneath an open menu.
  let backdrop = document.getElementById("nav-backdrop");
  if (!backdrop) {
    backdrop = document.createElement("div");
    backdrop.id = "nav-backdrop";
    backdrop.className = "nav-backdrop";
    document.body.appendChild(backdrop);
  }
  const setMenuOpen = (open) => {
    mount.classList.toggle("open", open);
    backdrop.classList.toggle("is-open", open);
  };
  toggle.addEventListener("click", () => setMenuOpen(!mount.classList.contains("open")));
  backdrop.addEventListener("click", () => setMenuOpen(false));
  mount.querySelectorAll(".nav-links a").forEach((a) => a.addEventListener("click", () => setMenuOpen(false)));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mount.classList.contains("open")) setMenuOpen(false);
  });

  // Same bfcache concern as the page-transition panel: if the menu was
  // left open when the user navigated away via a link, a back/forward
  // restore repaints the page exactly as it was frozen — menu included.
  // Close it on restore so back navigation doesn't land on an open menu.
  window.addEventListener("pageshow", (e) => {
    if (e.persisted) mount.classList.remove("open");
  });

  const onScroll = () => mount.classList.toggle("is-scrolled", window.scrollY > 8);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

/**
 * Small persistent pill that appears once you've scrolled a bit, letting
 * you get back to Work (case studies) or the homepage Archive (posts)
 * without scrolling all the way up — the hero's own back-link only lives
 * at the very top and disappears once you scroll past it.
 */
function initFloatingBack() {
  const el = document.getElementById("floating-back");
  if (!el) return;
  const onScroll = () => el.classList.toggle("is-visible", window.scrollY > 320);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

function renderFooter() {
  const mount = document.getElementById("site-footer");
  if (!mount) return;

  mount.innerHTML = `
    <div class="footer-inner">
      <div class="footer-top">
        <h2 class="footer-heading">GET IN<br><span class="accent">TOUCH</span></h2>
        <div class="footer-socials">
          <div class="label">Connect Directly</div>
          <a href="${SITE.links.linkedin}" target="_blank" rel="noopener">LinkedIn</a>
          <a href="${SITE.links.behance}" target="_blank" rel="noopener">Behance</a>
          <a href="${SITE.links.readcv}" target="_blank" rel="noopener">Read.cv</a>
        </div>
      </div>
      <div class="footer-mail">
        <div class="label">Mail me at-</div>
        <a href="mailto:${SITE.email}">${SITE.email} ↗</a>
      </div>
      <div class="footer-bottom">
        <span class="muted-label">© 2025 ${SITE.copyrightName}</span>
        <span class="muted-label">${mdAccent(SITE.footerTagline)}</span>
        <button class="back-to-top" onclick="window.scrollTo({top:0,behavior:'smooth'})">
          <span class="dot"></span>Back to Top
        </button>
      </div>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  renderNav();
  renderFooter();
  initFloatingBack();

  // Wire up every resume link/button on the page (About page has two).
  document.querySelectorAll('a[href="#resume"], #resume-btn, #resume-cta-btn').forEach((a) => {
    a.href = SITE.resumeFile;
  });
});

/**
 * Subtle "fade + rise" reveal on scroll, applied to any element with the
 * .reveal class. Call this again after any page script injects new HTML
 * (e.g. at the end of a render function) so newly-added elements get
 * picked up. Elements animate once, the first time they enter view.
 */
function initReveal(root = document) {
  const els = root.querySelectorAll(".reveal:not(.reveal-ready)");
  if (!els.length) return;

  if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    els.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.01, rootMargin: "0px 0px 120px 0px" }
  );

  els.forEach((el) => {
    el.classList.add("reveal-ready");
    io.observe(el);
  });
}
window.initReveal = initReveal;

/**
 * Animates a stat's number counting up from 0 the first time it scrolls
 * into view. Only touches values that are a plain number with an optional
 * prefix/suffix (e.g. "92%", "+65%", "2.4x", "14d") — anything else (a
 * range, an arrow, a dash) is left exactly as written, untouched.
 */
function initCounters(root = document) {
  const els = root.querySelectorAll(".cs-stat .val, .stat");
  if (!els.length || !("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        io.unobserve(entry.target);
        const el = entry.target;
        if (el.dataset.counted) return;
        const raw = el.textContent.trim();
        const match = raw.match(/^([^\d]*)(\d+(?:\.\d+)?)(.*)$/);
        if (!match) return;
        el.dataset.counted = "1";
        const [, prefix, numStr, suffix] = match;
        const target = parseFloat(numStr);
        const decimals = (numStr.split(".")[1] || "").length;
        const duration = 900;
        const start = performance.now();
        function tick(now) {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          const val = (target * eased).toFixed(decimals);
          el.textContent = `${prefix}${val}${suffix}`;
          if (p < 1) requestAnimationFrame(tick);
          else el.textContent = raw;
        }
        requestAnimationFrame(tick);
      });
    },
    { threshold: 0.4 }
  );
  els.forEach((el) => io.observe(el));
}
window.initCounters = initCounters;

/**
 * Thin progress bar fixed under the nav, filled by scroll position.
 * Used only on long-form pages (case studies, Archive posts) where
 * knowing "how much is left" is actually useful.
 */
function initReadingProgress() {
  const bar = document.getElementById("reading-progress");
  if (!bar) return;
  const update = () => {
    const h = document.documentElement;
    const scrolled = h.scrollTop;
    const max = h.scrollHeight - h.clientHeight;
    const pct = max > 0 ? Math.min(scrolled / max, 1) : 0;
    bar.style.transform = `scaleX(${pct})`;
  };
  update();
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
}
window.initReadingProgress = initReadingProgress;

/**
 * Fixed left-edge timeline nav for long-form pages. Collapsed by default
 * to a small, quiet rectangular tab — just a hint that a section list
 * exists, not a rail running the height of the screen. Hovering it (or
 * focusing, for keyboard users) expands a compact panel listing every
 * section; move the cursor away and it closes again. Clicking a row
 * smooth-scrolls there; the row for whichever section is on screen
 * highlights automatically as you read. Shared by case studies
 * (js/case-study.js) and Archive posts (js/archive-post.js) — does
 * nothing if the page has no navLabel-tagged blocks.
 */
function buildTocRail(sections) {
  const existing = document.getElementById("toc-rail");
  if (existing) existing.remove();
  if (!sections.length) return;

  const nav = document.createElement("nav");
  nav.id = "toc-rail";
  nav.className = "toc-rail";
  nav.setAttribute("aria-label", "Jump to section");
  nav.innerHTML = `
    <div class="toc-hint" aria-hidden="true"><span></span><span></span><span></span></div>
    <div class="toc-panel">
      <ul class="toc-rail-list">
        ${sections
          .map(
            (s) => `
          <li>
            <a href="#${s.id}" data-toc-target="${s.id}">
              <span class="toc-dot"></span>
              <span class="toc-time">${s.time}</span>
              <span class="toc-label">${s.label}</span>
            </a>
          </li>`
          )
          .join("")}
      </ul>
    </div>
  `;
  document.body.appendChild(nav);

  const links = Array.from(nav.querySelectorAll("[data-toc-target]"));
  links.forEach((a) => {
    a.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.getElementById(a.dataset.tocTarget);
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  const targets = sections.map((s) => document.getElementById(s.id)).filter(Boolean);
  if ("IntersectionObserver" in window && targets.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const link = nav.querySelector(`[data-toc-target="${entry.target.id}"]`);
          if (!link) return;
          links.forEach((l) => l.classList.remove("is-active"));
          link.classList.add("is-active");
        });
      },
      { rootMargin: "-40% 0px -52% 0px", threshold: 0 }
    );
    targets.forEach((t) => io.observe(t));
  }
}
window.buildTocRail = buildTocRail;


/**
 * Given a page's blocks[] array, pulls out an ordered list of
 * {id, time, label} for any block carrying navLabel (optionally
 * navTime), and assigns that block's wrapper an id to match. Shared by
 * case-study.js and archive-post.js so both build their rail the same way.
 */
function extractNavSections(blocks, blockRenderers) {
  const navSections = [];
  const html = blocks
    .map((b) => {
      if (!blockRenderers[b.type]) return "";
      let idAttr = "";
      if (b.navLabel) {
        const secId = `sec-${navSections.length + 1}`;
        idAttr = ` id="${secId}"`;
        navSections.push({ id: secId, time: b.navTime || "", label: b.navLabel });
      }
      return `<div class="reveal"${idAttr}>${blockRenderers[b.type](b)}</div>`;
    })
    .join("");
  return { html, navSections };
}
window.extractNavSections = extractNavSections;

/**
 * Wires up any .sc-widget sizing calculators on the page — drag the
 * slider, the sample letter scales live and the readout updates.
 * legibleDistance ≈ letterHeight × factor (factor set per-widget).
 */
function initSizingCalculators(root = document) {
  root.querySelectorAll(".sc-widget").forEach((widget) => {
    const factor = parseFloat(widget.dataset.factor) || 0.3;
    const range = widget.querySelector('input[type="range"]');
    const letter = widget.querySelector(".sc-letter");
    const distanceOut = widget.querySelector("#sc-distance") || widget.querySelector(".sc-num");
    const heightOut = widget.querySelectorAll(".sc-num")[1];
    if (!range || !letter) return;

    const minPx = 32, maxPx = 160, minM = parseFloat(range.min), maxM = parseFloat(range.max);

    const update = () => {
      const distance = parseFloat(range.value);
      const heightMm = Math.round(distance * factor * 100);
      const t = (distance - minM) / (maxM - minM || 1);
      const px = minPx + t * (maxPx - minPx);
      letter.style.fontSize = `${px}px`;
      if (distanceOut) distanceOut.textContent = distance;
      if (heightOut) heightOut.textContent = heightMm;
    };

    range.addEventListener("input", update);
    update();
  });
}
window.initSizingCalculators = initSizingCalculators;


/**
 * Full-screen "swipe" page transition. Any link marked with
 * data-transition swipes a colour panel across the screen before
 * navigating, instead of just hard-cutting to the next page. Every page
 * also swipes the same panel away on load, so arriving somewhere new
 * feels like the continuation of one motion rather than two separate
 * page loads. Direction is consistently left-to-right both ways.
 */
function initPageTransitions() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const overlay = document.createElement("div");
  overlay.className = "page-transition";
  const panel = document.createElement("div");
  panel.className = "pt-panel";
  overlay.appendChild(panel);
  document.body.appendChild(overlay);

  function clearPanel(instant) {
    panel.style.transition = instant ? "none" : "transform .6s cubic-bezier(.76,0,.24,1)";
    panel.style.transform = "translateX(100%)";
  }

  // Entrance: the panel starts covering the screen, then swipes off to
  // the right to reveal the page that just loaded.
  requestAnimationFrame(() => {
    requestAnimationFrame(() => clearPanel(false));
  });

  // If the browser restores this exact page from its back/forward cache
  // (bfcache) — which is what happens on a plain back/forward navigation —
  // the DOM is repainted exactly as it was frozen, including a panel that
  // may have been mid-"cover" transform when the user clicked away. Because
  // DOMContentLoaded never fires again on a bfcache restore, that panel
  // would otherwise sit there permanently, covering the page. `pageshow`
  // fires on both a fresh load and a bfcache restore; when restored
  // (event.persisted), snap the panel out of the way instantly instead of
  // leaving it stuck or re-running the slower animated version.
  window.addEventListener("pageshow", (e) => {
    if (e.persisted) clearPanel(true);
  });

  document.body.addEventListener("click", (e) => {
    const link = e.target.closest("[data-transition]");
    if (!link) return;
    const href = link.getAttribute("href");
    if (!href || href.startsWith("#") || e.metaKey || e.ctrlKey || link.target === "_blank") return;
    e.preventDefault();
    // reset instantly off-screen left, then swipe right to cover —
    // same direction as the entrance, before the next page loads.
    panel.style.transition = "none";
    panel.style.transform = "translateX(-100%)";
    void panel.offsetWidth; // force reflow so the reset isn't animated
    requestAnimationFrame(() => {
      panel.style.transition = "transform .5s cubic-bezier(.76,0,.24,1)";
      panel.style.transform = "translateX(0%)";
    });
    setTimeout(() => { window.location.href = href; }, 480);
  });
}
window.initPageTransitions = initPageTransitions;
document.addEventListener("DOMContentLoaded", initPageTransitions);
