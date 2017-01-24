angular.module('harvis.core')
  .filter('modeIcon', function(){
    return function(input) {
      var modeIcons = {
        'romantic': 'ion-heart',
        'work': 'ion-code',
        'morning': 'ion-ios-alarm'
      };

      return modeIcons[input];
    };
  });
