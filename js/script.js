$(document).ready(function() {

	/* -------------------------------------------- */
	/* Animación del scroll al pulsar el jumpbotron */
	/* -------------------------------------------- */
	$('.js--scroll-to-tours').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-tours').offset().top}, 1000);
    });

	// Animación del scroll al pulsar el botón del modal
	$('.js--scroll-to-book').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-book').offset().top}, 1000);
    });

});

/* ------------------------------------------------------ */
/* Función de cerrar el menú de navegación al hacer click */
/* ------------------------------------------------------ */
function closeNav() {
	document.getElementById('navi-toggle').checked = false;
}
