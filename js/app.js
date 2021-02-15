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
