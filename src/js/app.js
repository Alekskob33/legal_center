"use strict";

const $menu = $("#nav") || null;
const $menu_toggler = $("#nav-toggler") || null;

if ($menu && $menu_toggler) {
  $menu_toggler.click(function () {
    if ($menu.hasClass("is-active")) {
      $menu.removeClass("is-active");
      $menu.slideUp();
    } else {
      $menu.addClass("is-active");
      $menu.slideDown();
    }
  });
}

// modal
const $modal = $("[data-modal='container']") || null;
const $modal_btn = $("[data-modal='btn-toggler']") || null;

if ($modal && $modal_btn) {
  $modal_btn.click(function () {
    if ($modal.hasClass("is-active")) {
      $modal.removeClass("is-active");
      $modal.hide();
    } else {
      $modal.addClass("is-active");
      $modal.show();
    }
  });
}

@@include("./carousel/carousel-cases.js");
@@include("./carousel/carousel-videos.js");
@@include("./carousel/carousel-feedbacks.js");
@@include("./carousel/carousel-lawyers.js");
@@include("./carousel/carousel-service-cards.js");
@@include("./carousel/carousel-posts.js");
@@include("./carousel/carousel-quotes.js");
@@include("./carousel/carousel-logos.js");

// @@include("selectize.js");
// $("select").selectize({
//   create: true,
//   sortField: {
//     field: "text",
//     direction: "asc",
//   },
//   dropdownParent: "body",
// });

@@include("./tabs/tabs.js");

// accordion
$("[data-accordion-head]").on("click", function () {
  let $this = $(this);
  $this
    .closest("[data-accordion-item]")
    .addClass("active")
    .siblings()
    .removeClass("active")
    .find("[data-accordion-content]")
    .delay(250)
    .slideUp(300);
  $this.next("[data-accordion-content]").delay(10).slideDown(300);
});

// dropdown
$("[data-dropdown-btn]").on("click", function () {
  let $this = $(this);
  if ($this.hasClass("active")) {
    $this.removeClass("active").next("[data-dropdown-list]").slideUp(100);
  } else {
    $this.addClass("active").next("[data-dropdown-list]").slideDown(100);
  }
});

// dropdown turn off if the click is out
jQuery(function ($) {
  $(document).mouseup(function (e) {
    if (
      !$("[data-dropdown-btn]").is(e.target) &&
      $("[data-dropdown-btn]").has(e.target).length === 0 &&
      $("[data-dropdown-btn]").next("[data-dropdown-list]").has(e.target)
        .length === 0
    ) {
      $("[data-dropdown-btn]").each(function () {
        $(this).removeClass("active").next("[data-dropdown-list]").slideUp(100);
      });
    }
  });
});
