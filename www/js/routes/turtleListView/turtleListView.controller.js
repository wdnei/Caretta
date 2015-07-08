/**
 * TurtleListView controller.
 *
 * @author Wdnei Paixao {@link https://github.com/wdnei/caretta}
 */
(function () {
    'use strict';
    /**
     * @ngdoc controller
     * @name TurtleListViewCtrl
     * @module app.turtleListView
     * @description
     * Controller for the turtleList page.
     *
     * @ngInject
     */
    function TurtleListViewCtrl($scope, $state, $stateParams, TurtleService, $ionicScrollDelegate, $ionicHistory) {
        $scope.turtle = TurtleService.getTurtle($stateParams.turtleId);
        console.log($stateParams);



        $ionicHistory.nextViewOptions({
                disableBack: true
            });

        $scope.goHome = function ()
        {   
            $state.go('app.home');
            return false;
        };
    }

    angular
            .module('app.turtleListView')
            .controller('TurtleListViewCtrl', TurtleListViewCtrl);
})();

