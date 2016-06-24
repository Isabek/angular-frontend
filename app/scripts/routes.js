angular.
  module('Routes', []).
  config(['$routeProvider', '$locationProvider', function ($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/home.html',
        controller: 'HeaderController'
      }).
      when('/signup', {
        templateUrl: 'partials/user.signup.html',
        controller: 'UserSignupController'
      }).
      when('/signin', {
        templateUrl: 'partials/user.signin.html',
        controller: 'UserSigninController'
      }).
      when('/cars', {
        templateUrl: 'partials/cars.list.html',
        controller: 'CarController',
        reloadOnSearch: false
      }).
      when('/cars/create', {
        templateUrl: 'partials/cars.create.html',
        controller: 'CarCreateController',
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