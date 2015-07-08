/**
 * Identify route.
 *
 * @author Wdnei Paixao {@link https://github.com/wdnei/caretta}
 */
(function () {
   // 'use strict';
    /**
     * @ngdoc object
     * @name identifyRoute
     * @module app.identity
     * @requires $stateProvider
     * @description
     * Router for the galleries page.
     *
     *
     */
    function identifyRoute($stateProvider) {
        $stateProvider
                .state('app.identify', {
                    url: "/identify",
                    views: {
                        'menuContent': {
                            templateUrl: "js/routes/identify/identify.html",
                            controller: 'IdentifyCtrl'
                        }
                    }
                });

    }


    angular
            .module('app.identify')
            .config(identifyRoute);

})();