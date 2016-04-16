'use strict';

var weatherApp = angular.module('weatherApp');

weatherApp.controller('CenterDetailCtrl', ['$scope', '$routeParams', 'DataService',
  function($scope, $routeParams, DataService) {

    $scope.center;
    $scope.weather;

    function init() {

      console.log("Calling init");
      console.log($scope.center);

      DataService.requestCenterById($routeParams.centerId).success(function(data) {
        console.log(data);
        $scope.center = data.center;
      }).error(function(data) {
        console.log("Not able to fetch center detail data : " + data);
      });

    }

    init();
  }]);
