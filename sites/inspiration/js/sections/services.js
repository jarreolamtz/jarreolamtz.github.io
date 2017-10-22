$("form input, form textarea").focus(function(){
	$(this).prev().fadeOut();
	$(this).removeClass("failed");
	$("form button span.text").text("Enviar Mensaje");
});
$("form input, form textarea").focusout(function(){
	if( $(this).val() === "" ) {
		$(this).prev().fadeIn();
		$(this).addClass("failed");
	}
});
$("form .inputDiv span").click(function(){
	$(this).next().focus();
});

$("form button").submit(function(){
	$("form button").prop('disabled', true);
});

$(".successMessage .close-icon, .successMessage .button-stroke").click(function(){
	$(".successMessage").fadeOut();
});