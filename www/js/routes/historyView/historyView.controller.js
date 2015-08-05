/**
* History View controller.
*
* @author Wdnei Paixao {@link https://github.com/wdnei/caretta}
*/
(function () {
  //'use strict';
  /**
  * @ngdoc controller
  * @name HistoryViewCtrl
  * @module app
  * @description
  * Controller for the to view the history
  *
  * @ngInject
  */
  function HistoryViewCtrl($scope,$window, $rootScope,APIlb, $ionicPopup, User, $ionicModal, $stateParams, $ionicScrollDelegate) {



    $scope.types=[
      {id:"turtle",name:"Tartaruga"},
      {id:"nest",name:"Ninho"},
      {id:"complaint",name:"Denúncia"}
    ];

    $scope.historyType=$scope.types[0];

    $scope.items=[];
    $scope.APIUrl=APIlb.url;

    $scope.openMap = function (item) {

      $window.open("http://maps.google.com/maps?ll="+item.location.lat+","+item.location.lng+"&q="+item.location.lat+","+item.location.lng+"&z=18", '_system', 'location=yes');

    };

    $scope.isSet = function (item)
    {
      if((typeof item) !=='undefined')
      {
        return true;
      }
      return false;
    }



    $scope.init=function(){
      if($rootScope.isLogged())
      {
        var req={
          "id": $rootScope.currentUser.id,
          "filter":{"include":["turtles", "nests","complaints"]}
        };
        $rootScope.showLoad("Carregando Dados...");

        User.findById(req, function (res) {
          console.log("resultado",res);
          $scope.user=res;
          $scope.loadItems($scope.historyType);
          $rootScope.hideLoad();

        }, function (err) {
          $rootScope.hideLoad();
          // error
          var erro = "Erro ao realizar registro!";

          $rootScope.showAlert(erro, err.status);
          console.log("err",err);

        });

      } else
      {
        $rootScope.showAlert("", "Usuário necessita estar logado!");
        $rootScope.login();
      }

      $scope.$broadcast('scroll.refreshComplete');


    };



    $scope.loadItems=function(historyType){

      $rootScope.showLoad("Carregando Dados...");
      $scope.historyType=historyType;
      if($scope.historyType.id == "turtle")
      {
        $scope.user.turtles.sort(function(a,b){
          // Turn your strings into dates, and then subtract them
          // to get a value that is either negative, positive, or zero.
          return new Date(b.when) - new Date(a.when);
        });

        $scope.items=$scope.user.turtles;


      }else if($scope.historyType.id == "nest")
      {
        $scope.user.nests.sort(function(a,b){
          // Turn your strings into dates, and then subtract them
          // to get a value that is either negative, positive, or zero.
          return new Date(b.when) - new Date(a.when);
        });

        $scope.items=$scope.user.nests;
      }else if($scope.historyType.id == "complaint")
      {
        $scope.user.complaints.sort(function(a,b){
          // Turn your strings into dates, and then subtract them
          // to get a value that is either negative, positive, or zero.
          return new Date(b.when) - new Date(a.when);
        });
        $scope.items=$scope.user.complaints;
      }
      $rootScope.hideLoad();

    }








    // Create the identify modal that we will use later
    $ionicModal.fromTemplateUrl('js/routes/historyView/historyViewItem.html', {
      scope: $scope
    }).then(function (modal) {
      $scope.modal = modal;
    });

    $scope.closeModal = function ()
    {
      $scope.item=null;
      $scope.modal.hide();
    }

    $scope.open = function (item) {
      $scope.item=item;
      $scope.modal.show();
    };
  }


  angular
  .module('app')
  .controller('HistoryViewCtrl', HistoryViewCtrl);
})();
