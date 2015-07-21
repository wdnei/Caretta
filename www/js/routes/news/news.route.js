/**
 * News route.
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
     * Router for the news page.
     *
     * @ngInject
     */
    function newsRoute($stateProvider) {
        $stateProvider
                .state('app.news', {
                    url: "/news",
                    views: {
                        'menuContent': {
                            templateUrl: "js/routes/news/news.html",
                            controller: 'NewsCtrl'
                        }
                    }
                }

                );

    }


    angular
            .module('app')
            .config(newsRoute);

})();
