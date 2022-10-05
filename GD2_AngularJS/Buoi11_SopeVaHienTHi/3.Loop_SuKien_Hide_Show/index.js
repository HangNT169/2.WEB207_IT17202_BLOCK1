let myApp = angular.module("myModule", []);
myApp.controller("myController", function ($scope) {
  const employees = [
    {
      id: 1,
      name: "HangNT169",
      gender: false,
    },
    {
      id: 2,
      name: "PhongTT35",
      gender: true,
    },
    {
      id: 3,
      name: "DungNA29",
      gender: true,
    },
    {
      id: 4,
      name: "TienNH21",
      gender: true,
    },
    {
      id: 5,
      name: "KhanhPG",
      gender: true,
    },
    {
      id: 6,
      name: "NguyenVV4",
      gender: true,
    },
  ];
  $scope.employees = employees;
});
