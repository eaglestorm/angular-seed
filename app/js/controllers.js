'use strict';

/* Controllers */
  myApp.controller('MyCtrl1', ['$scope', 's1', function ($scope, s1) {
        $scope.hello = "hello hello";

      console.log(s1);
  }]);

  myApp.controller('MyCtrl2', function($scope) {

  });