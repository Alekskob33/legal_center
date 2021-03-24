const progressbars = $('[data-progress="track"]');

function animateBar() {
  progressbars.each(function () {
    const value = $(this).attr('data-progress_value');
    $(this).css({ width: value + '%' });

    $(this)
      .prop('Counter', 0)
      .delay(500)
      .animate(
        {
          Counter: value,
        },
        {
          duration: 1000,
          easing: 'linear',
          step: function (now) {
            $(this).find('[data-progress="num"]').text(Math.ceil(now));
          },
        }
      );
  });
}

$(function () {
  const target_block = $('#progress');
  let blockStatus = true;

  let scrollEvent =
    $(window).scrollTop() > target_block.position().top - $(window).height();

  $(window).scroll(function () {
    scrollEvent =
      $(window).scrollTop() > target_block.position().top - $(window).height();
    if (scrollEvent && blockStatus) {
      blockStatus = false;
      animateBar();
    }
  });
});
