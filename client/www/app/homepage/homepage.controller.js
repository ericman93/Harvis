angular.module('harvis.homepage')
  .controller('HomepageCtrl', ['$scope',
    function($scope){
      function getWeather(){
        $scope.weather = {
          temperature: 17
        }
      }

      function init(){
        getWeather();
      }
    }
  ]
);
