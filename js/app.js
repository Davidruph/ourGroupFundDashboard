(function ($) {
  "use strict";

  $("#sidebarToggle, #sidebarToggleTop").on("click", function (e) {
    $("body").toggleClass("sidebar-toggled");
    $(".sidebar").toggleClass("toggled");
    if ($(".sidebar").hasClass("toggled")) {
      $(".sidebar .collapse").collapse("hide");
    }
  });

  (function () {
    function checkWindowWidth() {
      if ($(window).width() < 768) {
        $(".sidebar .collapse").collapse();
        // $("#sidebarToggleTop").click();
      }
      if ($(window).width() < 480 && !$(".sidebar").hasClass("toggled")) {
        $("body").addClass("sidebar-toggled");
        $(".sidebar").addClass("toggled");
        $(".sidebar .collapse").collapse();
        // $("#sidebarToggleTop").click();
      }
    }

    checkWindowWidth(); // Execute the function on page load

    $(window).on("resize", function () {
      checkWindowWidth(); // Execute the function when window width changes
    });
  })();

  $("body.fixed-nav .sidebar").on(
    "mousewheel DOMMouseScroll wheel",
    function (e) {
      var delta;
      if ($(window).width() > 768) {
        delta = e.originalEvent.wheelDelta || -e.originalEvent.detail;
        this.scrollTop += 30 * (delta < 0 ? 1 : -1);
        e.preventDefault();
      }
    }
  );

  $(document).on("scroll", function () {
    if ($(this).scrollTop() > 100) {
      $(".scroll-to-top").fadeIn();
    } else {
      $(".scroll-to-top").fadeOut();
    }
  });

  $(document).on("click", "a.scroll-to-top", function (e) {
    var target = $(this);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $(target.attr("href")).offset().top,
        },
        1000,
        "easeInOutExpo"
      );
    e.preventDefault();
  });
})(jQuery);
