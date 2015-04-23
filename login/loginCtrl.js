var app = angular.module("rtfmApp");

app.controller('loginCtrl', function($scope, $location) {
  $scope.logMeIn = function() {
    alert($scope.username);
    $location.path('/threads/')
  }
});
