const $slideStatus = $('#carousel-indicates');
const $slickElement = $('#carousel-videos');

$slickElement.on(
  'init reInit afterChange',
  function (event, slick, currentSlide, nextSlide) {
    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    let i = (currentSlide ? currentSlide : 0) + 1;
    $slideStatus.html(
      `${i} <span class="color-grey">/ ${slick.slideCount}</span>`
    );
  }
);

$slickElement.slick({
  fade: true,
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  // responsive: [
  // {
  // breakpoint: 1024,
  // settings: {
  // slidesToShow: 3,
  // slidesToScroll: 3,
  // infinite: true,
  // dots: true,
  // },
  // },
  // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
  // ],
  appendArrows: $('#videos-nav'),
  nextArrow: $('#video-next'),
  prevArrow: $('#video-prev'),
});
