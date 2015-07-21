/**
 * TurtleList controller.
 *
 * @author Wdnei Paixao {@link https://github.com/wdnei/caretta}
 */
(function () {
    'use strict';
    /**
     * @ngdoc controller
     * @name TurtleListCtrl
     * @module app.turtleList
     * @description
     * Controller for the identify page.
     *
     * @ngInject
     */
    function TurtleListCtrl($scope, TurtleService, $ionicScrollDelegate) {
        $scope.turtles = TurtleService.allTurtles();
    }

    angular
            .module('app')
            .controller('TurtleListCtrl', TurtleListCtrl);
})();
