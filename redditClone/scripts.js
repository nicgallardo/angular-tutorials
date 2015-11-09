var app = angular.module("redditApp", [])
app.controller("redditCtrl", function($scope){
  $scope.form = false;
  $scope.commentForm = false;
  $scope.commentsShow = false;
  $scope.posts = [];
  $scope.comments = [];
  $scope.votes = 0;
  //date 
  $scope.date = Date.now();

  $scope.sorting = '-version';

  $scope.formShow = function(){
    $scope.form = true;
  }

  $scope.submit = function(){
    $scope.form = false;
    $scope.posts.push($scope.post);
    $scope.post = {};
  }

  $scope.countUp = function(){
    $scope.votes + 1
  }

  $scope.countDown = function(){
    $scope.votes - 1
  }
  $scope.commentFormShow = function(){
    $scope.commentForm = true;
  }

  $scope.submitComment = function(){
    $scope.commentForm = false;
    $scope.comments.push($scope.createComment);
    $scope.createComment = {};
  }

  $scope.commentsShow = function(){
    $scope.commentsShow = true;
  }
  $scope.commentsClose = function(){
    $scope.commentsShow = false;
  }

})
