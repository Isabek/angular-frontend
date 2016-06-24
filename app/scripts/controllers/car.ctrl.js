'use strict';

angular.
  module('CarCtrl', []).
  controller('CarController', function CarController($scope, $location, $confirm, $routeParams, Car, Flash) {

    $scope.init = {
      'count': 10,
      'page': 1
    };
    $scope.filterBy = {
      'name': ''
    };

    $scope.notSortBy = ['actions'];

    $scope.getCars = function (params, paramsObj) {
      return Car.all(params).then(function (response) {
        if (paramsObj) setParamsToUrl(paramsObj);
        $scope.rows = response.data['cars'];
        return {
          'rows': response.data['cars'],
          'header': headers,
          'sort-by': response.data['sortBy'],
          'sort-order': response.data['sortOrder'],
          'pagination': {
            'count': response.data['limit'],
            'size': response.data['total']
          }
        }
      })
    };

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

    $scope.delete = function (id, index) {
      $confirm({text: 'Are you sure you want to delete?', title: 'Delete', ok: 'Yes', cancel: 'No'})
        .then(function () {
          Car.
            delete(id).
            success(function (result) {
              $scope.rows.splice(index, 1);
              Flash.create('success', result.message, 4000, {}, true);
            }).
            error(function (result) {
              Flash.create('danger', result.message, 4000, {}, true);
            });
        });
    };

    function setParamsToUrl(paramsObj) {
      $location.search('name', paramsObj.filters['name'] ? paramsObj.filters['name'] : null);
      $location.search('page', paramsObj['page']);
      $location.search('sort-by', paramsObj['sortBy']);
      $location.search('sort-order', paramsObj['sortOrder']);
      $location.search('count', paramsObj['count']);
    }

  });