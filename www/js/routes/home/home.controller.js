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
    function HomeCtrl($scope,$state,$ionicHistory,$ionicScrollDelegate) {

      $ionicHistory.nextViewOptions({
              disableBack: true
          });

    }

    angular
            .module('app')
            .controller('HomeCtrl', ['$scope','$state','$ionicHistory','$ionicScrollDelegate',HomeCtrl]);
})();
