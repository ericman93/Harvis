angular.module('harvis.core')
  .factory('Core', ['$q', '$http', 'SERVER_URL',
    function ($q, $http, SERVER_URL) {
      function stopOutputs(mode) {
        var deferred = $q.defer();

        $http.post("http://" + SERVER_URL + '/stop')
          .then(function (res) {
            deferred.resolve(res.data)
          }, function (error) {
            deferred.resolve([])
          });

        return deferred.promise;
      }

      return {
        stopOutputs: stopOutputs
      }
    }]);
/**
 * Created by Eric on 24/01/2017.
 */
