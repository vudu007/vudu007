$(document).ready(function () {
  $('#audio-volume').on('change input', function () {
    var audio = $('#audio1')[0];
    audio.volume = $(this).val();
  });

  // GET YEAR
  var dDate = new Date();
  var year = dDate.getFullYear();

  $(".year").html(year);

  // $('.switch').addClass('hide');
  function addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  var d = new Date();
  var date = new Date("March/21/2020");
  var hour = addZero(d.getHours());
  var minutes = addZero(d.getMinutes());
  var seconds = addZero(d.getSeconds());
  var time = minutes + ":" + seconds;
  var interval = setInterval(function () {
    // var timmer = time.split(':');
    // var Min = parseInt(timmer[0], 10);
    // var Sec = parseInt(timmer[1], 10);
    ++seconds;
    hour = (minutes > 59) ? ++hour : hour;
    minutes = (seconds > 59) ? ++minutes : minutes;
    if (hour > 24) clearInterval(interval);
    seconds = (seconds > 59) ? 0 : seconds;
    if (minutes > 59) {
      ++hour;
      minutes = 0;
    }
    $('#countDown').html(hour + ':' + minutes + ':' + addZero(seconds));
    $('#chat-date').html(hour + ':' + minutes);
  }, 1000);
  $('.icon-link').click(function () {
    $('.chat-banner').toggleClass('hide');
    $('.chat-banner').addClass('bounceInRight');
    $('.chat-banner').removeClass('bounceOutRight');
  });
  $('.chat-close').click(function () {
    $('.chat-banner').addClass('bounceOutRight');
  });

  $('#music_playlist').click(function () {
    $('.music_playlist').toggleClass('hide');
    $('.music_playlist').addClass('bounceInRight');
    $('.music_playlist').removeClass('bounceOutRight');
    $('.music_download').addClass('hide');
  });

  $('#img-body').click(function () {
    $('.music_playlist').addClass('bounceOutRight');
    $('.chat-banner').addClass('bounceOutRight');
  });
});