$("#carousel-videos").slick({
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
  appendArrows: $("#videos-nav"),
  nextArrow: $("#video-next"),
  prevArrow: $("#video-prev"),
});
