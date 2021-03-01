// $(document).ready(function () {
// });

$("#carousel-quotes").slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  appendArrows: $("#quotes-nav"),
  nextArrow: $("#quote-next"),
  prevArrow: $("#quote-prev"),
});
