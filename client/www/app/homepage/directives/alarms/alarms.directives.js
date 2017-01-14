angular.module('harvis.homepage')
  .directive('alarms', function () {
    return {
      templateUrl: 'app/homepage/directives/alarms/alarms.html',
      controller: ['$scope',
        function ($scope) {
          function getAlarms(){
            $scope.alarms = [
              '10:00pm'
            ]
          }

          getAlarms();
        }
      ]
    }
  });
