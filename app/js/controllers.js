'use strict';

/* Controllers */
  angular.module("myApp.controllers", [])
      .controller('MyCtrl1', ['$scope', 's1', function ($scope, s1) {
        $scope.hello = "hello hello";

      console.log(s1);
  }]).controller('MyCtrl2', function($scope) {

  });