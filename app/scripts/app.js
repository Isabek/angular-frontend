'use strict';

angular.
  module('app', [
    'ngRoute', 'Routes',
    'HomeCtrl', 'UserCtrl', 'NavigationCtrl', 'CarCtrl', 'CarEditCtrl',
    'AuthenticationService', 'UserService', 'StorageService', 'CarService', 'TokenService',
    'ngFlash', 'ngProgress'
  ]).
  config(function ($httpProvider) {
    $httpProvider.interceptors.push('TokenInterceptor');
  }).
  run(function ($rootScope, $location, Authentication, Storage, Flash, ngProgressFactory) {

    $rootScope.progressbar = ngProgressFactory.createInstance();

    $rootScope.$on('$routeChangeStart', function (event, nextRoute, currentRoute) {
      if (nextRoute != null && nextRoute.access != null && nextRoute.access.requiredAuthentication && !Storage.getToken()) {
        $location.path('/signin');
        Flash.create('danger', "You should login to do this action", 4000, {}, true);
      }
    });
  });