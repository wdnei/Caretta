/**
* Created by patricksullivan on 11/24/14.
*/

describe("AppCtrl Quando iniciar a pagina", function() {

  var scope, controller;
  beforeEach(module('app'));

  beforeEach(inject(function (
    $rootScope,
    $state,
    $ionicScrollDelegate,
    $controller,
    $ionicModal,
    $timeout,
    $ionicLoading,
    $ionicPopup) {

      scope = $rootScope.$new();

      controller = $controller('AppCtrl', {
        $scope:scope,
        $rootScope:$rootScope,
        $ionicModal:$ionicModal,
        $timeout:$timeout,
        $ionicLoading:$ionicLoading,
        $ionicPopup:$ionicPopup
      });
    }));



    it("Deveria o scope esta definido", function() {

      expect(scope).toBeDefined();
    });


  });
