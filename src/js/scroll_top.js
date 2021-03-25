const $scrollTop = $('[data-scrollto="top"]');

$scrollTop.on('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

$(window).scroll(function () {
  if ($(window).scrollTop() > $(window).height()) {
    $scrollTop.removeClass('hidden');
    return;
  }
  $scrollTop.addClass('hidden');
});
