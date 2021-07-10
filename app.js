(function () {
  'use strict';
  
  angular.module('MsgApp', [])
  .controller('MsgController', MsgController);
  
  MsgController.$inject = ['$scope'];
  function MsgController($scope) {
    $scope.Dishes = "  ";

    $scope.stateOfBeing = " ";
    $scope.sayMessage = function () 
    {
      return "Please do not leave a empty comma Space in between";
    };
  
    $scope.seeFood = function () 
    {
      $scope.number = ("Count : ",$scope.Dishes.split(",").length);
      
        if($scope.number <= 3 )
        {
          $scope.stateOfBeing = "Enjoy!";
        }
        if($scope.number > 3 )
        {
          $scope.stateOfBeing = "Too much!";
        }
    };
  }
  
  })();
  