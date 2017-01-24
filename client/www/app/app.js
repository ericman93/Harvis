// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('harvis.homepage', []);
angular.module('harvis.lights', []);
angular.module('harvis.alarms', []);
angular.module('harvis.menu', []);
angular.module('harvis.modes', []);
angular.module('harvis.core', ['harvis.menu']);
angular.module('harvis', ['ionic', 'harvis.homepage', 'harvis.alarms', 'harvis.lights', 'harvis.modes', 'harvis.core'])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'app/core/menu/menu.html',
        controller: 'MenuCtrl'
      })

      .state('app.homepage', {
        url: '/homepage',
        views: {
          'menuContent': {
            templateUrl: 'app/homepage/homepage.html',
            controller: 'HomepageCtrl'
          }
        }
      })

      .state('app.lights', {
        url: '/lights',
        views: {
          'menuContent': {
            templateUrl: 'app/lights/lights.html',
            controller: 'LightsCtrl'
          }
        }
      })

      .state('app.modes', {
        url: '/modes',
        views: {
          'menuContent': {
            templateUrl: 'app/modes/modes.html',
            controller: 'ModesCtrl'
          }
        }
      })

      .state('app.alarms', {
        url: '/alarms',
        views: {
          'menuContent': {
            templateUrl: 'app/alarms/alarms.html',
            controller: 'AlarmsCtrl'
          }
        }
      });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/homepage');
  })
  .value('SERVER_URL', '127.0.0.1:5000')
  .value('MODES', ['romantic', 'work', 'morning']);
