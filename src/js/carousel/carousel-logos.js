$("#carousel-logos").slick({
  arrows: false,
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 980,
      settings: {
        autoplay: true,
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 640,
      settings: {
        autoplay: true,
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 420,
      settings: {
        autoplay: true,
        slidesToShow: 1,
      },
    },
  ],
});
