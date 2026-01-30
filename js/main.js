(function ($) {
  "use strict";

  const $window = $(window);
  const $document = $(document);
  const $htmlBody = $("html, body");
  const $scrollLinks = $("a.scroll-trigger");
  const $sections = $("section");
  const $goTop = $(".goTop");
  const $navigation = $("#main-nav");

  /* =====================
     Smooth Scroll
  ====================== */
  $scrollLinks.on("click", function (e) {
    const target = $(this.hash);

    if (!target.length) return;

    e.preventDefault();
    $htmlBody.animate(
      { scrollTop: target.offset().top },
      1000,
      "easeInOutExpo"
    );
  });

  /* =====================
     AOS Init
  ====================== */
  AOS.init({
    duration: 600,
    easing: "ease-in-out",
    once: true,
    mirror: false,
  });

  /* =====================
     Scroll Events
  ====================== */
  $window.on("scroll", function () {
    const scrollPos = $document.scrollTop();

    // Active link switching
    $sections.each(function () {
      const $section = $(this);
      const top = $section.offset().top - 100;
      const bottom = top + $section.outerHeight();
      const id = $section.attr("id");

      if (scrollPos >= top && scrollPos < bottom) {
        $scrollLinks.removeClass("active");
        $(`a[href="#${id}"]`).addClass("active");
      }
    });

    // Go top button & nav background
    if (scrollPos >= 150) {
      $goTop.fadeIn();
      $navigation.addClass("sticky");
    } else {
      $goTop.fadeOut();
      $navigation.removeClass("sticky");
    }
  });

  /* =====================
     Go Top
  ====================== */
  $goTop.on("click", function (e) {
    e.preventDefault();
    $htmlBody.animate({ scrollTop: 0 }, 0);
  });

})(jQuery);

/* =====================
   Particles.js
====================== */
particlesJS("particles-js", {
  particles: {
    number: {
      value: 160,
      density: { enable: true, value_area: 4000 },
    },
    color: { value: "#FF014F" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#FF014F" },
      polygon: { nb_sides: 5 },
    },
    opacity: {
      value: 1,
      random: true,
      anim: { enable: true, speed: 0.5, opacity_min: 0 },
    },
    size: {
      value: 5,
      random: true,
      anim: { enable: false },
    },
    line_linked: { enable: false },
    move: {
      enable: true,
      speed: 1,
      random: true,
      out_mode: "out",
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      resize: true,
    },
  },
  retina_detect: true,
});
