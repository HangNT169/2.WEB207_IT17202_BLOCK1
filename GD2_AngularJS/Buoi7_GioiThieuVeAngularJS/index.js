// B1: Tao module
var myApp = angular.module("myModule", []);

// B2: Tao controller
// C1: Viet ham cu the
// myApp.controller("myController", hello);

// // scope: Là 1 service.
// // Là cầu nối giữa model vs view
// function hello($scope) {
//   $scope.message = "Ahihi do ngoc";
// }

// C2: ham k tuong minh
myApp.controller("myController", function ($scope) {
  $scope.message = "hihihi";
  // Cach khoi tao 1 Object trong js
  var employee = {
    name: "Hang",
    gender: "Nu",
    dob: "26/09/2022",
  };
  $scope.e = employee;

  var info = ["hihi", "hihi1", "hihi2"];
  $scope.i = info;
});
