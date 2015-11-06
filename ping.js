var app = angular.module("pingPongApp", []);

app.controller("pingPongCtrl", function($scope){
  $scope.countTwo = 0;
  $scope.countOne = 0;
  $scope.reset = function(){
    $scope.countOne = 0;
    $scope.countTwo = 0;
  }
})
