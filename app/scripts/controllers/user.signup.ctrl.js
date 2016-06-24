angular.
  module('UserSignupCtrl', []).
  controller('UserSignupController', function ($scope, $location, $window, User, Flash, Storage, $rootScope, Page) {

    Page.setTitle("Sign Up");

    $scope.signup = function signup(username, password, confirm) {

      if (Storage.getCurrentUser()) {
        $location.path('/');
      } else {
        User.
          signup(username, password, confirm).
          success(function (result) {
            $location.path('/login');
            Flash.create('success', result.message, 4000, {}, true);
          }).
          error(function (result) {
            Flash.create('danger', result.message, 4000, {}, true);
          });
      }
    };
  });