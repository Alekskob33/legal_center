// $(document).ready(function () {
// });

$("#carousel-feedbacks").slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
  appendArrows: $("#feedbacks-nav"),
  nextArrow: $("#feedbacks-next"),
  prevArrow: $("#feedbacks-prev"),
});
