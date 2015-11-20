$(window).load(function() {
	$(".loader").fadeOut("slow");
});
$(document).ready(function() {
	//Inicia función fullpage.js
	$('#fullpage').fullpage({
		sectionsColor : ['#E60000', '#E60000','#E60000','#E60000','#E60000','#E60000'],
		anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage','fifthPage','sixthPage'],
		menu: '#Menu',
		navigation: true,
		scrollingSpeed: 2000,
		verticalCentered: true,
		
		paddingBottom: '70px',
		css3: true
	 	
	});	

	google.maps.event.addDomListener(window, 'load', initialize);
	//Inicia el Mapa
	function initialize() {
		var mapCanvas = document.getElementById('map');
		//Localizacion de un lugar
		var samara = {lat:19.3681056, lng:-99.261238};
		var mapOptions = {
			center: new google.maps.LatLng(samara),
			zoom: 16,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		}
		var map = new google.maps.Map(mapCanvas, mapOptions)
		//agrega una localizacion en marcador
		var marker =new google.maps.Marker({
	    position: samara,
	    map: map,
	    title: 'Proximamente en Samara'
	  });
	}

	//Menu desplegable
	$('.navbar-toggle').click(function(){
		$('.collapse').toggle('.collapse');
		$('.navbar-brand').hide();
	});
     
});

