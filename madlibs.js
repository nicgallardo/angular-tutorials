var app = angular.module("madLibsApp", []);
app.controller("madLibsCtrl", function($scope){
  $scope.words = {};
  $scope.update = function(){
    $scope.master = angular.copy($scope.words)
    $scope.words = {}
  };
  
})
