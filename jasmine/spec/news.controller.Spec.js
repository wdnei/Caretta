/**
* Created by patricksullivan on 11/24/14.
*/
//ver exemplo http://busypeoples.github.io/post/promises-in-angular-js/
jasmine.Spec.prototype.removeAllSpies = function() {
  for (var i = 0; i < this.spies_.length; i++) {
    var spy = this.spies_[i];
    spy.baseObj[spy.methodName] = spy.originalValue;
  }
  this.spies_ = [];
};


describe("NewsCtrl", function() {
  var originalTimeout;
  var scope, controller,http;
  var rootScope, q;
  var httpBackend;
  var spyObj;
  var NewsService;



  beforeEach(module('app'));
  beforeEach(module('app.core'));



  beforeEach(inject(function (
    $rootScope,
    $state,
    $ionicScrollDelegate,
    $controller,
    $ionicLoading,
    $ionicPopup,
    $window
  ) {
    rootScope=$rootScope;


    scope = $rootScope.$new();
    scope.safeApply = function(fn) {
      var phase = this.$root.$$phase;
      if(phase == '$apply' || phase == '$digest') {
        if(fn && (typeof(fn) === 'function')) {
          fn();
        }
      } else {
        this.$apply(fn);
      }
    };




    controller = $controller('NewsCtrl', {
      $scope:scope,
      $rootScope:$rootScope,
      $ionicLoading:$ionicLoading,
      $ionicPopup:$ionicPopup,
      $ionicScrollDelegate,
      $window:$window
    });



  }));


  it("Deveria ter o escopo $scope definido", function() {

    expect(scope).toBeDefined();

  });









});

describe('Quando NewsService foi carregada com sucesso', function() {
  var originalTimeout;

  var $NewsService,scope;
  var $done;

  beforeEach(module('app'));
  beforeEach(module('app.core'));


  var expectedResponse ={data:"<rss version=\"1.0\"><channel><item>dsfdsf</item><item>dsfdsf</item></channel></rss>"};
  var rootScope,timeout,NewsService;

  
  beforeEach(inject(function ($rootScope,$q,$timeout,NewsService) {

    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 15000;
    q=$q;

    $NewsService=NewsService;

    spyOn($NewsService,"getRSS").and.callFake(function(){
      return {
        then: function (callback) {
          // mockedResponseData is passed to callback
          callback(expectedResponse);
        }
      };


    })


    rootScope=$rootScope;
    scope = $rootScope.$new();
    //    spyOn(this.NewsService,"getRSS");
  }));


  beforeEach(function(done) {
    var promise=$NewsService.getRSS();
    console.log("pr",$NewsService.getRSS);


    promise.then(function(result) {
      scope.result=result;
      scope.rssjson = xml2json.parser(result.data).rss;
      scope.items = scope.rssjson.channel.item;
      done();
    },
    // on failure...
    function(errorMsg) {
      console.log("ERROR: ", errorMsg);
    });
  });


  it('Deveria o NewsService.getRSS() ser chamado', function() {
    expect($NewsService.getRSS).toHaveBeenCalled();

  });



  it('Deveria o NewsService.getRSS() esperados', function() {
    console.log("result",scope.result);
    expect(scope.result.data).toEqual(expectedResponse.data);

  });

  it('Deveria o NewsService.getRSS() retornado os dados', function() {
    expect(scope.items).toBeDefined();

  });

  it('Deveria o NewsService.getRSS() retornado 2 items', function() {
    expect(scope.items.length).toEqual(2);

  });





  afterEach(function() {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
  });

});
