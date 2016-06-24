angular.module('TokenService', []).factory('TokenInterceptor', function ($q, $location, $rootScope, Storage) {
  return {
    request: function (config) {

      $rootScope.progressbar.start();

      config.headers = config.headers || {};
      if (Storage.getToken()) {
        config.headers.Authorization = 'Bearer ' + Storage.getToken();
      }
      return config;
    },
    requestError: function (rejection) {
      $rootScope.progressbar.complete();
      return $q.reject(rejection);
    },

    response: function (response) {
      $rootScope.progressbar.complete();
      return response;
    },
    responseError: function (rejection) {
      $rootScope.progressbar.complete();
      if (rejection != null && rejection.status === 401 && Storage.getToken()) {
        Storage.removeItem('token');
        Storage.removeItem('username');
        $location.path('/signin');
      }

      return $q.reject(rejection);
    }
  };
});