'use strict';

angular.module('app', [
  'ngRoute', 'Routes',
  'HomeCtrl', 'UserCtrl',
  'AuthenticationService', 'UserService',
  'ngFlash'
]);