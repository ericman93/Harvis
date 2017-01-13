angular.module('harvis.homepage')
  .controller('HomepageCtrl', ['$scope', 'Weather', 'Fact',
    function($scope, Weather, Fact){
      function getWeather(){
        Weather.getWeather().then(function(weather){
          $scope.weather = weather;
        })
      }

      function getFact(){
        Fact.getFact().then(function(fact){
          $scope.fact = fact;
        });
      }

      function init(){
        getWeather();
        getFact();
      }

      init();
    }
  ]
);
