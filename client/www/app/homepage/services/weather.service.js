angular.module('harvis.homepage')
  .factory('Weather', ['$q', '$http', 'SERVER_URL',
    function ($q, $http, SERVER_URL) {
      function getWeather() {
        var deferred = $q.defer();

        $http.get("http://" + SERVER_URL + '/weather')
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
