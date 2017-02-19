/**
 * Created by eric on 08/02/17.
 */
angular.module('harvis.lights')
  .factory('Lights', ['$q', '$http', 'SERVER_URL',
    function ($q, $http, SERVER_URL) {
      function setColor(color) {
        var deferred = $q.defer();

        $http.post("http://" + SERVER_URL + '/light/' + color)
          .then(function (res) {
            deferred.resolve(res.data)
          }, function (error) {
            deferred.resolve([])
          });

        return deferred.promise;
      }

      function closeLigth() {
        var deferred = $q.defer();

        $http.delete("http://" + SERVER_URL + '/light/')
          .then(function (res) {
            deferred.resolve(res.data)
          }, function (error) {
            deferred.resolve([])
          });

        return deferred.promise;
      }

      return {
        setColor: setColor,
        closeLigth: closeLigth
      }
    }]);
