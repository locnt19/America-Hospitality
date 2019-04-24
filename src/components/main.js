
$(document).ready(function () {
	// All script write here
	const ProjectPhotoSwiper = new Swiper('.history .swiper-container', {
		slidesPerView: 1,
		loop: true,
		spaceBetween: 30,
		navigation: {
			prevEl: '.history .lnr.lnr-chevron-left',
			nextEl: '.history .lnr.lnr-chevron-right'
		}
	})
	// Product Tab
	$('.map nav a').on('click', function (e) {
		e.preventDefault()
		$(this).addClass('active')
		$('.map nav a').not(this).removeClass('active')
		$('.map .pcontent').not(target).hide()
		var target = $(this).attr('href')
		$(target).fadeIn()
	})
});
