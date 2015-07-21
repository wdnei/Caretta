/**
 * Home route.
 *
 * @author Wdnei Paixao {@link https://github.com/wdnei/caretta}
 */
(function () {
   // 'use strict';
    /**
     * @ngdoc object
     * @name Home
     * @module app.home
     * @requires $stateProvider
     * @description
     * Router for the galleries page.
     *
     *
     */
    function homeRoute($stateProvider) {
        $stateProvider
                .state('app.home', {
                    url: "/home",
                    views: {
                        'menuContent': {
                            templateUrl: "js/routes/home/home.html",
                            controller: 'HomeCtrl'
                        }
                    }
                });

    }


    angular
            .module('app')
            .config(homeRoute);

})();
