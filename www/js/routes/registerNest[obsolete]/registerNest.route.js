/**
 * RegisterNest route.
 *
 * @author Wdnei Paixao {@link https://github.com/wdnei/caretta}
 */
(function () {
   // 'use strict';
    /**
     * @ngdoc object
     * @name registerNestRoute
     * @module app.registerNest
     * @requires $stateProvider
     * @description
     * Router for the register turtle page.
     *
     *
     */
    function registerNestRoute($stateProvider) {
        $stateProvider
                .state('app.registerNest', {
                    url: "/registerNest",
                    views: {
                        'menuContent': {
                            templateUrl: "js/routes/registerNest/registerNest.html",
                            controller: 'RegisterNestCtrl'
                        }
                    }
                });

    }


    angular
            .module('app')
            .config(registerNestRoute);

})();
