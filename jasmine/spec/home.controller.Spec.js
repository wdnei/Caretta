/**
* Created by patricksullivan on 11/24/14.
*/

describe("HomeCtrl", function() {

  var scope, controller;
  beforeEach(module('app'));

  beforeEach(inject(function (
    $rootScope,
    $state,
    $ionicScrollDelegate,
    $controller) {

      scope = $rootScope.$new();

      controller = $controller('HomeCtrl', {
        $scope: scope,
        $state: $state,
        $ionicScrollDelegate: $ionicScrollDelegate
      });
    }));



    it("should have a scope variable defined", function() {

      expect(scope).toBeDefined();
    });


  });
