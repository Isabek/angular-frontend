angular.
  module('Routes', []).
  config(['$routeProvider', '$locationProvider', function ($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/home.html',
        controller: 'HomeController'
      }).
      otherwise('/');
  }]);