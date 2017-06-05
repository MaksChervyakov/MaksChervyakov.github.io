$('header .lang').click(function(){
	$('header .other-lang').css({'display' : 'block'});
});
$('header .other-lang').click(function() {
	$('header .other-lang').css({'display' : 'none'});
});
$(document).ready(function(){
  $('.bxslider').bxSlider({
  	auto: true,
  	controls: false
  });

  $('.popular-hover').hideIn();
  $('.popular-item').hover(function(){
  	$(this).find('.popular-hover').show("slow");
  });
});

