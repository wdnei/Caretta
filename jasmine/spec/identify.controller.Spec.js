/**
* Created by patricksullivan on 11/24/14.
*/

describe("IdentifyCtrl", function() {

  var scope, controller;
  beforeEach(module('app'));

  beforeEach(inject(function (
    $rootScope,
    $state,
    $ionicScrollDelegate,
    $controller) {

      scope = $rootScope.$new();

      controller = $controller('IdentifyCtrl', {
        $scope: scope,
        $state: $state,
        $ionicScrollDelegate: $ionicScrollDelegate
      });
    }));



    it("should have a scope variable defined", function() {

      expect(scope).toBeDefined();
    });

    it("initial turtle option has to be defined", function() {
      expect(scope.initialOption).toBeDefined();
      console.log(scope.initialOption);
    });


  });
