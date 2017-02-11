angular.module('harvis.settings')
  .controller('SettingsCtrl', ['$scope', '$window', 'Core',
    function($scope, $window, Core){
    	$scope.save = function(){
    		var host = $scope.server.host + ":" + $scope.server.port
    		
    		Core.host = host
    		$window.localStorage.setItem('host', host)
    	}

		function init(){
			var splited =  Core.host.split(':')
			$scope.server = {
				host: splited[0],
				port: Number(splited[1])
			}
		}

		init();
    }
  ]
)
