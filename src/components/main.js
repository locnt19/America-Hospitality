
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
});
