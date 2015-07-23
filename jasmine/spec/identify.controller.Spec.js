/**
* Created by patricksullivan on 11/24/14.
*/

describe("IdentifyCtrl Quando iniciar a pagina", function() {

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



    it("Deveria o scope esta definido", function() {

      expect(scope).toBeDefined();
    });

    it("Deveria a primeira opcao estar carregada", function() {
      expect(scope.initialOption).toBeDefined();
      console.log(scope.initialOption);
    });


  });
