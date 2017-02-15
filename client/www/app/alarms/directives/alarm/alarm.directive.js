angular.module('harvis.homepage')
  .directive('alarm', function () {
    return {
      scope: {
        'item': '='
      },
      templateUrl: 'app/alarms/directives/alarm/alarm.html',
      controller: ['$scope', '$ionicModal', 'MODES',
        function ($scope, $ionicModal, MODES) {
          $scope.modes = MODES;

          $scope.editExtraData = function () {
            $ionicModal.fromTemplateUrl('app/alarms/extra-data.html', {
              scope: $scope,
              animation: 'slide-in-up'
            }).then(function (modal) {
              modal.show();
              $scope.modal = modal;
            });
          };
        }
      ]
    }
  });
