let myApp = angular.module("newApp", []);
myApp.controller("myController", function ($scope) {
  $scope.sum = function () {
    $scope.total = Number($scope.number1) + Number.parseInt($scope.number2);
  };
});
