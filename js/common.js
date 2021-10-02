$(document).ready(function () {
  new WOW().init();
  $(".scroll-btn").on("click", function (event) {
    event.preventDefault();
    let id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('.mobile-menu').removeClass('mobile-menu-active');
    $('body,html').animate({scrollTop: top}, 1500);
  });
  $(".phone").mask("+7 (999) 999-9999");
  

  function windowSize(){
      if ($(window).width() <= '1200'){
          $('.services-block').unwrap();
      } else {
          
      }
  }
  windowSize()

  $('.mobile-menu-button').on('click', function() {
  	$('.mobile-menu').addClass('mobile-menu-active');
  })
  $('.mobile-menu-close').on('click', function() {
  	$('.mobile-menu').removeClass('mobile-menu-active');
  })
})