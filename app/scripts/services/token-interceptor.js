angular.module('TokenService', []).factory('TokenInterceptor', function ($q, $location, Storage) {
  return {
    request: function (config) {
      config.headers = config.headers || {};
      if (Storage.getToken()) {
        config.headers.Authorization = 'Bearer ' + Storage.getToken();
      }
      return config;
    },
    requestError: function (rejection) {
      return $q.reject(rejection);
    },
    responseError: function (rejection) {
      if (rejection != null && rejection.status === 401 && Storage.getToken()) {
        Storage.removeItem('token');
        Storage.removeItem('username');
        $location.path('/signin');
      }

      return $q.reject(rejection);
    }
  };
});