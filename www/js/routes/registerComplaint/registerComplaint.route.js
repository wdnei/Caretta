/**
 * RegisterComplaint route.
 *
 * @author Wdnei Paixao {@link https://github.com/wdnei/caretta}
 */
(function () {
   // 'use strict';
    /**
     * @ngdoc object
     * @name registerComplaintRoute
     * @module app.registerComplaint
     * @requires $stateProvider
     * @description
     * Router for the register Complaint page.
     *
     *
     */
    function registerComplaintRoute($stateProvider) {
        $stateProvider
                .state('app.registerComplaint', {
                    url: "/registerComplaint",
                    views: {
                        'menuContent': {
                            templateUrl: "js/routes/registerComplaint/registerComplaint.html",
                            controller: 'RegisterComplaintCtrl'
                        }
                    }
                });

    }


    angular
            .module('app.registerComplaint')
            .config(registerComplaintRoute);

})();