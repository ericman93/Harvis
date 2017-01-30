angular.module('harvis.core')
  .factory('Core', ['$q', '$http', 'SERVER_URL',
    function ($q, $http, SERVER_URL) {
      var host = SERVER_URL;

      function stopOutputs(mode) {
        var deferred = $q.defer();

        $http.post("http://" + service.host + '/stop')
          .then(function (res) {
            deferred.resolve(res.data)
          }, function (error) {
            deferred.resolve([])
          });

        return deferred.promise;
      }

      var service = {
        stopOutputs: stopOutputs,
        host: host
      };

      service
    }]);
/**
 * Created by Eric on 24/01/2017.
 */
