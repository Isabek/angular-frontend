angular.module('StorageService', []).factory('Storage', function ($window) {
  return {
    getCurrentUser: function () {
      return $window.localStorage.getItem('username');
    },
    setCurrentUser: function (username) {
      $window.localStorage.setItem('username', username);
    },
    setToken: function (token) {
      $window.localStorage.setItem('token', token);
    },
    getToken: function () {
      return $window.localStorage.getItem('token');
    },
    setUserId: function (userId) {
      $window.localStorage.setItem('userId', userId);
    },
    getUserId: function () {
      return $window.localStorage.getItem('userId');
    },
    clearUserCredentials: function () {
      $window.localStorage.removeItem('userId');
      $window.localStorage.removeItem('username');
      $window.localStorage.removeItem('token');
    }
  }
});
