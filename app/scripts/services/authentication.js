angular.
  module('AuthenticationService', []).
  factory('Authentication', function () {
    return {
      isAuthenticated: false
    }
  });