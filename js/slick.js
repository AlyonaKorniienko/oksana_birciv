$('.portfolio__list').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 2,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 1500,
  centerMode: true,
  centerPadding: '60px',
  dots: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
