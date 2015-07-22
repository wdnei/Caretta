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
  function NewsCtrl($scope,$rootScope, NewsService,$ionicLoading,$ionicPopup, $ionicScrollDelegate, $window) {





    $scope.goTo = function (link) {
      $window.open(link, '_system', 'location=yes');
      return false;
    };

    $scope.init = function () {
      $scope.showLoad("Carregando...");
      try{

        // $http.get("http://www.tamar.org.br/arquivos/tamar.rss")
        //         .success(function (data) {
        //             $rootScope.hideLoad();
        //             $scope.rssjson = xml2json.parser(data).rss;
        //             $scope.items = $scope.rssjson.channel.item;
        //             console.log($scope.rssjson.channel);
        //
        //
        //         })
        //         .error(function (data) {
        //             $rootScope.hideLoad();
        //             $rootScope.showAlert("Erro ao carregar",data)
        //             console.log("ERROR: ", data);
        //         });

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
        function(errorMsg) {
          $rootScope.hideLoad();
          $rootScope.showAlert("Erro ao carregar News",errorMsg)
          console.log("ERROR: ", errorMsg);
        });

      }
      catch (err)
      {
        $rootScope.hideLoad();
        $rootScope.showAlert("Erro", err.message);
      }
    };

  }

  angular
  .module('app')
  .controller('NewsCtrl', ['$scope','$rootScope', 'NewsService','$ionicLoading','$ionicPopup', '$ionicScrollDelegate', '$window',NewsCtrl]);
})();
