// main slider 
$('.pSlider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.pNav'
  });
  $('.pNav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.pSlider',
    dots: false,
    arrows: false,
    centerMode: true,
    focusOnSelect: true
  });

// product slider 
  $('.pLikeSlider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow:  ".plArrowLeft",
    nextArrow: ".plArrowRight"
    // autoplay: true,
    // autoplaySpeed: 2000,
  });
  $('.reviewSlider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow:  ".rsLeft",
    nextArrow: ".rsRight"
    // autoplay: true,
    // autoplaySpeed: 2000,
  });