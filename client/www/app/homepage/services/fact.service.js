angular.module('harvis.homepage')
  .factory('Fact', ['$q', '$http', 'Core',
    function ($q, $http, Core) {
      function getFact() {
        var deferred = $q.defer();

        $http.get("http://" + Core.host + '/fact')
          .then(function (res) {
            deferred.resolve(res.data)
          }, function (error) {
            deferred.resolve([])
          });

        return deferred.promise;
      }

      return {
        getFact: getFact
      }
    }]);
