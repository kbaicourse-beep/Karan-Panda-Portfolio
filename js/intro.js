/* ==========================================================================
   INTRO.JS — home page only, first visit only. Shows "ନମସ୍କାର" (Namaskar)
   in the accent colour above a big clone of the hero name, holds it a
   moment, then animates that clone (via a measured translate + scale —
   see runIntro below) so it settles exactly into the real hero name's
   spot. Once it lands, the real hero name and the rest of the homepage
   fade in together. Runs once — see js/loader.js for the "kp:loaderDone"
   handoff, and the inline script in index.html's <head> for the
   localStorage / reduced-motion gate and the safety-timeout fallback.
   ========================================================================== */

(function () {
  document.addEventListener("DOMContentLoaded", () => {
    const html = document.documentElement;
    if (!html.classList.contains("intro-pending")) return; // repeat visit or reduced motion — nothing to do

    const heroNameRow = document.querySelector(".hero-home .hero-name-row");
    if (!heroNameRow) {
      reveal();
      return;
    }

    let started = false;
    const start = () => {
      if (started) return;
      started = true;
      runIntro();
    };

    // Wait for the K/P loader to hand off; if it's already gone (e.g. a
    // very fast reload), start immediately instead of waiting forever.
    document.addEventListener("kp:loaderDone", start, { once: true });
    if (!document.getElementById("site-loader")) start();

    function runIntro() {
      const overlay = document.createElement("div");
      overlay.className = "namaste-intro";
      overlay.setAttribute("aria-hidden", "true");
      overlay.innerHTML = `
        <div class="namaste-odia">ନମସ୍କାର</div>
        <div class="hero-name-row intro-name-row">
          <span class="hero-ghost">i m&rsquo;</span>
          <div class="hero-karan"><span>KARAN</span><span class="accent">.</span></div>
        </div>
      `;
      document.body.appendChild(overlay);

      const introRow = overlay.querySelector(".intro-name-row");

      requestAnimationFrame(() => overlay.classList.add("is-visible"));

      // Hold long enough to actually read the greeting, then settle the
      // name into its real position.
      setTimeout(settle, 1000);

      let done = false;
      function settle() {
        const firstRect = introRow.getBoundingClientRect();
        const lastRect = heroNameRow.getBoundingClientRect();

        const dx = (lastRect.left + lastRect.width / 2) - (firstRect.left + firstRect.width / 2);
        const dy = (lastRect.top + lastRect.height / 2) - (firstRect.top + firstRect.height / 2);
        const scaleRatio = firstRect.width ? lastRect.width / firstRect.width : 1;
        const finalScale = 1.32 * scaleRatio;

        overlay.classList.add("is-collapsing");
        introRow.classList.add("is-settling");
        introRow.style.transform = `translate(${dx}px, ${dy}px) scale(${finalScale})`;

        introRow.addEventListener("transitionend", finish, { once: true });
        setTimeout(finish, 950); // fallback if transitionend doesn't fire
      }

      function finish() {
        if (done) return;
        done = true;
        overlay.remove();
        reveal();
        try { localStorage.setItem("kp_intro_seen", "1"); } catch (e) {}
      }
    }

    function reveal() {
      html.classList.remove("intro-pending");
      html.classList.add("intro-revealing");
      try { localStorage.setItem("kp_intro_seen", "1"); } catch (e) {}
    }
  });
})();
