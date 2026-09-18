/* ==========================================================================
   LOADER.JS — home page only. Plays one full loop of the K/P mark drawing
   itself in (the same loop that's paused mid-hold in the CSS, see
   @keyframes loaderBuild in style.css) before revealing index.html.

   There's no real asset to wait on here, so "loading" is really just
   "give the mark one uninterrupted pass." The exit is timed to land on
   the loop's own hold beat (88–100%) rather than an arbitrary timeout, so
   it always lifts away from a settled frame instead of cutting the
   drawing motion off mid-stroke.
   ========================================================================== */

(function () {
  const LOOP_MS = 2200; // must match the loaderBuild animation-duration
  const WORDS = ["Rethink.", "Redo.", "Realize."];

  document.addEventListener("DOMContentLoaded", () => {
    const loader = document.getElementById("site-loader");
    if (!loader) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.body.classList.add("loader-active");

    // Cycle the tagline in thirds of the loop, so each word lands roughly
    // in step with the mark redrawing itself.
    const caption = loader.querySelector(".loader-caption");
    let wordTimer = null;
    if (caption) {
      const spans = WORDS.map((w, i) => {
        const s = document.createElement("span");
        s.textContent = w;
        if (i === 1) s.classList.add("accent");
        if (i === 0) s.classList.add("is-active");
        caption.appendChild(s);
        return s;
      });
      if (!reduceMotion) {
        let i = 0;
        wordTimer = setInterval(() => {
          spans[i].classList.remove("is-active");
          i = (i + 1) % spans.length;
          spans[i].classList.add("is-active");
        }, LOOP_MS / 3);
      }
    }

    const dismiss = () => {
      if (wordTimer) clearInterval(wordTimer);
      // Lets js/intro.js (first-visit greeting animation) know it's safe
      // to start — fires as the loader begins sliding away so the two
      // hand off smoothly instead of leaving a blank gap between them.
      document.dispatchEvent(new CustomEvent("kp:loaderDone"));
      loader.classList.add("is-leaving");
      document.body.classList.remove("loader-active");
      loader.addEventListener(
        "transitionend",
        (e) => {
          if (e.target === loader) loader.remove();
        },
        { once: true }
      );
    };

    // Reduced motion: skip straight to a brief, static hold and dismiss —
    // no loop to synchronise with.
    setTimeout(dismiss, reduceMotion ? 450 : LOOP_MS);
  });
})();
