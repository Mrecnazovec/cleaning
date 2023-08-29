$(document).ready(function(){
	$('.carousel').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 3,
		prevArrow: '<button id="prev" type="button" class="btn navigate prev"><img src="./assets/svg/arrow.svg" alt="ar"></button>',
    nextArrow: '<button id="next" type="button" class="btn navigate next"><img src="./assets/svg/arrow.svg" alt="ar"></button>',
		dots: true,
		responsive: [
			{
				breakpoint: 930,
				settings: {
					arrows: false,
					swipe:true,
					autoplaySpeed:3000,
					slidesToShow: 3,



				}
			},
			{
				breakpoint: 700,
				settings: {
					arrows: false,
					swipe:true,
					autoplaySpeed:3000,
					slidesToShow: 2,



				}
			},
			{
				breakpoint: 500,
				settings: {
					arrows: false,
					swipe:true,
					autoplaySpeed:3000,
					slidesToShow: 1,



				}
			}
		]
	});
});