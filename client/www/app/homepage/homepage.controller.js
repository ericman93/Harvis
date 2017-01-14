angular.module('harvis.homepage')
  .controller('HomepageCtrl', ['$scope',
      function ($scope) {
        function getAlarms(){
          $scope.alarms = [
            '10:00pm'
          ]
        }

        function init() {
          //getFact();
          //getAlarms();
        }

        init();
      }
    ]
  );
