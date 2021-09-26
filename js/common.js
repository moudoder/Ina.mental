$(document).ready(function () {
  new WOW().init();
  $(".scroll-btn").on("click", function (event) {
    event.preventDefault();
    let id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });
  $(".phone").mask("+7 (999) 999-9999");
  
})