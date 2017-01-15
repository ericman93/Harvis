angular.module('harvis.homepage')
  .directive('alarm', function () {
    return {
      scope: {
        'item': '='
      },
      templateUrl: 'app/alarms/directives/alarm/alarm.html',
      controller: ['$scope',
        function ($scope) {

        }
      ]
    }
  });
