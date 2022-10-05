let myApp = angular.module("myModule", []);

myApp.controller("classController", classController);
function classController($scope, $rootScope) {
  //   $scope.message = "ahihi";
  $rootScope.message = "hihihihih1111";
}

myApp.controller("contentController", contentController);
function contentController($scope) {
  $scope.message = "ahihihi1";
}
