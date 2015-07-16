/**
 * news controller.
 *
 * @author Wdnei Paixao {@link https://github.com/wdnei/caretta}
 */
(function () {
    'use strict';
    /**
     * @ngdoc controller
     * @name NewsCtrl
     * @module app.turtleList
     * @description
     * Controller for the news page.
     *
     * @ngInject
     */
    function NewsCtrl($scope,$rootScope, NewsService,$ionicLoading,$ionicPopup, $ionicScrollDelegate, $window, $http) {

        



        $scope.goTo = function (link) {
            $window.open(link, '_system', 'location=yes');
            return false;
        };

        $scope.init = function () {
            $scope.showLoad("Carregando...");
            $http.get("http://www.tamar.org.br/arquivos/tamar.rss")
                    .success(function (data) {
                        $rootScope.hideLoad();
                        $scope.rssjson = xml2json.parser(data).rss;
                        $scope.items = $scope.rssjson.channel.item;
                        console.log($scope.rssjson.channel);
                        

                    })
                    .error(function (data) {
                        $rootScope.hideLoad();
                        $rootScope.showAlert("Erro",data.error.message)
                        console.log("ERROR: " + data);
                    });
        };

    }

    angular
            .module('app.news')
            .controller('NewsCtrl', NewsCtrl);
})();

