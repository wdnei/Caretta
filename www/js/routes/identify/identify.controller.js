/**
 * Identify controller.
 *
 * @author Wdnei Paixao {@link https://github.com/wdnei/caretta}
 */
(function () {
    //'use strict';
    /**
     * @ngdoc controller
     * @name IdentifyCtrl
     * @module app.identify
     * @description
     * Controller for the identify page.
     *
     * @ngInject
     */
    function IdentifyCtrl($scope, $state, TurtleService, $ionicScrollDelegate) {
        $scope.turtleService = TurtleService;
        $scope.initialOption = TurtleService.getFirstOption();
        $scope.currentOption=$scope.initialOption;
        $scope.refreshView = function ()
        {
            document.getElementById("btOption1").innerHTML = this.currentOption.option1;
            document.getElementById("btOption2").innerHTML = this.currentOption.option2;
            $ionicScrollDelegate.$getByHandle('mainScroll').scrollTop();

        };

        $scope.optionClick = function (option) {
            if (option === "op1")
            {

                if (this.currentOption.nextIdOption1 > 0)
                {//case there is a next option
                    this.currentOption = this.turtleService.getOption(this.currentOption.nextIdOption1);
                    this.refreshView();

                } else
                {//case there is a turtle
                    console.log(this.turtleService.getTurtle(this.currentOption.turtleOption1));

                    $state.go("app.turtleListView", {"turtleId": this.currentOption.turtleOption1});
                    this.currentOption=this.initialOption;
                }
            }
            else
            {
                if (this.currentOption.nextIdOption2 > 0)
                {//case there is a next option
                    this.currentOption = this.turtleService.getOption(this.currentOption.nextIdOption2);
                    this.refreshView();
                } else
                {//case there is a turtle
                    console.log(this.turtleService.getTurtle(this.currentOption.turtleOption2));
                    $state.go("app.turtleListView", { "turtleId": this.currentOption.turtleOption2 });
                    this.currentOption=this.initialOption;

                }
            }
        };
    }

    angular
            .module('app')
            .controller('IdentifyCtrl', ['$scope', '$state', 'TurtleService', '$ionicScrollDelegate',IdentifyCtrl]);
})();
