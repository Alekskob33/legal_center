$("#carousel-relevant-posts").slick({
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
  appendArrows: $("#posts-nav"),
  nextArrow: $("#post-next"),
  prevArrow: $("#post-prev"),
});
