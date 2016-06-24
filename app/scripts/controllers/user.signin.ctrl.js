angular.
  module('UserSigninCtrl', []).
  controller('UserSigninController', function ($scope, $location, $window, User, Flash, Storage, $rootScope, Page) {

    Page.setTitle("Sign In");

    $scope.signin = function signin(username, password) {
      if (username != '' && password != '') {
        User.
          signin(username, password).
          success(function (result) {

            $rootScope.username = result.username;
            $rootScope.userId = result.userId;
            Storage.setCurrentUser(result.username);
            Storage.setToken(result.token);
            Storage.setUserId(result.userId);

            $location.path('/');
            Flash.create('success', result.message, 4000, {}, true);
          }).
          error(function (result) {
            Flash.create('danger', result.message, 4000, {}, true);
          });
      }
    };
  });