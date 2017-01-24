angular.module('harvis.menu')
  .controller('MenuCtrl', ['$scope', 'Core',
    function ($scope, Core) {
      $scope.stop = function () {
        Core.stopOutputs();
      }
    }]
  );
