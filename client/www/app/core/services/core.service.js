angular.module('harvis.core')
  .factory('Core', ['$q', '$http', '$window', 'SERVER_URL',
    function ($q, $http, $window, SERVER_URL) {
      function loadHost(){
        var host = $window.localStorage.getItem('host')

        if (host == null){
          host = SERVER_URL
        }

        return host
      }

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

      var host = loadHost();
      var service = {
        stopOutputs: stopOutputs,
        host: host
      };

      return service
    }]);