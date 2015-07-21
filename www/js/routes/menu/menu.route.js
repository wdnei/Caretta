/**
 * Menu main route.
 *
 * @author Wdnei Paixao {@link https://github.com/wdnei/caretta}
 */
(function () {
    'use strict';
    /**
     * @ngdoc object
     * @name turtleListRoute
     * @module app.turtleList
     * @requires $stateProvider
     * @description
     * Router for the turtleList page.
     *
     * @ngInject
     */
    function menuRoute($stateProvider) {
        $stateProvider
                .state('app', {
                    url: "/app",
                    abstract: true,
                    templateUrl: "js/routes/menu/menu.html",
                    controller: 'AppCtrl'
                });

    }


    angular
            .module('app')
            .config(menuRoute);

})();
