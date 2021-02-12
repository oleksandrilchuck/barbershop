$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });

	$('.team__slider').slick({
		arrows: false,
		dots: true,
		infinite: true,
		variableWidth: true,
		adaptiveHeight: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		centerMode: true,
		autoplay:true,
        speed:1000,
		autoplaySpeed:5800,
		responsive: [
			{
			  breakpoint: 380,
			  settings: {
				infinite: true,
				arrows: false,
				centerMode: true,
				slidesToShow: 1
			  }
			}
		  ]
	});

	$('.reviews__slider').slick({
		arrows: true,
		adaptiveHeight: true,
		slidesToShow: 1,
		responsive:[
			{
				breakpoint: 640,
				settings: {
					arrows: false,
					dots: true,
				}
			}
		]


	});
});

$(function () {
	var $videoContainer = $('#video'),
		$videoControls = $('.video-control'),
		$video = $('#myVideo')[0];

	$videoControls.click(function () {
		if ($video.paused) {
			$video.play();
			$videoContainer.addClass('video-is-playing');
		} else {
			$video.pause();
			$videoContainer.removeClass('video-is-playing');
			//	возвращаем постер
			$video.load();
		}
	});
});

$(document).ready(function() {
		
});