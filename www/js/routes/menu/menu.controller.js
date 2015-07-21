/**
 * AppCtrl controller.
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
    function AppCtrl($scope, $rootScope, $ionicModal, $timeout, User, LoopBackAuth, $ionicLoading, $ionicPopup) {


        $scope.loadAuth=function (){

            if(!$rootScope.isLogged())
            {
                $rootScope.login();
            }

        };

        if(!$rootScope.isLogged())
            $scope.loginState="Login"
        else
            $scope.loginState="Log Out"
    }

    angular
            .module('app')
            .controller('AppCtrl', ['$scope', '$rootScope', '$ionicModal', '$timeout', 'User', 'LoopBackAuth', '$ionicLoading', '$ionicPopup',AppCtrl]);
})();
