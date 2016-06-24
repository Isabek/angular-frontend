angular.
  module('HeaderCtrl', []).
  controller('HeaderController', function ($scope, Page) {
    $scope.Page = Page;
    Page.setTitle("Home");
  });

