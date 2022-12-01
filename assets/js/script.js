$(document).ready(function () {
	$('.header-bar').on('click', function (e) {
		$('.header-navbar').addClass('active');
		$('body').addClass('stop-scrolling');
	});

	$('.header-navbar').on('click', function (e) {
		if ($(e.target).closest('.header-navbar ul').length <= 0) {
			$('.header-navbar').removeClass('active');
			$('body').removeClass('stop-scrolling');
		}
	});


	//products
	$('.product-tab a').on('click', function (e) {
		const tab_target = $(this).attr('tab-target');
		$('.product-list').removeClass('active');
		$('.product-tab a').removeClass('active');
		$(this).addClass('active');
		$(tab_target).addClass('active');
	});

	$('.client-say-slick').slick({
		dots: true,
		arrows: false,
	});

	// click vào site-footer-nav_heading
	$('.site-footer-nav_heading').on('click', function (e) {
		// remove class active ở mọi nav_list
		const footer_list = $('.site-footer-nav_heading').next();
		footer_list.removeClass('active');

		// thêm class active ở cùng cấp với site-footer-nav_heading được clich (this)
		const this_list = $(this).next();
		this_list.addClass('active');
	});
});
