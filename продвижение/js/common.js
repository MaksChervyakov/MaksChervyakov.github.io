$(document).ready(function(){
    if (!device.tablet() && !device.mobile()) {
    	$(".player").mb_YTPlayer();
    } else {
    	//если мобильные девайсы
    	$("#bgndVideo").removeClass("player");	
    }



    $(".phone-js").mask("+9 (999) 999-99-99");
	$('.bxslider').bxSlider();



	$("header .col-md-6").animated("pulse", "zoomOutDown");
	$("header form").animated("fadeInDown", "zoomOutDown");
	$(".title-white, .title-black").animated("zoomInUp", "zoomOutDown");
	$(".request input").animated("fadeInLeft", "zoomOutDown");
	$(".request button").animated("fadeInRight", "zoomOutDown");
	$(".differences-other").animated("fadeInLeft", "zoomOutDown");
	$(".differences-we").animated("fadeInRight", "zoomOutDown");
	$(".remodal .title-black").removeClass("animated");


	$('[data-remodal-id=modal]').remodal();


	/*
	//E-mail Ajax Send
	$("form").submit(function() { //Change
		swal({   title: "Ошибка!",   text: "Проверьте данные!",   type: "error",   confirmButtonText: "Ок" });
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			sweetAlert("Спасибо!", "Ваша заявка успешно отправлена", "success");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
	*/
});