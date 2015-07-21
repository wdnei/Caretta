/**
* Created by patricksullivan on 11/24/14.
*/

describe("AppCtrl", function() {

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



    it("should have a scope variable defined", function() {

      expect(scope).toBeDefined();
    });


  });
