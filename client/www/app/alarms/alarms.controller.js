angular.module('harvis.alarms')
  .controller('AlarmsCtrl', ['$scope',
      function ($scope) {
        function getAlarms() {
          $scope.alarms = [
            {
              time: '10:00',
              active: true,
              rain: '09:30'
            },
            {
              time: '08:00',
              active : false
            }
          ]
        }

        getAlarms();
      }
    ]
  );
