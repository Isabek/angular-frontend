angular.module('CarService', []).factory('Car', function ($http) {
  return {
    all: function () {
      return $http.get(options.api.baseUrl + '/car/');
    }
  }
});