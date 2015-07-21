/**
 * TurtleList route.
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
    function turtleListRoute($stateProvider) {
        $stateProvider
                .state('app.turtleList', {
                    url: "/turtleList",
                    views: {
                        'menuContent': {
                            templateUrl: "js/routes/turtleList/turtleList.html",
                            controller: 'TurtleListCtrl'
                        }
                    }
                }

                );

    }


    angular
            .module('app')
            .config(turtleListRoute);

})();
