angular.module('harvis.modes')
  .controller('ModesCtrl', ['$scope', 'Modes',
      function ($scope, Modes) {
        $scope.modes = [
          {
            name: 'romantic',
            icon: 'ion-heart'
          },
          {
            name: 'work',
            icon: 'ion-code'
          },
          {
            name: 'morning',
            icon: 'ion-ios-alarm'
          }
        ];

        $scope.setMode = function (mode) {
          Modes.setMode(mode);
        };

        $scope.stopMode = function () {
          Modes.stopMode();
        };
      }
    ]
  );
