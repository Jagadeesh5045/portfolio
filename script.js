// Portfolio interactions — no frameworks, plain JS

(function () {
  "use strict";

  // ----- Mobile nav toggle -----
  var toggle = document.getElementById("navToggle");
  var links = document.getElementById("navLinks");

  toggle.addEventListener("click", function () {
    var open = links.classList.toggle("open");
    toggle.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  // Close mobile nav when a link is tapped
  links.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () {
      links.classList.remove("open");
      toggle.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  // ----- Scroll reveal -----
  var revealEls = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    // Fallback: show everything if IO unsupported
    revealEls.forEach(function (el) { el.classList.add("visible"); });
  }

  // ----- Active nav link on scroll -----
  var sections = document.querySelectorAll("section[id]");
  var navAnchors = document.querySelectorAll(".nav-link");

  function setActiveLink() {
    var current = "home";
    sections.forEach(function (sec) {
      var rect = sec.getBoundingClientRect();
      if (rect.top <= 120 && rect.bottom > 120) {
        current = sec.id;
      }
    });
    navAnchors.forEach(function (a) {
      var match = a.getAttribute("href") === "#" + current;
      a.classList.toggle("active", match);
    });
  }

  var ticking = false;
  window.addEventListener(
    "scroll",
    function () {
      if (!ticking) {
        window.requestAnimationFrame(function () {
          setActiveLink();
          ticking = false;
        });
        ticking = true;
      }
    },
    { passive: true }
  );

  setActiveLink();
})();
