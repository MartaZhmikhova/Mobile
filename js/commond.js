

$(document).ready(function(){

  //fullpage
    $('#wrap_content').fullpage({
      scrollingSpeed: 600,
      menu: '#navigation'
    });

  //burger
  $(".burger").click(function(){
      $(this).next().slideToggle();
  });

  $('.burger').click(function(){
    $('header').toggleClass('willGrow ');
    $('.burger').toggleClass('opened');
    $('.top_menu').click(function(){
      $('header').removeClass('willGrow');
      $('.burger').removeClass('opened');
      $(".top_menu").css("display","none");
    });
  });

  //carousel slaider
  $(".home_carousel").owlCarousel({
      items: 1,
      dots: true,
      autoplay: true,
      autoplayTimeout: 5000,
      smartSpeed: 600,
      loop: true
  });

  //scroll mouse
      $(".scroll").click(function(event){
          event.preventDefault();
          var id  = $(this).attr('href'),
              top = $(id).offset().top;
          $("html, body").animate({
              scrollTop: top}, 1000);
      });

      //modal window
          $('.js-overlay-campaign').fadeIn();
          $('.js-overlay-campaign').addClass('disabled');
          $('.js-close-campaign').click(function() {
              $('.js-overlay-campaign').fadeOut();
          });
          $(document).mouseup(function (e) {
              var popup = $('.js-popup-campaign');
              if (e.target!=popup[0]&&popup.has(e.target).length === 0){
                  $('.js-overlay-campaign').fadeOut();
              }
          });
          $(window).on('load', function () {
              setTimeout(function(){
                  if($('.js-overlay-campaign').hasClass('disabled')) {
                      return false;
                  } else {
                      $(".js-overlay-campaign").fadeIn();
                  }
              }, 10000);
          });
                
});
