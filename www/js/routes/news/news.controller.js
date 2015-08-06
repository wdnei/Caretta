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
  function NewsCtrl($scope,$rootScope,NewsService, $ionicLoading,$ionicPopup, $ionicScrollDelegate, $window) {
    $scope.items=[];




    $scope.goTo = function (link) {
      $window.open(link, '_system', 'location=yes');
      return false;
    };

    $scope.toDate=function(str){
      return new Date(str);
    };

    $scope.init = function () {
      $scope.showLoad("Carregando...");
      try{

        NewsService.getRSS()
        // on success...
        .then(function(result) {
          console.log("result",result);
          $rootScope.hideLoad();
          $scope.result=result.data;
          $scope.rssjson = xml2json.parser(result.data).rss;
          $scope.items = $scope.rssjson.channel.item;
          console.log($scope.rssjson.channel);
        },
        // on failure...
        function(res) {
          $scope.items=[];
          $rootScope.hideLoad();
          $rootScope.showAlert("Erro ao carregar News",$rootScope.erroMessage(res))
          console.log("ERROR: ", res);
        });

      }
      catch (err)
      {
        $scope.items=[];
        $rootScope.hideLoad();
        $rootScope.showAlert("Erro", err.message);
      }
      $scope.$broadcast('scroll.refreshComplete');
    };

  }

  angular
  .module('app')
  .controller('NewsCtrl', ['$scope','$rootScope', 'NewsService','$ionicLoading','$ionicPopup', '$ionicScrollDelegate', '$window',NewsCtrl]);
})();
