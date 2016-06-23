'use strict';

angular.module('app', [
  'ngRoute', 'Routes',
  'HomeCtrl', 'UserCtrl', 'NavigationCtrl', 'CarCtrl',
  'AuthenticationService', 'UserService', 'StorageService', 'CarService',
  'ngFlash'
]);