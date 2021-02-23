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

@@include("./carousel/carousel-cases.js");
@@include("./carousel/carousel-videos.js");
@@include("./carousel/carousel-feedbacks.js");
