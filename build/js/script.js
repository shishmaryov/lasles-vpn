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
	$('.header__burger').click(function(){
		$('.header__menu').toggleClass('header__menu--active'); return false;
	});
});
