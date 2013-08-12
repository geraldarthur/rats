var BASE_LAYER = APP_CONFIG.MAPBOX_BASE_LAYER;
var RETINA_LAYER = APP_CONFIG.MAPBOX_BASE_LAYER_RETINA;
var IS_MOBILE = Modernizr.touch;

$(function() {

	SOUTHWEST_BOUND = [42.2026,-71.2664];
	NORTHWEST_BOUND = [42.4428,-70.9642];

	FastClick.attach(document.body);

	var map = L.mapbox.map('map', BASE_LAYER, {
    detectRetina: true,
    retinaVersion: RETINA_LAYER,
    center: [-71.0599,42.3540],
    minZoom: 13,
    maxZoom: 16,
    scrollWheelZoom: false,
    maxBounds: [
    	SOUTHWEST_BOUND,
    	NORTHWEST_BOUND
		]
  });

	if (IS_MOBILE) {
		map.dragging.disable()
	}

	var geolocate = document.getElementById('geolocate');
	if (!navigator.geolocation) {
	    alert('Geolocation is not available. Please use a modern browser or phone');
	} else {
	    geolocate.onclick = function (e) {
	        e.preventDefault();
	        e.stopPropagation();
	        map.locate();
	    };
	}
	map.on('locationfound', function(e) {
			console.log(e)
	    map.fitBounds(e.bounds);

	    map.markerLayer.setGeoJSON({
	        type: "Feature",
	        geometry: {
	            type: "Point",
	            coordinates: [e.latlng.lng, e.latlng.lat]
	        },
	        properties: {
	            'marker-color': '#fff',
	        }
	    });
	});
	map.on('locationerror', function() {
	    alert('Position could not be found');
	});

});
