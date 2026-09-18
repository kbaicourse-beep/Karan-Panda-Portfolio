/* ==========================================================================
   ABOUT.JS — renders about.html from ABOUT in data.js
   ========================================================================== */

function renderAbout() {
  const set = (id, html) => {
    const node = document.getElementById(id);
    if (node) node.innerHTML = html;
  };

  set("about-eyebrow", ABOUT.eyebrow);
  set("about-heading", mdAccent(ABOUT.heading.toUpperCase()));
  set("about-sub", ABOUT.sub);
  const resumeBtn = document.getElementById("resume-btn");
  if (resumeBtn) resumeBtn.textContent = ABOUT.resumeBtn;
  const portrait = document.getElementById("about-portrait");
  if (portrait) portrait.src = ABOUT.portrait;

  set("about-hook", ABOUT.intro.hook);
  set("about-intro-eyebrow", ABOUT.intro.eyebrow);
  set("about-intro-text", ABOUT.intro.body);

  set("lift-heading", ABOUT.lift.heading.toUpperCase());
  set("lift-body", ABOUT.lift.body);
  const liftImage = document.getElementById("lift-image");
  if (liftImage) liftImage.src = ABOUT.lift.image;

  set("games-eyebrow", ABOUT.games.eyebrow);
  set("games-heading", mdAccent(ABOUT.games.heading.toUpperCase()));
  set("games-body", ABOUT.games.body);

  set(
    "mobile-games",
    `<div class="game-mini-list">
      ${ABOUT.games.mobile
        .map(
          (g) => `
        <div class="game-mini">
          <img src="${g.icon}" alt="">
          <div><div class="name">${g.name}</div><div class="sub2">${g.sub}</div></div>
        </div>`
        )
        .join("")}
    </div>`
  );

  set(
    "favorite-games",
    `<div class="fav-games">
      ${ABOUT.games.favorites
        .map(
          (g) => `
        <div class="fav-game">
          <div class="cover"><img src="${g.cover}" alt="${g.title}" loading="lazy"></div>
          <div class="cap">${g.title}</div>
        </div>`
        )
        .join("")}
    </div>`
  );

  set("art-eyebrow", ABOUT.art.eyebrow);
  set("art-heading", mdAccent(ABOUT.art.heading.toUpperCase()));
  set("art-body", ABOUT.art.body);
  set(
    "art-masonry",
    ABOUT.art.pieces
      .map(
        (p) => `
      <div class="art-piece">
        <img src="${p.image}" alt="${p.caption}" loading="lazy">
        <div class="cap">${p.caption}</div>
      </div>`
      )
      .join("")
  );

  set("honors-eyebrow", ABOUT.honors.eyebrow);
  set("honors-heading", ABOUT.honors.heading.toUpperCase());
  set(
    "honors-list",
    ABOUT.honors.items
      .map(
        (h) => `
      <div class="honor">
        <h3>${h.title}</h3>
        <p>${h.body}</p>
      </div>`
      )
      .join("")
  );

  set("resume-cta-text", ABOUT.resumeCtaText);
  const resumeCtaBtn = document.getElementById("resume-cta-btn");
  if (resumeCtaBtn) resumeCtaBtn.textContent = ABOUT.resumeCtaBtn;

  initReveal();
}

document.addEventListener("DOMContentLoaded", renderAbout);
