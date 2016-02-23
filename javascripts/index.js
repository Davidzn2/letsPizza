$(window).load(function() {
	$(".loader").fadeOut("slow");
});
$(document).ready(function() {
	//Inicia función fullpage.js
	$('#fullpage').fullpage({
		sectionsColor : ['#E60000', '#E60000','#E60000','#E60000','#E60000','#E60000'],
		anchors: ['Inicio', 'Nosotros', 'Productos','Galeria','Ubicaciones','Contacto'],
		menu: '#Menu',
		navigation: true,
		scrollingSpeed: 500,
		verticalCentered: true,
		paddingBottom: '70px',
		css3: true
	 	
	});	

	//Menu desplegable
	$('.navbar-toggle').click(function(){
		$('.collapse').toggle('.collapse');
		$('.navbar-brand').hide();
	});
     
});

