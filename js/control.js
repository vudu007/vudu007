$(document).ready(function () {


	$('#home-menu').click(function () {
		$('.switch').delay(1900).addClass('hide');
		$('#volume').delay(1900).addClass('hide');
	});
	$('#about-menu').click(function () {
		$('.switch').removeClass('hide');
	});
	$('#project-menu').click(function () {
		$('.switch').removeClass('hide');
	});
	$('#counter-menu').click(function () {
		$('.switch').removeClass('hide');
	});
	$('#contact-menu').click(function () {
		$('.switch').removeClass('hide');
	});
	$('.btn1').click(function () {
		$('.switch').removeClass('hide');
	});


	$('.burger-icon').click(function () {
		$('aside').addClass('aside-open');
		$('.body-overlay').addClass('body-overlay-show');
		$('#fname').val('');
		$('#email').val('');
		$('#phone').val('');
		$('#message').val('');
	});


	$('#navclose').click(function () {
		$('aside').removeClass('aside-open');
		$('.body-overlay').removeClass('body-overlay-show');
	});


	$('.body-overlay').click(function () {
		$(this).removeClass('body-overlay-show');
		$('aside').removeClass('aside-open');
	});



	$('#home-menu').click(function () {
		$('.home').delay(1300).fadeIn(1800);
		$('#contact').fadeOut(1400);
		$('footer').fadeOut(1400);
		$('#about').fadeOut(1400);
		$('#counter').fadeOut(1400);
		$('#projects').fadeOut(1400);
		$('#gallery').fadeOut(1400);
		$('#home-menu').addClass('nav-active');
		$('#about-menu').removeClass('nav-active');
		$('#project-menu').removeClass('nav-active');
		$('#counter-menu').removeClass('nav-active');
		$('#contact-menu').removeClass('nav-active');
		$('aside').removeClass('aside-open');
		$('.body-overlay').removeClass('body-overlay-show');
		$('#merr').text('');
		$('#perr').text('');
		$('#eerr').text('');
		$('#lerr').text('');
		$('#ferr').text('');
		$('#message').css('border', '1px solid #ced4da');
		$('#phone').css('border', '1px solid #ced4da');
		$('#email').css('border', '1px solid #ced4da');
		$('#lname').css('border', '1px solid #ced4da');
		$('#fname').css('border', '1px solid #ced4da');
		$('#form-error').hide();
		$('.chat-banner').addClass('hide');
		$('.music_playlist').addClass('hide');
	});



	$('#about-menu').click(function () {
		$('#about').delay(1300).fadeIn(1800);
		$('footer').delay(1300).fadeIn(1900);
		$('#contact').fadeOut(1400);
		$('.home').fadeOut(1400);
		$('#counter').fadeOut(1400);
		$('#projects').fadeOut(1400);
		$('#gallery').fadeOut(1400);
		$('#about-menu').addClass('nav-active');
		$('#home-menu').removeClass('nav-active');
		$('#project-menu').removeClass('nav-active');
		$('#counter-menu').removeClass('nav-active');
		$('#contact-menu').removeClass('nav-active');
		$('aside').removeClass('aside-open');
		$('.body-overlay').removeClass('body-overlay-show');
		$('#merr').text('');
		$('#perr').text('');
		$('#eerr').text('');
		$('#lerr').text('');
		$('#ferr').text('');
		$('#message').css('border', '1px solid #ced4da');
		$('#phone').css('border', '1px solid #ced4da');
		$('#email').css('border', '1px solid #ced4da');
		$('#lname').css('border', '1px solid #ced4da');
		$('#fname').css('border', '1px solid #ced4da');
		$('#form-error').hide();

	});



	$('#project-menu').click(function () {

		$('#projects').delay(1300).fadeIn(1800);
		$('footer').delay(1300).fadeIn(1900);
		$('#contact').fadeOut(1400);
		$('.home').fadeOut(1400);
		$('#about').fadeOut(1400);
		$('#counter').fadeOut(1400);
		$('#gallery').fadeOut(1400);
		$('#project-menu').addClass('nav-active');
		$('#home-menu').removeClass('nav-active');
		$('#about-menu').removeClass('nav-active');
		$('#counter-menu').removeClass('nav-active');
		$('#contact-menu').removeClass('nav-active');
		$('aside').removeClass('aside-open');
		$('.body-overlay').removeClass('body-overlay-show');
		$('#merr').text('');
		$('#perr').text('');
		$('#eerr').text('');
		$('#lerr').text('');
		$('#ferr').text('');
		$('#message').css('border', '1px solid #ced4da');
		$('#phone').css('border', '1px solid #ced4da');
		$('#email').css('border', '1px solid #ced4da');
		$('#lname').css('border', '1px solid #ced4da');
		$('#fname').css('border', '1px solid #ced4da');
		$('#form-error').hide();

	});

	$('#counter-menu').click(function () {

		$('#counter').delay(1300).fadeIn(1800);
		$('footer').delay(1300).fadeIn(1900);
		$('#contact').fadeOut(1400);
		$('.home').fadeOut(1400);
		$('#about').fadeOut(1400);
		$('#projects').fadeOut(1400);
		$('#gallery').fadeOut(1400);
		$('#counter-menu').addClass('nav-active');
		$('#home-menu').removeClass('nav-active');
		$('#about-menu').removeClass('nav-active');
		$('#project-menu').removeClass('nav-active');
		$('#contact-menu').removeClass('nav-active');
		$('aside').removeClass('aside-open');
		$('.body-overlay').removeClass('body-overlay-show');
		$('#merr').text('');
		$('#perr').text('');
		$('#eerr').text('');
		$('#lerr').text('');
		$('#ferr').text('');
		$('#message').css('border', '1px solid #ced4da');
		$('#phone').css('border', '1px solid #ced4da');
		$('#email').css('border', '1px solid #ced4da');
		$('#lname').css('border', '1px solid #ced4da');
		$('#fname').css('border', '1px solid #ced4da');
		$('#form-error').hide();

	});


	$('#contact-menu').click(function () {

		$('#contact').delay(1300).fadeIn(1800);
		$('.home').fadeOut(1400);
		$('#about').fadeOut(1400);
		$('#projects').fadeOut(1400);
		$('#counter').fadeOut(1400);
		$('#gallery').fadeOut(1400);
		$('#contact-menu').addClass('nav-active');
		$('#home-menu').removeClass('nav-active');
		$('#counter-menu').removeClass('nav-active');
		$('#about-menu').removeClass('nav-active');
		$('#project-menu').removeClass('nav-active');
		$('aside').removeClass('aside-open');
		$('.body-overlay').removeClass('body-overlay-show');
		$('#merr').text('');
		$('#perr').text('');
		$('#eerr').text('');
		$('#lerr').text('');
		$('#ferr').text('');
		$('#message').css('border', '1px solid #ced4da');
		$('#phone').css('border', '1px solid #ced4da');
		$('#email').css('border', '1px solid #ced4da');
		$('#lname').css('border', '1px solid #ced4da');
		$('#fname').css('border', '1px solid #ced4da');
		$('#form-error').hide();
		$('.fErr input').removeClass('shake');
		$('.eErr input').removeClass('shake');
		$('.pErr input').removeClass('shake');
		$('.mErr textarea').removeClass('shake');
		$('#fname').val('');
		$('#email').val('');
		$('#phone').val('');
		$('#message').val('');

	});


	$('.btn1').click(function () {

		$('#contact').delay(1300).fadeIn(1800);
		$('footer').delay(1300).fadeIn(1900);
		$('.home').fadeOut(1400);
		$('#about').fadeOut(1400);
		$('#projects').fadeOut(1400);
		$('#counter').fadeOut(1400);
		$('#gallery').fadeOut(1400);
		$('#contact-menu').addClass('nav-active');
		$('#home-menu').removeClass('nav-active');
		$('#counter-menu').removeClass('nav-active');
		$('#about-menu').removeClass('nav-active');
		$('#project-menu').removeClass('nav-active');
		$('aside').removeClass('aside-open');
		$('.body-overlay').removeClass('body-overlay-show');
		$('#merr').text('');
		$('#perr').text('');
		$('#eerr').text('');
		$('#lerr').text('');
		$('#ferr').text('');
		$('#message').css('border', '1px solid #ced4da');
		$('#phone').css('border', '1px solid #ced4da');
		$('#email').css('border', '1px solid #ced4da');
		$('#lname').css('border', '1px solid #ced4da');
		$('#fname').css('border', '1px solid #ced4da');
		$('.fErr input').removeClass('shake');
		$('.eErr input').removeClass('shake');
		$('.pErr input').removeClass('shake');
		$('.mErr textarea').removeClass('shake');

	});


	$('.all-p').click(function () {

		$('.WepAPP').show(1300);
		$('.WebPP').show(1300);
		$('.WordPressPP').show(1300);
		$('.all-p').delay(800).addClass('pactive');
		$('.wepapp-p').removeClass('pactive');
		$('.web-p').removeClass('pactive');
		$('.wordpress-p').removeClass('pactive');

	});


	$('.wepapp-p').click(function () {

		$('.WepAPP').show(1300);
		$('.WebPP').hide(1300);
		$('.WordPressPP').hide(1300);
		$('.wepapp-p').delay(800).addClass('pactive');
		$('.all-p').removeClass('pactive');
		$('.web-p').removeClass('pactive');
		$('.wordpress-p').removeClass('pactive');

	});


	$('.wordpress-p').click(function () {

		$('.WordPressPP').show(1300);
		$('.WebPP').hide(1300);
		$('.WepAPP').hide(1300);
		$('.wordpress-p').delay(800).addClass('pactive');
		$('.all-p').removeClass('pactive');
		$('.wepapp-p').removeClass('pactive');
		$('.web-p').removeClass('pactive');

	});


	$('.web-p').click(function () {

		$('.WebPP').show(1300);
		$('.WepAPP').hide(1300);
		$('.WordPressPP').hide(1300);
		$('.web-p').delay(800).addClass('pactive');
		$('.all-p').removeClass('pactive');
		$('.wepapp-p').removeClass('pactive');
		$('.wordpress-p').removeClass('pactive');

	});
});