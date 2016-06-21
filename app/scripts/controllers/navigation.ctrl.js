angular.
  module('NavigationCtrl', []).
  controller('NavigationController', function ($scope, $rootScope, Storage, User, $location, Flash, Authentication) {
    $rootScope.username = Storage.getCurrentUser();

    $scope.signout = function () {
      User.signout().then(function () {
        Authentication.isAuthenticated = false;
        $rootScope.username = null;
        $location.path('/');
        Flash.create('success', 'You have successfully logged out', 3000, {}, true);
      });
    }
  });