$('.input-block input').focusin(function(){
	$(this).parent().addClass('offer-focus-input');
});
$('.input-block input').focusout(function(){
	$(this).parent().removeClass('offer-focus-input');
});


