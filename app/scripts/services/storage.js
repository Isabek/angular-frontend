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
    removeItem: function (item) {
      $window.localStorage.removeItem(item);
    }
  }
});
