$(document).ready(function () {
	$('.fErr input').removeClass('shake');
	$('.eErr input').removeClass('shake');
	$('.mErr textarea').removeClass('shake');
	$(document).on('submit', '#my-form', function (event) {
		event.preventDefault();
		var fname = $('#fname').val();
		var email = $('#email').val();
		var message = $('#message').val();
		if (fname.length == 0 && email.length == 0 && message.length == 0) {
			$('#fname').css('border', '2px solid red');
			$('#email').css('border', '2px solid red');
			$('#message').css('border', '2px solid red');
			$('#form-error').show();
			$('#form-error').text('Please fill out empty fields');
			$('#form-error').css('color', 'red');
			$('#form-error').css('font-weight', 'bold');
			$('.form-group').addClass('shake');
		} else if (fname.length == 0) {
			$('#fname').css('border', '2px solid red');
			$('#ferr').text('Name is required');
			$('#form-error').hide();
			$('.fErr input').addClass('shake');
			$('.eErr input').removeClass('shake');
			$('.mErr textarea').removeClass('shake');
			return false;
		} else if (email.length == 0) {
			$('#eerr').text('Email is required');
			$('#email').css('border', '2px solid red');
			$('#lname').css('border', '2px solid #ced4da');
			$('#fname').css('border', '2px solid #ced4da');
			$('#lerr').text('');
			$('#ferr').text('');
			$('#form-error').hide();
			$('.eErr input').addClass('shake');
			$('.fErr input').removeClass('shake');
			$('.mErr textarea').removeClass('shake');
			return false;
		} else if (!validateEmail(email)) {
			$('#eerr').text('Invalid email Address');
			$('#email').css('border', '2px solid red');
			$('#lname').css('border', '2px solid #ced4da');
			$('#fname').css('border', '2px solid #ced4da');
			$('#lerr').text('');
			$('#ferr').text('');
			$('#form-error').hide();
			$('.eErr input').addClass('shake');
			$('.fErr input').removeClass('shake');
			$('.mErr textarea').removeClass('shake');
			return false;
		} else if (message.length == 0) {
			$('#merr').text('Please type your message');
			$('#message').css('border', '2px solid red');
			$('#email').css('border', '2px solid #ced4da');
			$('#lname').css('border', '2px solid #ced4da');
			$('#fname').css('border', '2px solid #ced4da');
			$('#eerr').text('');
			$('#lerr').text('');
			$('#ferr').text('');
			$('#form-error').hide();
			$('.mErr textarea').addClass('shake');
			$('.fErr input').removeClass('shake');
			$('.eErr input').removeClass('shake');
			return false;
		} else {
			$.ajax({
				url: 'form.php',
				type: 'POST',
				data: {
					'save': 1,
					'fname': fname,
					'email': email,
					'message': message
				},
				success: function (response) {
					// empty the form fields after sumit
					var fname = $('#fname').val('');
					var email = $('#email').val('');
					var message = $('#message').val('');
					$('#form-success').append(response);
				}
			});
			$('.form-success').show();
			$('.contact-form').hide();
			$('footer').hide();
			$('#merr').text('');
			$('#eerr').text('');
			$('#lerr').text('');
			$('#ferr').text('');
			return true;
		}
	});
});

function validateEmail(email) {
	var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	return emailReg.test(email);
}


$('.toggleswitch').click(function () {
	$('.hide-light').toggleClass('active');
	$('.hide-dark').toggleClass('active');
	$('.body-content').toggleClass('active');
	$('.skills-box').toggleClass('active');
	$('#projects').toggleClass('active');
	$('footer').toggleClass('active');
	$('body').toggleClass('dark');
	$('.container').toggleClass('dark');
	$('.btn1').toggleClass('dark');
	$('.correct').toggleClass('dark');
	$('.wrong').toggleClass('dark');
	$('.menu').toggleClass('dark');
	$('.menu-items > a').toggleClass('dark');
	$('.burger > div').toggleClass('dark');
});