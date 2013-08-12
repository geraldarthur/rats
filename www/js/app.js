var BASE_LAYER = APP_CONFIG.MAPBOX_BASE_LAYER;
var RETINA_LAYER = APP_CONFIG.MAPBOX_BASE_LAYER_RETINA;
var IS_MOBILE = Modernizr.touch;

$(function() {
	var map = L.mapbox.map('map', BASE_LAYER, {
    detectRetina: true,
    retinaVersion: RETINA_LAYER
  })

  if (IS_MOBILE) {
  	map.scrollZoom(false);
  }
});
