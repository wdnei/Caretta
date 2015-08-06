/**
 * About route.
 *
 * @author Wdnei Paixao {@link https://github.com/wdnei/caretta}
 */
(function () {
   // 'use strict';
    /**
     * @ngdoc object
     * @name About
     * @module app.about
     * @requires $stateProvider
     * @description
     * Router for the galleries page.
     *
     *
     */
    function aboutRoute($stateProvider) {
        $stateProvider
                .state('app.about', {
                    url: "/about",
                    views: {
                        'menuContent': {
                            templateUrl: "js/routes/about/about.html",
                            controller: 'AboutCtrl'
                        }
                    }
                });

    }


    angular
            .module('app')
            .config(aboutRoute);

})();
