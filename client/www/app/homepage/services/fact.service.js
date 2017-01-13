angular.module('harvis.homepage')
  .factory('Fact', ['$q', '$http', 'SERVER_URL',
    function ($q, $http, SERVER_URL) {
      function getFact() {
        var deferred = $q.defer();

        $http.get("http://" + SERVER_URL + '/fact')
          .then(function (res) {
            deferred.resolve(res.data.fact)
          }, function (error) {
            deferred.resolve([])
          });

        return deferred.promise;
      }

      return {
        getFact: getFact
      }
    }]);
