$(window).on('load', function () {
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
		$('body').addClass('ios');
	} else {
		$('body').addClass('web');
	};
	$('body').removeClass('loaded');
});

// Zoom gallery
$('.zoom-gallery').magnificPopup({
	delegate: 'a',
	type: 'image',
	closeOnContentClick: false,
	closeBtnInside: false,
	mainClass: 'mfp-with-zoom mfp-img-mobile',
	image: {
		verticalFit: true,
		titleSrc: function (item) {
			return item.el.attr('title') + ' &middot; <a class="image-source-link" href="' + item.el.attr('data-source') + '" target="_blank">image source</a>';
		}
	},
	gallery: {
		enabled: true
	},
	zoom: {
		enabled: true,
		duration: 300, // don't foget to change the duration also in CSS
		opener: function (element) {
			return element.find('img');
		}
	}

});

$('.popup-with-zoom-anim').magnificPopup({
	type: 'inline',

	fixedContentPos: false,
	fixedBgPos: true,

	overflowY: 'auto',

	closeBtnInside: true,
	preloader: false,

	midClick: true,
	removalDelay: 300,
	mainClass: 'my-mfp-zoom-in'
}); //fade-zoom

$('.popup-with-move-anim').magnificPopup({
	type: 'inline',

	fixedContentPos: false,
	fixedBgPos: true,

	overflowY: 'auto',

	closeBtnInside: true,
	preloader: false,

	midClick: true,
	removalDelay: 300,
	mainClass: 'my-mfp-slide-bottom'
}); //fade-slide

$('.test-popup-link').magnificPopup({
	type: 'image',
	mainClass: 'mfp-with-zoom', // this class is for CSS animation below

	zoom: {
		enabled: false, // By default it's false, so don't forget to enable it

		duration: 300, // duration of the effect, in milliseconds
		easing: 'ease-in-out', // CSS transition easing function

		// The "opener" function should return the element from which popup will be zoomed in
		// and to which popup will be scaled down
		// By defailt it looks for an image tag:
		opener: function (openerElement) {
			// openerElement is the element on which popup was initialized, in this case its <a> tag
			// you don't need to add "opener" option if this code matches your needs, it's defailt one.
			return openerElement.is('img') ? openerElement : openerElement.find('img');
		}
	}

});

/* viewport width */
function viewport() {
	var e = window,
		a = 'inner';
	if (!('innerWidth' in window)) {
		a = 'client';
		e = document.documentElement || document.body;
	}
	return {
		width: e[a + 'Width'],
		height: e[a + 'Height']
	}
};
/* viewport width */



$(function () {
	/* placeholder*/
	$('input, textarea').each(function () {
		var placeholder = $(this).attr('placeholder');
		$(this).focus(function () {
			$(this).attr('placeholder', '');
		});
		$(this).focusout(function () {
			$(this).attr('placeholder', placeholder);
		});
	});
	/* placeholder*/

	$('.button-nav').click(function () {
		$(this).toggleClass('active'),
			$('.main-nav-list').slideToggle();
		return false;
	});

	/* components */

	/* 
		FormStyler описание тут http://dimox.name/jquery-form-styler/ https://dimox.github.io/jQueryFormStyler/demo/ 
		плагин работает для всего, только стили  надо задавать (для селекта и инпут намбер их, например не видно)
	*/
	/*if ($('.styled').length) {
		$('.styled').styler();
	};*/

	/*
	$(".scroll").mCustomScrollbar({
   advanced:{
     updateOnContentResize: true,
   } 	
	*/

	/* components */



});

/*var handler = function () {

	var height_footer = $('footer').height();
	var height_header = $('header').height();
	//$('.content').css({'padding-bottom':height_footer+40, 'padding-top':height_header+40});


	var viewport_wid = viewport().width;
	var viewport_height = viewport().height;

	if (viewport_wid <= 991) {
		$('.header').hide();
	}

}*/


// слайдер (настройки тут http://kenwheeler.github.io/slick/)
/*if ($('.main-slider').length) {
	$('.main-slider').slick({
		dots: true,
		infinite: false,
		arrows: true,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 4,
		nextArrow: '<i class="fa fa-arrow-left slick-prev"></i>',
		prevArrow: '<i class="fa fa-arrow-right slick-next"></i>',
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 600,
				settings: "unslick"
			}
		]
	});
};*/

// mmenu - меню по клику, выезжающее сбоку, сверху, снизу.... (описание тут http://mmenu.frebsite.nl/)
$("#my-menu").mmenu({
	extensions: [
		/*'fx-menu-slide',
		'fx-panels-zoom',*/
		'shadow-page',
		'shadow-panels',
		'listview-large',
		'pagedim-black'
	],
	"navbars": [{
		"position": "bottom",
		"content": [
			/*"searchfield",*/
			'<div class="email_link"><a href="mailto:client@nita-farm.ru">client@nita-farm.ru</a></div>',
			'<div class="phone"><a href="tel:88007000220">8-800-700 02 20</a><div>звонок по России бесплатный</div></div>'
		]
	}],
	navbar: {
		title: '<img src="img/logo.png" alt="" />'
	},
	offCanvas: {
		position: 'right'
	},
	pageScroll: true,
	slidingSubmenus: true
});

//   Get the API
var api = $("#my-menu").data("mmenu");

//   Hook into methods
api.bind("open:finish", function () {
	$('.mm-opened .hamburger').addClass('is-active');
});
api.bind("close:finish", function () {
	$('.hamburger').removeClass('is-active');
});

// меняем стрелку на гамбургер при клике на область контента
/*$(".mm-slideout").click(function() {
	$('.mm-opened .hamburger').removeClass('is-active');
});*/



// плавная прокрутка вниз к якорю
/*$(".header nav ul li a").click(function () {
	var elementClick = $(this).attr("href")
	var destination = $(elementClick).offset().top;
	jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
	return false;
});*/


/* tabs*/
$('.tabs li span').click(function () {
	$(this).parents('.tab-wrap').find('.tab-cont').addClass('hide-tab');
	$(this).parent().siblings().removeClass('active');
	var id = $(this).attr('data-href');
	$(id).removeClass('hide-tab');
	$(this).parent().addClass('active');
	return false;
});
$('.subtabs li span').click(function () {
	$(this).parents('.subtab-wrap').find('.subtab-cont').addClass('hide-tab');
	$(this).parent().siblings().removeClass('active');
	var id = $(this).attr('data-href');
	$(id).removeClass('hide-tab');
	$(this).parent().addClass('active');
	return false;
});
/* tabs*/


/*$(window).bind('load', handler);
$(window).bind('resize', handler);*/


