angular.module('CarService', []).factory('Car', function ($http) {
  return {
    all: function (page) {
      page = parseInt(page) || 1;
      return $http.get(options.api.baseUrl + '/car/?page=' + page);
    },
    create: function (car) {
      return $http.post(options.api.baseUrl + '/car/', {
        name: car.name,
        mark: car.mark,
        type: car.type,
        price: car.price
      });
    },
    read: function (id) {
      return $http.get(options.api.baseUrl + '/car/' + id);
    },
    edit: function (id, car) {
      return $http.put(options.api.baseUrl + '/car/' + id, {
        name: car.name,
        mark: car.mark,
        type: car.type,
        price: car.price
      });
    },
    delete: function (id, car) {
      return $http.delete(options.api.baseUrl + '/car/' + id);
    }
  }
});