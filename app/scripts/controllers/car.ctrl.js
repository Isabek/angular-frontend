'use strict';

angular.module('CarCtrl', []).controller('CarController', function CarController($scope, $location, $confirm, $routeParams, Car, Flash) {

  $scope.cars = [];
  $scope.totalCars = 0;
  $scope.page = 1;
  $scope.perPage = 10;

  $scope.pagination = {
    current: 1
  };

  function getCars(page) {
    page = page || 1;
    Car.
      all(page).
      success(function (result) {
        $scope.cars = result.data;
        $scope.totalCars = result.total;
        $location.search('page', page);
        $scope.pagination.current = page;
      }).
      error(function (result) {
        Flash.create('danger', result.message, 4000, {}, true);
      });
  }

  getCars($routeParams.page || 1);

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

  $scope.delete = function (id) {
    $confirm({text: 'Are you sure you want to delete?', title: 'Delete', ok: 'Yes', cancel: 'No'})
      .then(function () {
        Car.
          delete(id).
          success(function (result) {
            $location.path('/cars');
            getCars();
            Flash.create('success', result.message, 4000, {}, true);
          }).
          error(function (result) {
            Flash.create('danger', result.message, 4000, {}, true);
          });
      });
  };


  $scope.pageChanged = function (page) {
    getCars(page);
  }

});