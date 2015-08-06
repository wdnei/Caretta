/**
 * About controller.
 *
 * @author Wdnei Paixao {@link https://github.com/wdnei/caretta}
 */
(function () {
    //'use strict';
    /**
     * @ngdoc controller
     * @name AboutCtrl
     * @module app.about
     * @description
     * Controller for the About page.
     *
     * @ngInject
     */
    function AboutCtrl($scope,$state,$ionicHistory,$ionicScrollDelegate) {

      $ionicHistory.nextViewOptions({
              disableBack: true
          });

    }

    angular
            .module('app')
            .controller('AboutCtrl', ['$scope','$state','$ionicHistory','$ionicScrollDelegate',AboutCtrl]);
})();
