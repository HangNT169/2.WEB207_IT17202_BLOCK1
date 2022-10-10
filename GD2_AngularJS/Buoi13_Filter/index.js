let myApp = angular.module("myApp", []);
myApp.controller("myController", function ($scope) {
  $scope.myNumber = "215432323132.132432432";
  $scope.now = new Date();
  $scope.name = "Tran Tuan Phong";
  $scope.sv = {
    name: "Vu Van Nguyen",
    gioiTinh: 1,
    chuyenNganh: "ptpm",
  };
  $scope.arr = [
    { ma: "WEB207", name: "Frontend Framework" },
    { ma: "SOF2041", name: "Dự án mẫu" },
    { ma: "MOB104", name: "Agile" },
    { ma: "COM108", name: "C" },
    { ma: "MOB1023", name: "Java 2" },
    { ma: "COM2034", name: "SQL Nang Cao" },
  ];
  $scope.searchText = "";
});
