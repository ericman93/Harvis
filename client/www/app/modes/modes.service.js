angular.module('harvis.modes')
  .factory('Modes', ['$q', '$http', 'Core',
    function ($q, $http, Core) {
      function setMode(mode) {
        var deferred = $q.defer();

        $http.post("http://" + Core.host + '/mode/' + mode)
          .then(function (res) {
            deferred.resolve(res.data)
          }, function (error) {
            deferred.resolve([])
          });

        return deferred.promise;
      }

      function stopMode() {
        var deferred = $q.defer();

        $http.delete("http://" + Core.host + '/mode/')
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
