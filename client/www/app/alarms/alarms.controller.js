angular.module('harvis.alarms')
  .controller('AlarmsCtrl', ['$scope', '$ionicModal',
      function ($scope, $ionicModal) {
        function getAlarms() {
          $scope.alarms = [
            {
              time: '10:00',
              active: true,
              rain: '09:30',
              mode: 'romantic'
            },
            {
              time: '08:00',
              active: false
            }
          ]
        }

        getAlarms();
      }
    ]
  );
