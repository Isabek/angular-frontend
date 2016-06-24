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
      when('/cars', {
        templateUrl: 'partials/cars.list.html',
        controller: 'CarController',
        reloadOnSearch: false
      }).
      when('/cars/create', {
        templateUrl: 'partials/cars.create.html',
        controller: 'CarController',
        access: {requiredAuthentication: true}
      }).
      when('/cars/:id/edit', {
        templateUrl: 'partials/cars.edit.html',
        controller: 'CarEditController',
        access: {requiredAuthentication: true}
      }).
      when('/cars/:id/profile', {
        templateUrl: 'partials/cars.profile.html',
        controller: 'CarProfileController'
      }).
      otherwise('/');
  }]);