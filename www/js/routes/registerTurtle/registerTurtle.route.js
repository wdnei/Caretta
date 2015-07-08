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
    function registerTurtleRoute($stateProvider) {
        $stateProvider
                .state('app.registerTurtle', {
                    url: "/registerTurtle/:turtleId",
                    views: {
                        'menuContent': {
                            templateUrl: "js/routes/registerTurtle/registerTurtle.html",
                            controller: 'RegisterTurtleCtrl'
                        }
                    }
                });
                

    }


    angular
            .module('app.registerTurtle')
            .config(registerTurtleRoute);

})();