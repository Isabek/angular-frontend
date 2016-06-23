'use strict';

angular.module('CarCtrl', []).controller('CarController', function CarController($scope, Car, Flash) {

  $scope.$on('$locationChangeStart', function (event) {
    $scope.all();
  });

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
});