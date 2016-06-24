'use strict';

angular.
  module('CarEditCtrl', []).
  controller('CarEditController', function CarEditController($scope, $location, $routeParams, Car, Flash, Page) {

    Page.setTitle("Car Edit");
    $scope.car = {};

    Car.
      read($routeParams.id).
      success(function (result) {
        $scope.car = result.data;
      }).
      error(function (result) {
        Flash.create('danger', result.message, 4000, {}, true);
      });

    $scope.edit = function (id, car) {
      Car.
        edit(id, car).
        success(function (result) {
          $location.path('/cars');
          Flash.create('success', result.message, 4000, {}, true);
        }).
        error(function (result) {
          var message = result && result.message || 'Something happened on this page. Please, try again later';
          Flash.create('danger', message, 4000, {}, true);
        });
    };
  });