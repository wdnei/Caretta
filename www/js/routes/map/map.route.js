/**
 * Map route.
 *
 * @author Wdnei Paixao {@link https://github.com/wdnei/caretta}
 */
(function () {
   // 'use strict';
    /**
     * @ngdoc object
     * @name mapRoute
     * @module app.map
     * @requires $stateProvider
     * @description
     * Router for the map page.
     *
     *
     */
    function mapRoute($stateProvider) {
        $stateProvider
                .state('app.map', {
                    url: "/map",
                    views: {
                        'menuContent': {
                            templateUrl: "js/routes/map/map.html",
                            controller: 'MapCtrl'
                        }
                    }
                });

    }


    angular
            .module('app.map')
            .config(mapRoute);

})();