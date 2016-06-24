angular.module('UserService', []).factory('User', function ($http, Storage, $q, $timeout) {
  return {
    signup: function (username, password, confirm) {
      return $http.post(options.api.baseUrl + '/user/signup', {
        username: username,
        password: password,
        confirm: confirm
      });
    },

    signin: function (username, password) {
      return $http.post(options.api.baseUrl + '/user/signin', {
        username: username,
        password: password
      });
    },

    signout: function () {
      var deferred = $q.defer();
      $timeout(function () {
        Storage.clearUserCredentials();
        deferred.resolve();
      }, 0);
      return deferred.promise;
    }
  }
});