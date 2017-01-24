angular.module('harvis.core')
  .filter('modeIcon', function(){
    return function(input) {
      var modeIcons = {
        'romantic': 'ion-heart',
        'dev': 'ion-code',
        'workout': 'ion-flash',
        'morning': 'ion-ios-alarm'
      };

      return modeIcons[input];
    };
  });
