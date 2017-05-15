


$('.for-modal').magnificPopup();


$('.theme-swither .themes-open').css({'display' : 'none'});
$('.theme-swither .themes-close').click(function() {
  $('.theme-swither').css({'left' : '-291px'});
  $('.theme-swither .themes-open').css({'display' : 'inline-block'});
});

$('.theme-swither .themes-open').click(function() {
  $('.theme-swither').css({'left' : '0px'});
  $('.theme-swither .themes-open').css({'display' : 'none'});
});

$('.theme-swither div').click(function(){
  $('.theme-swither div').removeClass('theme-active');
  $(this).addClass('theme-active');
});
$('.yellow').click(function(){
  $('#body').removeClass();
  $('#body').addClass('yellow-theme');
  $('.sprite-blue-number').css({'display' : 'none'});
  $('.sprite2').css({'display' : 'block'});
});
$('.blue').click(function(){
  $('#body').removeClass();
  $('#body').addClass('blue-theme');
  $('.sprite2').css({'display' : 'none'});
  $('.sprite-blue-number').css({'display' : 'block'});
});
$('.green').click(function(){
  $('#body').removeClass();
  $('#body').addClass('green-theme');
});
$('.red').click(function(){
  $('#body').removeClass();
  $('#body').addClass('red-theme');
});


 $('header ul li').click(function() {
  $('ul li').removeClass('active-li');
  $(this).addClass("active-li");
});

 $('.portfolio ul li').click(function(){
  $('ul li').removeClass('portfolio-li-active');
  $(this).addClass("portfolio-li-active");
});


 

 $('.portfolio-img').magnificPopup({type:'image'});

 

 

 jQuery(function($){
  $(".phone-js").mask("+9 (999) 999-99-99");
});


      //анимация
      $(".logo").animated("zoomInUp", "fadeOut");
      $("header .head-main .slide").animated("fadeIn","zoomOutDown");
      $(".title, .title-right, .title-underline").animated("zoomInUp", "zoomOutDown");
      $(".controls").animated("bounceInRight","zoomOutDown");
      $(".services-item p").animated("fadeIn","fadeOut");
      $(".process-item").animated("fadeInLeft","fadeOutLeft");

      //Прокрутка
      $('header a, .top, .link-down a, .footer-menu a').mPageScroll2id({
        offset: 0
      });



      $('.head-main').slick({
        dots: true,
        arrows: false
      });

       $('.reviews-slider').slick({
        dots: true,
        arrows: true
      });

       var mixer = mixitup('.portfolio');

 $('.portfolio-slider').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
      infinite: true,
      dots: true
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
          ]
  });

 $('.slick-prev').html('<i class="fa fa-angle-left" aria-hidden="true"></i>');
 $('.slick-next').html('<i class="fa fa-angle-right" aria-hidden="true"></i>');