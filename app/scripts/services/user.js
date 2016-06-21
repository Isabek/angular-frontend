angular.module('UserService', []).factory('User', function ($http) {
  return {
    signup: function (username, password, confirm) {
      return $http.post(options.api.baseUrl + '/users/signup', {
        username: username,
        password: password,
        confirm: confirm
      });
    }
  }
});