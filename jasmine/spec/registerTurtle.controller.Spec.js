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


describe("TurtleCtrl Enviar registro de tartaruga", function() {
  var originalTimeout;
  var scope, controller,http;
  var rootScope, q;
  var httpBackend;
  var spyObj;
  var $Turtle,$UploadService,UploadService;
  var expectedResponse ={data:"foo"};



  beforeEach(module('app'));
  beforeEach(module('app.core'));




  beforeEach(inject(function (
    $rootScope,
    $state,
    $ionicScrollDelegate,
    $controller,
    $ionicLoading,
    $ionicPopup,
    $window,
    $http,
    Turtle,
    UploadService
  ) {
    rootScope=$rootScope;
    $UploadService=UploadService;
    $Turtle=Turtle;

    scope = $rootScope.$new();

    $Turtle=Turtle;


    //Que o usuario esteja logado
    spyOn(rootScope,"isLogged").and.callFake(function(){
      return true;
    });



    spyOn($UploadService,"uploadFile").and.callFake(function(){
      return {
        success: function (callback) {
          //chamar o callback success
          if(true){
            callback(expectedResponse);
          }
          //chamar o callback error
          return {
            error: function (callback) {

            }
          };
        }

      };
    });

    spyOn($Turtle,"create").and.callFake(function(register,callback){

      register.id=1;
      register.createAt=new Date();
      callback(register);

    });




    controller = $controller('RegisterTurtleCtrl', {
      $scope:scope,
      $rootScope:$rootScope,
      $ionicLoading:$ionicLoading,
      $ionicPopup:$ionicPopup,
      $ionicScrollDelegate,
      $window:$window,
      UploadService:$UploadService,
      Turtle:$Turtle
    });

    spyOn(scope,"init").and.callThrough();

    scope.init();



  }));




  it("Deveria ter o escopo $scope definido", function() {

    expect(scope).toBeDefined();


  });


  it("Deveria inicializar os dados da pagina", function() {

    expect(scope.init).toHaveBeenCalled();

  });


  describe('Quando enviar informação', function() {


    beforeEach(function() {

      scope.data = {
        imageURI: "sedgrdfgdf",
        comment: "dffoo",
        userName: "foo",
        userId: 1,
        date: new Date()
      };



      scope.image = {};
      scope.location = {};
      scope.location.lat = 324.324;
      scope.location.lng = 324.234;



      scope.register = {
        id: 0,
        comment: "comment",
        when: new Date(),
        location: {lat: 46.458, lng: 47.989},
        userName: "foo",
        imgUrl: "",
        userId: 1 //"currentUser.id"
      };






    });

    it("Deveria o usuario estar logado", function() {

      expect(scope.isLogged()).toBeTruthy();

    });

    it("Deveria os dados estarem inseridos", function() {

      expect(scope.data).toBeDefined();

    });

    it('Deveria os dados serem validos', function() {
      expect(scope.isValid()).toBeTruthy();
    });


    it('Deveria o registro ser enviado', function(done) {

      // spyOn(scope,"send").and.callFake(function(){
      //
      var currentTime = new Date().toLocaleString().split("/").join("_").split(" ").join("t").split(":").join("_").split(",").join("");
      var fileName = "u_" + "currentUser.id" + "_d" + currentTime + ".jpg";
      console.info("Enviando imagem...");
      $UploadService.uploadFile(new FormData(),"turtle").success(function (res) {
        scope.fileSent=true;

        console.info("Registrando tartaruga...");

        var fileUrl = "/containers/turtle/download/" + fileName;
        scope.register.imgUrl = fileUrl;

        $Turtle.create(scope.register, function (res) {
          scope.registerSent=true;

          console.info("Registrado", "Tartaruga Registrada com sucesso");

          console.log(res);
          expect(res).toBeDefined();
          done();
        }, function (err) {
          scope.registerSent=false;
          console.log("Erro ao realizar registro!",res);
        });

      })
      .error(function (res) {
        scope.fileSent=false;
        console.log(res);

      });
      // });


    });



    afterEach(function() {
      jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });

  });





});
