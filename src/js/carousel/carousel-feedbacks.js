// $(document).ready(function () {
// });

$("#carousel-feedbacks").slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  // rows: 1,
  // slidesPerRow: 2,
  // variableWidth: true,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        // rows: 1,
        // slidesPerRow: 1,
        // slidesToShow: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
  appendArrows: $("#feedbacks-nav"),
  nextArrow: $("#feedbacks-next"),
  prevArrow: $("#feedbacks-prev"),
});
