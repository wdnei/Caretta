/**
 * Main App module.
 *
 * @author Wdnei Paixao {@link https://github.com/wdnei/caretta}
 */
angular.module('app', ['ionic', 'leaflet-directive',
    'app.core',
    'app.menu', ,
            'app.home',
    'app.identify',
    'app.turtleList',
    'app.turtleListView',
    'app.map',
    'app.registerTurtle',
    'app.registerNest',
    'app.registerComplaint',
    'app.news', 'lbServices', 'ngResource'])

        .run(function ($ionicPlatform, $timeout, $rootScope, $ionicModal, User, $ionicLoading, $ionicPopup, $state) {
            $ionicPlatform.ready(function () {
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


            $rootScope.showLoad = function (msg) {
                $ionicLoading.show({
                    template: msg
                });
            };
            $rootScope.hideLoad = function () {
                $ionicLoading.hide();
            };

            $rootScope.showAlert = function (title, msg) {
                var alertPopup = $ionicPopup.alert({
                    title: title,
                    template: msg
                });
            };



            // Form data for the login modal
            $rootScope.loginData = {};




            // Create the login modal that we will use later
            $ionicModal.fromTemplateUrl('js/routes/menu/login.html', {
                scope: $rootScope
            }).then(function (modal) {
                $rootScope.modalLogin = modal;
            });


            // Triggered in the login modal to close it
            $rootScope.closeLogin = function () {
                $rootScope.modalLogin.hide();
            };

            // Open the login modal
            $rootScope.login = function () {
                $rootScope.modalLogin.show();
            };

            // Open the login modal
            $rootScope.logout = function () {
                User.logout().$promise.then(function (res) {
                    console.log(res);
                });
                $rootScope.currentUser = null;

                $rootScope.showAlert("", "Usuário desconectado!!");

            };

            // Perform the login action when the user submits the login form
            $rootScope.doLogin = function () {
                console.log('Doing login', $rootScope.loginData);
                $rootScope.showLoad("Carregando...");
                try {
                    User.login({"email": $rootScope.loginData.email, "password": $rootScope.loginData.password},
                    function (res) {
                        $rootScope.hideLoad();
                        // success

                        $rootScope.currentUser = {
                            id: res.user.id,
                            tokenId: res.id,
                            email: $rootScope.loginData.email,
                            data: res.data
                        };

                        $rootScope.showAlert("", "Usuário Logado!!");
                        $timeout(function () {
                            $rootScope.closeLogin();
                        }, 1000);
                        console.log(res);
                    }, function (res) {
                        $rootScope.hideLoad();
                        // error
                        var erro="Erro ao realizar login";
                        
                        if(res.data.error.message)
                            erro=res.data.error.message;
                        
                        $rootScope.showAlert("erro", erro);
                        console.log(res);
                    });
                }
                catch (err)
                {
                    $rootScope.showAlert("Erro", err.message);
                }
                // Simulate a login delay. Remove this and replace with your login
                // code if using a login system

            };

            $ionicModal.fromTemplateUrl('js/routes/menu/signup.html', {
                scope: $rootScope
            }).then(function (modal) {
                $rootScope.modalSignUp = modal;
            });

            // Triggered in the login modal to close it
            $rootScope.closeSignUp = function () {
                $rootScope.modalSignUp.hide();
            };

            // Open the login modal
            $rootScope.signUp = function () {
                $rootScope.modalSignUp.show();
            };

            // Perform the login action when the user submits the login form
            $rootScope.doSignUp = function () {
                console.log('Doing SignUp', $rootScope.loginData);
                $rootScope.showLoad("Registrando o usuário...");
                console.log(User);
                var us = User.create({username: $rootScope.loginData.username, email: $rootScope.loginData.email, password: $rootScope.loginData.password, created: new Date()},
                function (res) {
                    $rootScope.hideLoad();
                    // success
                    $rootScope.showAlert("", "Usuário criado!!");
                    $timeout(function () {
                        $rootScope.closeSignUp();
                    }, 1000);
                    console.log(res);
                }, function (res) {
                    $rootScope.hideLoad();
                    // error
                    $rootScope.showAlert("Erro", "Ocorreu um erro ao registrar Usuario");
                    console.log(res);
                });
                // Simulate a login delay. Remove this and replace with your login
                // code if using a login system

            };

            $rootScope.isLogged = function ()
            {
                return $rootScope.currentUser != null;
            }


        })

        .config(function ($stateProvider, $urlRouterProvider) {
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

        .config(function ($compileProvider) {
            $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
        })

        .config(function (LoopBackResourceProvider) {

            // Use a custom auth header instead of the default 'Authorization'
            // LoopBackResourceProvider.setAuthHeader('X-Access-Token');

            // Change the URL where to access the LoopBack REST API server
            LoopBackResourceProvider.setUrlBase('http://carettalb-caretta.rhcloud.com/api');
        })
        .config(['$httpProvider', function ($httpProvider) {
                $httpProvider.defaults.useXDomain = true;
                delete $httpProvider.defaults.headers.common['X-Requested-With'];
            }
        ])
        
.constant("APIlb", {
        "url": "http://carettalb-caretta.rhcloud.com/api"
    });



//angular.module.config(function($compileProvider){
//  $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
//});
