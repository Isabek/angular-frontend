angular.
  module('NavigationCtrl', []).
  controller('NavigationController', function ($scope, $rootScope, Storage, User, $location, Flash) {
    $rootScope.username = Storage.getCurrentUser();
    $rootScope.userId = Storage.getUserId();

    $scope.signout = function () {
      User.signout().then(function () {
        $rootScope.username = null;
        $rootScope.userId = null;
        $location.path('/');
        Flash.create('success', 'You have successfully logged out', 3000, {}, true);
      });
    };

    $scope.isActive = function (currentPath) {
      return currentPath === $location.path();
    };

  });