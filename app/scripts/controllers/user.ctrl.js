angular.
  module('UserCtrl', []).
  controller('UserController', function ($scope, $location, Authentication, User, Flash) {
    $scope.signup = function signup(username, password, confirm) {

      if (Authentication.isAuthenticated) {
        $location.path('/');
      } else {
        User.
          signup(username, password, confirm).
          success(function (result) {
            $location.path('/');
            Flash.create('success', result.message, 4000, {}, true);
          }).
          error(function (result) {
            Flash.create('danger', result.message, 4000, {}, true);
          });
      }
    }
  });