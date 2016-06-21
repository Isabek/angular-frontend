angular.
  module('Routes', []).
  config(['$routeProvider', '$locationProvider', function ($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/home.html',
        controller: 'HomeController'
      }).
      when('/signup', {
        templateUrl: 'partials/user.signup.html',
        controller: 'UserController'
      }).
      when('/signin', {
        templateUrl: 'partials/user.signin.html',
        controller: 'UserController'
      }).
      otherwise('/');
  }]);