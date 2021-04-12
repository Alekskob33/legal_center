$('#carousel-lawyers').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  appendDots: $('#carousel-lawyers-dots'),
  dotsClass: 'carousel-dots',
  responsive: [
    {
      breakpoint: 3000,
      settings: 'unslick',
    },
    {
      breakpoint: 979,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});
