let productApi = "https://63379dcf132b46ee0be3304d.mockapi.io/api/products";
let myApp = angular.module("demo_product", []);
myApp.controller("myctrl", function ($scope, $http) {
  $scope.product = {
    id: "",
    ten: "",
    so_luong: "",
    gia_nhap: "",
    gia_ban: "",
    mieu_ta: "",
  };
  $scope.products = [];
  //   Giao tiep BE _ FE: HTTP Method : GET, POST, PUT, DELETE
  //   CURD: CREATE - UPDATE  - READ - DELETE
  //  GET - READ
  //  POST - CREATE
  //  PUT- UPDATE
  //  DELETE - DELETE
  //   Get all products
  $http
    .get(productApi)
    .then(function (response) {
      $scope.products = response.data;
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });

  // Add products
  $scope.onFormSubmit = function (event) {
    event.preventDefault();
    $http
      .post(productApi, $scope.product)
      .then(function () {
        window.location.reload();
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  //   Delete
  $scope.delete = function (item) {
    let id = item.id;
    $http
      .delete(productApi + "/" + id)
      .then(function () {
        window.location.reload();
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  //   Update
  // B1: Detail
  $scope.selectProduct = function (item) {
    let id = item.id;
    $http
      .get(productApi + "/" + id)
      .then(function (response) {
        $scope.product = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  //   B2: Update
  $scope.edit = function (item) {
    let id = $scope.product.id;
    $http
      .put(productApi + "/" + id, $scope.product)
      .then(function () {
        window.location.reload();
      })
      .catch(function (error) {
        console.log(error);
      });
  };
});
