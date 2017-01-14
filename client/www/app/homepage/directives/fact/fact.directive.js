angular.module('harvis.homepage')
  .directive('fact', function () {
    return {
      replace: true,
      templateUrl: 'app/homepage/directives/fact/fact.html',
      controller: ['$scope', 'Fact',
        function ($scope, Fact) {
          function getFact() {
            Fact.getFact().then(function (fact) {
              $scope.fact = fact;
            });
          }

          getFact();
        }
      ]
    }
  });
