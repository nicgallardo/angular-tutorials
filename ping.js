var app = angular.module("pingPongApp", []);

app.controller("parentCtrl", function($scope){
  $scope.reset = function(){
    
  }
})
app.controller("pingPongCtrlOne", function($scope){
  $scope.count = 0;
})
app.controller("pingPongCtrlTwo", function($scope){
  $scope.count = 0;
})
