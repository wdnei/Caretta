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
    function HomeCtrl($scope, $state,$ionicScrollDelegate,$location,Container) {
        $scope.$location = $location;
        Container.getContainers({where:{id:1}},function(err,result){console.log(err,result)});
    }

    angular
            .module('app.home')
            .controller('HomeCtrl', HomeCtrl);
})();

