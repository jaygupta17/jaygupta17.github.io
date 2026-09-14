/* jaygupta17.github.io · minimal JS */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Scroll reveals (skipped entirely under reduced motion)
  if (!reduceMotion && "IntersectionObserver" in window) {
    var targets = document.querySelectorAll("section, footer");
    targets.forEach(function (el) { el.classList.add("reveal"); });
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.06 }
    );
    targets.forEach(function (el) { io.observe(el); });
    // Hero fades in on load
    document.querySelector(".hero").classList.add("reveal");
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        document.querySelector(".hero").classList.add("in");
      });
    });
  }

  // Year
  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  // Live IST clock
  var clock = document.getElementById("clock");
  function tick() {
    if (!clock) return;
    try {
      clock.textContent = new Intl.DateTimeFormat("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone: "Asia/Kolkata"
      }).format(new Date());
    } catch (e) {
      clock.textContent = new Date().toTimeString().slice(0, 5);
    }
  }
  tick();
  setInterval(tick, 30000);

  // Email: click to copy
  document.querySelectorAll("[data-copy-email]").forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      var original = link.textContent;
      var done = function () {
        link.textContent = "copied ✓";
        setTimeout(function () { link.textContent = original; }, 1400);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText("jayajaygupta16@gmail.com").then(done, done);
      } else {
        done();
      }
    });
  });
})();
