var app = angular.module("numbersApp", []);
app.controller("numbersCtrl", function($scope){
  $scope.number = 5;
  $scope.pickRandomNumber = function(){
    $scope.number = Math.floor(Math.random() * 10) + 1
  }

  $scope.revWord = function(){
    $scope.word =  $scope.word.split("").reverse().join("");
  }

})
