(function () {
  "use strict";
  angular
    .module("LunchCheck", [])
    .controller("LunchCheckController", LunchCheckController);
  LunchCheckController.$inject = ["$scope"];
  function LunchCheckController($scope) {
    $scope.numOfItem = "";

    // console.log($scope.msg);
    $scope.check = function () {
      let item = msg($scope.numOfItem);
      $scope.msg = item;
    };
    function msg(items) {
      let its = items.split(",");
      if (its.length <= 3 && its.length >= 1 && its[0] != "") return "Enjoy!";
      else if (its.length > 3) return "Too much!";
      else return "Please enter data first";
    }
  }
})();
