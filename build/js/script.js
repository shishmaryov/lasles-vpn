$(document).ready(function(){
  $('.header__burger').on('click', function(e) {
    e.preventDefault;
    $(this).toggleClass('header__burger--active');
  });
})

$(document).ready(function(){
  $('.slider').slick({
    infinite: true,
    dots: true,
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
});

$(document).ready(function(){
  $('.header__burger').on('click', function(e) {
    e.preventDefault;
    $('.header__menu').toggleClass('header__menu--active');
  });
});
