angular.module('harvis.homepage')
  .factory('Weather', ['$q', '$http', 'Core',
    function ($q, $http, Core) {
      function getWeather() {
        var deferred = $q.defer();

        $http.get("http://" + Core.host + '/weather')
          .then(function (res) {
            deferred.resolve(res.data)
          }, function (error) {
            deferred.resolve([])
          });

        return deferred.promise;
      }

      return {
        getWeather: getWeather
      }
    }]);
