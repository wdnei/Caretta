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
    function turtleListViewRoute($stateProvider) {
        $stateProvider
                .state('app.turtleListView', {
                    url: "/turtleListView/:turtleId",
                    views: {
                        'menuContent': {
                            templateUrl: "js/routes/turtleListView/turtleListView.html",
                            controller: 'TurtleListViewCtrl'
                        }
                    }
                });

    }


    angular
            .module('app')
            .config(turtleListViewRoute);

})();
