let myApp = angular
  .module("myModule", [])
  .controller("classController", function ($scope) {
    // $scope.message = "hihi";
    // camel
  })
  .directive("welcomeTextHihi", function () {
    return {
      template: `<h1>ahihi do ngoc </h1>`,
    };
  });
