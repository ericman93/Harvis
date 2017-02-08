angular.module('harvis.lights')
  .controller('LightsCtrl', ['$scope', 'Lights',
      function ($scope, Lights) {
        $scope.colors = [
          {
            'name': 'red',
            'rgb': 'e85353'
          },
          {
            'name': 'blue',
            'rgb': '39bdff'
          }
        ]
      }
    ]
  );
