var app = angular.module("contactsApp", [])
app.controller("contactsCtrl", function($scope){
  $scope.directory = [];
  $scope.submit = function(){
    $scope.directory.push($scope.contact)
    $scope.contact = {}
  }
})
