$(function () {


  // homepage testimonials slider	

  $('.responsive').slick(
    {
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1000,
          settings: {
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            dots: false,
            autoplay: true,
            autoplaySpeed: 2000,
            arrows: false
          }
        },
        {
          breakpoint: 414,
          settings: {
            infinite: true,
            dots: false,
            autoplay: true,
            autoplaySpeed: 2000,
            arrows: false,
          }
        }

      ]
    });



})