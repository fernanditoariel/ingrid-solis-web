/* Ingrid Solís — landing interactions
   - scroll reveal via IntersectionObserver (no scroll listeners)
   - sticky nav shadow state
   - all motion gated behind prefers-reduced-motion
*/
(function () {
  "use strict";

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---- ambient video: only when motion is welcome ---- */
  var creedBg = document.querySelector(".creed__bg");
  if (creedBg) {
    if (reduce) {
      creedBg.removeAttribute("autoplay");
      creedBg.remove();
    } else {
      var play = creedBg.play();
      if (play && typeof play.catch === "function") { play.catch(function () {}); }
    }
  }

  /* ---- reveal on scroll ---- */
  var reveals = document.querySelectorAll(".reveal");
  if (reduce || !("IntersectionObserver" in window)) {
    reveals.forEach(function (el) { el.classList.add("in"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -12% 0px", threshold: 0.15 });
    reveals.forEach(function (el) { io.observe(el); });
    /* failsafe: if IntersectionObserver never fires, reveal anything
       still hidden after a while so content is never stuck invisible */
    setTimeout(function () {
      reveals.forEach(function (el) {
        if (!el.classList.contains("in")) el.classList.add("in");
      });
    }, 9000);
  }

  /* ---- nav stuck state ---- */
  var nav = document.querySelector(".nav");
  if (nav && "IntersectionObserver" in window) {
    var sentinel = document.createElement("div");
    sentinel.setAttribute("aria-hidden", "true");
    sentinel.style.cssText = "position:absolute;top:0;left:0;height:1px;width:1px;";
    document.body.prepend(sentinel);
    new IntersectionObserver(function (entries) {
      nav.classList.toggle("is-stuck", !entries[0].isIntersecting);
    }, { threshold: 0 }).observe(sentinel);
  }
})();
