/**
 * Home controller.
 *
 * @author Wdnei Paixao {@link https://github.com/wdnei/caretta}
 */
(function () {
    //'use strict';
    /**
     * @ngdoc controller
     * @name HomeCtrl
     * @module app.home
     * @description
     * Controller for the Home page.
     *
     * @ngInject
     */
    function HomeCtrl($scope,$state,$ionicScrollDelegate) {

    }

    angular
            .module('app')
            .controller('HomeCtrl', ['$scope','$state','$ionicScrollDelegate',HomeCtrl]);
})();
