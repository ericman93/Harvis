angular.module('harvis.modes')
  .factory('Modes', ['$q', '$http', 'SERVER_URL',
    function ($q, $http, SERVER_URL) {
      function setMode(mode) {
        var deferred = $q.defer();

        $http.post("http://" + SERVER_URL + '/mode/' + mode)
          .then(function (res) {
            deferred.resolve(res.data)
          }, function (error) {
            deferred.resolve([])
          });

        return deferred.promise;
      }

      function stopMode() {
        var deferred = $q.defer();

        $http.delete("http://" + SERVER_URL + '/mode/')
          .then(function (res) {
            deferred.resolve(res.data)
          }, function (error) {
            deferred.resolve([])
          });

        return deferred.promise;
      }

      return {
        setMode: setMode,
        stopMode: stopMode
      }
    }]);
