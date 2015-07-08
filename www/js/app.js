/**
 * Main App module.
 *
 * @author Wdnei Paixao {@link https://github.com/wdnei/caretta}
 */
angular.module('app', ['ionic','leaflet-directive',
                            'app.core',
                           'app.menu' ,,
                           'app.home' ,
                           'app.identify',
                           'app.turtleList',
                           'app.turtleListView',
                            'app.map',
                            'app.registerTurtle',
                            'app.registerNest',
                            'app.registerComplaint',
                            'app.news','lbServices','ngResource'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
//  $stateProvider
//
//  .state('app', {
//    url: "/app",
//    abstract: true,
//    templateUrl: "templates/menu.html",
//    controller: 'AppCtrl'
//  });
//
//  .state('app.search', {
//    url: "/search",
//    views: {
//      'menuContent': {
//        templateUrl: "templates/search.html"
//      }
//    }
//  })
//
//  .state('app.browse', {
//    url: "/browse",
//    views: {
//      'menuContent': {
//        templateUrl: "templates/browse.html"
//      }
//    }
//  })
//    .state('app.playlists', {
//      url: "/playlists",
//      views: {
//        'menuContent': {
//          templateUrl: "templates/playlists.html",
//          controller: 'PlaylistsCtrl'
//        }
//      }
//    })
//
//  .state('app.single', {
//    url: "/playlists/:playlistId",
//    views: {
//      'menuContent': {
//        templateUrl: "templates/playlist.html",
//        controller: 'PlaylistCtrl'
//      }
//    }
//  })
//  .state('app.identify', {
//    url: "/identify",
//    views: {
//      'menuContent': {
//        templateUrl: "templates/identify.html",
//        controller: 'IdentifyCtrl'
//      }
//    }
//  })
//   .state('app.turtleListView', {
//    url: "/turtleListView/:turtleViewId",
//    views: {
//      'menuContent': {
//        templateUrl: "templates/turtleListView.html",
//        controller: 'TurtleListViewCtrl'
//      }
//    }
//  })
//    .state('app.turtleList', {
//    url: "/turtleList",
//    views: {
//      'menuContent': {
//        templateUrl: "templates/turtleList.html",
//        controller: 'TurtleListCtrl'
//      }
//    }
//  })
//    ;
//  
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
})

.config(function($compileProvider){
  $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
})

 .config(function(LoopBackResourceProvider) {
 
    // Use a custom auth header instead of the default 'Authorization'
    //LoopBackResourceProvider.setAuthHeader('X-Access-Token');
 
    // Change the URL where to access the LoopBack REST API server
    LoopBackResourceProvider.setUrlBase('http://127.0.0.1:3000/api');
  });

//angular.module.config(function($compileProvider){
//  $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
//});
