'use strict';

angular.module('CarCtrl', []).controller('CarController', function CarController($scope, $location, Car, Flash) {

  $scope.cars = [];
  $scope.all = function () {
    Car.
      all().
      success(function (result) {
        $scope.cars = result.data;
      }).
      error(function (result) {
        Flash.create('danger', result.message, 4000, {}, true);
      });
  }();

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