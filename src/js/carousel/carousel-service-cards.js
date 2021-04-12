$('#carousel-service-cards').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  appendDots: $('#carousel-services-dots'),
  dotsClass: 'carousel-dots',
  responsive: [
    {
      breakpoint: 3000,
      settings: 'unslick',
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});
