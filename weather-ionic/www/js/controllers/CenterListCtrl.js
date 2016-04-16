'use strict';

var weatherApp = angular.module('weatherApp');

weatherApp.controller('CenterListCtrl', ['$scope', '$routeParams', 'DataService',
  function($scope, $routeParams, DataService) {

    $scope.centers;

    $scope.search = function (center) {
        return !!((center.centername.toLowerCase().indexOf($scope.query || '') !== -1 || center.zipcode.toLowerCase().indexOf($scope.query || '') !== -1));
    };

    function init() {
      console.log("Calling init");
      getAllCenters();
    }

    function getAllCenters() {
      console.log("Calling getAllCenters");
      DataService.requestAllCenters()
        .success(function(data) {
          $scope.centers = data.Centers;
        })
        .error(function(data) {
          console.log("Not able to fetch all centers : " + data);
        });
    }

    init();
  }]);
