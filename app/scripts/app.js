'use strict';

angular.module('app', [
  'ngRoute', 'Routes',
  'HomeCtrl', 'UserCtrl', 'NavigationCtrl',
  'AuthenticationService', 'UserService', 'StorageService',
  'ngFlash'
]);