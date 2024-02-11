$('.logo_slider').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    dots: false,
    prevArrow: '<i class="fas fa-chevron-left prev"></i>',
    nextArrow: '<i class="fas fa-chevron-right next"></i>',
    responsive: [
      {
        breakpoint: 1199.98,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          arrows: false,
        }
      },
      {
        breakpoint: 991.98,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: false,
        }
      },
      {
        breakpoint: 767.98,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
        }
      },
      {
        breakpoint: 575.98,
        settings: {
          slidesToShow:3,
          slidesToScroll: 1,
          arrows: true,
          dots: false,
          prevArrow: '<i class="fas fa-chevron-left prev"></i>',
          nextArrow: '<i class="fas fa-chevron-right next"></i>',
        }
      },
      {
        breakpoint: 320.98,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
          dots: false,
          prevArrow: '<i class="fas fa-chevron-left prev"></i>',
          nextArrow: '<i class="fas fa-chevron-right next"></i>',
        }
      },
    ]
  });
  // type js 
$('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    dots: false,
    nextArrow: '<i class="fas fa-chevron-right next"></i>',
    responsive: [
      {
        breakpoint: 1199.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      },
      {
        breakpoint: 991.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      },
      {
        breakpoint: 767.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      },
      {
        breakpoint: 575.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        }
      }
    ]
  });
$('.app').slick({
    slidesToShow:5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    dots: false,
    nextArrow: '<i class="fas fa-chevron-right next"></i>',
    responsive: [
      {
        breakpoint: 1199.98,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: false,
        }
      },
      {
        breakpoint: 991.98,
        settings: {
          slidesToShow:4,
          slidesToScroll: 1,
          arrows: false,
        }
      },
      {
        breakpoint: 767.98,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
        }
      },
      {
        breakpoint: 575.98,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
        }
      },
 
    ]
  });
  // type js 