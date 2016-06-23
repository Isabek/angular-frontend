angular.module('CarService', []).factory('Car', function ($http) {
  return {
    all: function () {
      return $http.get(options.api.baseUrl + '/car/');
    },
    create: function (car) {
      return $http.post(options.api.baseUrl + '/car/', {
        name: car.name,
        mark: car.mark,
        type: car.type,
        price: car.price
      });
    }
  }
});