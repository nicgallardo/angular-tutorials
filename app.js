var app = angular.module("firstApp", []);
app.controller("ExercisesControler", function($scope){
  function seconds(){
    return ((((60 * 60) * 24) * 365)* 100)
  };

  $scope.theDate = Date.now();
  $scope.name = "Darth Vader";
  $scope.favColor = "Black";
  $scope.secondsInACentury = seconds();
})
