angular.module('harvis.settings')
  .controller('SettingsCtrl', ['$scope', 'Core',
    function($scope, Core){
    	$scope.save = function(){
    		Core.host = $scope.server.host + ":" + $scope.server.port
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
