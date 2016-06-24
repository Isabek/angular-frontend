'use strict';

angular.
  module('CarProfileCtrl', []).
  controller('CarProfileController', function CarProfileController($scope, $location, $routeParams, Car, Flash, Page) {

    Page.setTitle("Car Profile");

    Car.
      read($routeParams.id).
      success(function (result) {
        $scope.car = result.data;
      }).
      error(function (result) {
        Flash.create('danger', result.message, 4000, {}, true);
      });
  });