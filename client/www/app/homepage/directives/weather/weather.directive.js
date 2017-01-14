angular.module('harvis.homepage')
  .directive('weather', function () {
    return {
      replace: true,
      templateUrl: 'app/homepage/directives/weather/weather.html',
      controller: ['$scope', 'Weather',
        function ($scope, Weather) {
          var weatherIcons = {
            'Rain': 'ion-waterdrop',
            'Clouds': 'ion-android-cloud'
          };

          function getWeather() {
            Weather.getWeather().then(function (weather) {
              $scope.weather = weather;
              $scope.weather.icon = weatherIcons[weather.desc];

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

          getWeather();
        }
      ]
    }
  });
