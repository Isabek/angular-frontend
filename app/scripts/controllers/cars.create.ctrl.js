'use strict';

angular.
  module('CarCreateCtrl', []).
  controller('CarCreateController', function CarController($scope, $location, $confirm, $routeParams, Car, Flash, Page) {

    Page.setTitle("Car Create");

    $scope.create = function (car) {
      Car.
        create(car).
        success(function (result) {
          $location.path('/cars');
          Flash.create('success', result.message, 4000, {}, true);
        }).
        error(function (result) {
          Flash.create('danger', result.message, 4000, {}, true);
        });
    };

  });