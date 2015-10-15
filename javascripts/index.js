//Inicia función fullpage.js
$(document).ready(function() {
	$('#fullpage').fullpage({
	sectionsColor : ['#E60000', '#E60000','#E60000','#E60000','#E60000','#E60000'],
	anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage','fifthPage','sixthPage'],
	menu: '#Menu',
	navigation: true,
	scrollingSpeed: 2000,
	css3: true
	 	
	});	
function initialize() {
        var mapCanvas = document.getElementById('map');
        var mapOptions = {
          center: new google.maps.LatLng(19.5356127, -99.2097285),
          zoom: 8,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions)
      }
      google.maps.event.addDomListener(window, 'load', initialize);
  });

 