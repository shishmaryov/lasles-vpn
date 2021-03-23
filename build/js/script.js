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

$(document).ready(function(){
	$('.nav__link').click(function(e){
    	if($(this).attr('href').indexOf('#') != -1){ // Проверяем, является и ссылка действительно якорной ссылкой.
			e.preventDefault(); // Отменяем событие перехода.
            var href = $(this).attr('href').replace('#', ''); // Получаем из якорной ссылки нужный ID элемента, к которому будет происходить переход.

			if($('#'+href).length > 0){ // Проверяем, существует ли на странице нужный нам элемент.
            	var tophref = $('body').find('#'+href).offset().top; // Получаем координаты элемента, относительно начала страницы.
            	$('html, body').animate({scrollTop: tophref}, 800); // Создаём анимацию скрола к нужному элементу.
			}
		}
    });
});
