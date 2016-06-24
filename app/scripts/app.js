'use strict';

angular.
  module('app', [
    'ngRoute', 'Routes',
    'UserSignupCtrl', 'UserSigninCtrl', 'NavigationCtrl', 'CarCtrl', 'CarEditCtrl', 'CarProfileCtrl', 'HeaderCtrl', 'CarCreateCtrl',
    'UserService', 'StorageService', 'CarService', 'TokenService', 'PageService',
    'ui.bootstrap',
    'ngFlash', 'ngProgress', 'angular-confirm', 'angularUtils.directives.dirPagination', 'ngTasty'
  ]).
  config(function ($httpProvider) {
    $httpProvider.interceptors.push('TokenInterceptor');
  }).
  run(function ($rootScope, $location, Storage, Flash, ngProgressFactory) {

    $rootScope.progressbar = ngProgressFactory.createInstance();

    $rootScope.$on('$routeChangeStart', function (event, nextRoute, currentRoute) {
      if (nextRoute != null && nextRoute.access != null && nextRoute.access.requiredAuthentication && !Storage.getToken()) {
        $location.path('/signin');
        Flash.create('danger', "You should login to do this action", 4000, {}, true);
      }
    });
  });