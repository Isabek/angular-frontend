'use strict';

angular.
  module('CarCtrl', []).
  controller('CarController', function CarController($scope, $location, $confirm, $routeParams, Car, Flash, Storage, Page) {

    Page.setTitle("Cars List");

    $scope.init = {
      'count': 10,
      'page': 1
    };
    $scope.filterBy = {
      'name': ''
    };

    $scope.notSortBy = ['actions'];


    $scope.getCars = function (params, paramsObj) {

      if (!Storage.getCurrentUser() && headers.length == 5) {
        headers.splice(4);
      } else if (headers.length == 4 && Storage.getCurrentUser()) {
        headers.push({
          "name": "Actions",
          "key": "actions"
        });
      }

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