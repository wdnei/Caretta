/**
 * Register route.
 *
 * @author Wdnei Paixao {@link https://github.com/wdnei/caretta}
 */
(function () {
   // 'use strict';
    /**
     * @ngdoc object
     * @name registerRoute
     * @module app.registerurtle
     * @requires $stateProvider
     * @description
     * Router for the register turtle,nest and complaint page.
     *
     *
     */
    function registerTurtleRoute($stateProvider) {
        $stateProvider
                .state('app.register', {
                    url: "/register/:registerType/:turtleId",
                    views: {
                        'menuContent': {
                            templateUrl: "js/routes/register/register.html",
                            controller: 'RegisterCtrl'
                        }
                    }
                });


    }


    angular
            .module('app')
            .config(registerTurtleRoute);

})();
