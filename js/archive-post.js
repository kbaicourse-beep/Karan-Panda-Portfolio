/* ==========================================================================
   ARCHIVE-POST.JS — renders archive-post.html?id=POST_ID from
   ARCHIVE_POSTS in data.js. Same block system as case studies (see
   js/blocks.js), used for long-form Archive/blog content instead of
   project work.
   ========================================================================== */

function renderArchivePost() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const post = ARCHIVE_POSTS.find((p) => p.id === id) || ARCHIVE_POSTS[0];

  document.title = `${post.title} — ${SITE.name}`;

  const heroBg = document.getElementById("hero-bg-img");
  if (heroBg) {
    if (post.heroImage) {
      heroBg.src = post.heroImage;
      heroBg.style.display = "";
      heroBg.onerror = () => { heroBg.style.display = "none"; };
    } else {
      heroBg.style.display = "none";
    }
  }

  const indexLabel = document.getElementById("cs-index-label");
  if (indexLabel) {
    indexLabel.innerHTML = `<span style="color:var(--accent)">${post.indexLabel}</span> <span style="color:var(--t-60)">— ${post.tag.toUpperCase()}</span>`;
  }

  const title = document.getElementById("cs-title");
  if (title) title.textContent = post.title.toUpperCase();

  const tagline = document.getElementById("cs-tagline");
  if (tagline) tagline.textContent = post.tagline;

  const meta = document.getElementById("cs-meta");
  if (meta) {
    meta.innerHTML = post.meta
      .map((m) => `<div><span class="m-label">${m.label}</span><span class="m-val">${m.val}</span></div>`)
      .join("");
  }

  // Build the blocks, and — for any block carrying navLabel/navTime — give
  // it an id and add it to the left-hand jump rail (shared helper in
  // js/main.js). Leave both fields off any block you don't want listed
  // there (see js/data.js for this post).
  const blocksMount = document.getElementById("cs-blocks");
  let navSections = [];
  if (blocksMount) {
    const built = extractNavSections(post.blocks, BLOCK_RENDERERS);
    navSections = built.navSections;
    blocksMount.innerHTML = `<div class="wrap">${built.html}</div>`;
  }
  buildTocRail(navSections);

  // Next post — whichever comes after this one in ARCHIVE_POSTS (wraps
  // around). If there's only one post, this section is hidden entirely.
  // The card's background is that next post's own heroImage, pulled live —
  // change that image and this teaser updates automatically.
  const idx = ARCHIVE_POSTS.findIndex((p) => p.id === post.id);
  const next = ARCHIVE_POSTS.length > 1 ? ARCHIVE_POSTS[(idx + 1) % ARCHIVE_POSTS.length] : null;
  const nextMount = document.getElementById("next-project");
  if (nextMount) {
    if (next) {
      const nextHero = next.heroImage || "";
      nextMount.innerHTML = `
        <a href="archive-post.html?id=${next.id}" class="next-project-card" data-transition>
          <div class="next-bg"><img src="${nextHero}" alt="" loading="lazy" onerror="this.style.display='none';"></div>
          <div class="next-project-inner">
            <div class="label">Next From The Archive</div>
            <h3>${next.title}</h3>
            <span class="btn">Read It
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M7 17L17 7M17 7H8M17 7V16"/></svg>
            </span>
          </div>
        </a>
      `;
    } else {
      nextMount.innerHTML = `
        <div class="label">Want to see more?</div>
        <a class="btn" href="work.html">Explore The Work
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M7 17L17 7M17 7H8M17 7V16"/></svg>
        </a>
      `;
    }
  }

  initReveal();
  initCounters();
  initReadingProgress();
}

document.addEventListener("DOMContentLoaded", renderArchivePost);
