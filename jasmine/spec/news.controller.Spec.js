/**
* Created by patricksullivan on 11/24/14.
*/


describe("NewsCtrl", function() {
  var originalTimeout;
  var scope, controller,http;
  beforeEach(module('app'));



  beforeEach(inject(function (
    $rootScope,
    $state,
    $ionicScrollDelegate,
    $controller,
    $ionicLoading,
    $ionicPopup,
    $window,
    $http,
    $httpBackend,$q) {

      originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
      jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

      $httpBackend.when('GET', 'http://www.tamar.org.br/arquivos/tamar.rss')
      .respond({rss:'<note><to>Tove</to><from>Jani</from><heading>Reminder</heading><body>Don\'t forget me this weekend!</body></note>'});

      http=$http;

      scope = $rootScope.$new();

      spyOn($http, 'get').and.callFake(function() {
        return {
          success: function(callback) { callback("<rss version=\"1.0\"><channel><item></item></channel></rss>")},
          error: function(callback){callback(null)}
        };
      });



      controller = $controller('NewsCtrl', {
        $scope:scope,
        $rootScope:$rootScope,
        $ionicLoading:$ionicLoading,
        $ionicPopup:$ionicPopup,
        $ionicScrollDelegate,
        $window:$window,
        $http:$http
      });

      scope.init();



    }));



    it("Deveria ter o escopo $scope definido", function() {

      expect(scope).toBeDefined();
    });

    it("lista de noticias deveria estar preenchida", function() {
      expect(scope.items).toBeDefined();

    });


    afterEach(function() {
      jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });



  });
