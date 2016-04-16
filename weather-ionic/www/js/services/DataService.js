'use strict';

var weatherApp = angular.module('weatherApp');

weatherApp.service('DataService', ['$http', '$filter', function($http, $filter) {

  var baseUrl = 'http://weather.benoitpasquier.fr/index.php';

  this.requestAllCenters = function() {
    return $http.jsonp(baseUrl + '?c=centers&m=apiGetAllCenters&callback=JSON_CALLBACK');
  }

  this.requestCenterById = function(centerId) {
    return $http.jsonp(baseUrl + '?c=centers&m=apiGetWeather&idCenter='+centerId+'&callback=JSON_CALLBACK');
  }

}]);
