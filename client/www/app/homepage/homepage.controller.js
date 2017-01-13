angular.module('harvis.homepage')
  .controller('HomepageCtrl', ['$scope', 'Weather', 'Fact',
      function ($scope, Weather, Fact) {
        function getWeather() {
          Weather.getWeather().then(function (weather) {
            $scope.weather = weather;

            getTheme();
          })
        }

        function getTheme() {
          var time = new Date();
          var hours = time.getHours()

          if (hours > 23 || hours < 6) {
            $scope.theme = "night";
          }
          else {
            $scope.theme = $scope.weather.desc;
          }
        }

        function getFact() {
          Fact.getFact().then(function (fact) {
            $scope.fact = fact;
          });
        }

        function init() {
          getWeather();
          getFact();
        }

        init();
      }
    ]
  );
