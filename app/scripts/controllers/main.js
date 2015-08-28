'use strict';

/**
 * @ngdoc function
 * @name mapsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mapsApp
 */
angular.module('mapsApp')
  .controller('MainCtrl', function ($scope) {

  var map;

	$scope.$on('mapInitialized', function(evt, evtMap) {
    	map = evtMap;
    	$scope.placeMarker = function(e) {
    		console.log(e);
      		var marker = new google.maps.Marker({position: e.latLng, map: map});
      		//map.panTo(e.latLng);
    	}
  });

  });
