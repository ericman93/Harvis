angular.module('harvis.modes')
  .controller('ModesCtrl', ['$scope', 'MODES', 'Modes',
      function ($scope, MODES, Modes) {
        $scope.modes = MODES;

        $scope.setMode = function (mode) {
          Modes.setMode(mode);
        };

        $scope.stopMode = function () {
          Modes.stopMode();
        };
      }
    ]
  );
