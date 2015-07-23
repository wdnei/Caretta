/**
 * RegisterTurtle route.
 *
 * @author Wdnei Paixao {@link https://github.com/wdnei/caretta}
 */
(function () {
   // 'use strict';
    /**
     * @ngdoc object
     * @name registerTurtleRoute
     * @module app.registerTurtle
     * @requires $stateProvider
     * @description
     * Router for the register turtle page.
     *
     *
     */
    function historyViewRoute($stateProvider) {
        $stateProvider
                .state('app.historyView', {
                    url: "/historyView",
                    views: {
                        'menuContent': {
                            templateUrl: "js/routes/historyView/historyView.html",
                            controller: 'HistoryViewCtrl'
                        }
                    }
                });


    }


    angular
            .module('app')
            .config(historyViewRoute);

})();
