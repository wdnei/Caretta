/**
* Register Turtle controller.
*
* @author Wdnei Paixao {@link https://github.com/wdnei/caretta}
*/
(function () {
  //'use strict';
  /**
  * @ngdoc controller
  * @name RegisterTurtleCtrl
  * @module app.registerTurtle
  * @description
  * Controller for the to register a turtle page.
  *
  * @ngInject
  */
  function RegisterTurtleCtrl($scope,$window,$state,$rootScope, $ionicPopup, Turtle, PhotoService,UploadService, TurtleService, $ionicModal, $stateParams, $ionicScrollDelegate) {





    $scope.turtles = TurtleService.allTurtles();


    $scope.turtleOptions = TurtleService;
    $scope.initialOption = TurtleService.getFirstOption();
    $scope.currentOption = $scope.initialOption;

    $scope.refreshView = function ()
    {
      document.getElementById("btOption1").innerHTML = this.currentOption.option1;
      document.getElementById("btOption2").innerHTML = this.currentOption.option2;
      $ionicScrollDelegate.$getByHandle('mainScroll').scrollTop();

    };

    $scope.findTurtle = function (turtleId)
    {
      for (var i = 0; i < $scope.turtles.length; i++) {
        if ($scope.turtles[i].id === parseInt(turtleId)) {
          return $scope.turtles[i];
        }
      }

    };

    $scope.chosenSpecieIdSelect={};
    if ($stateParams.turtleId > 0)
    {
      $scope.chosenSpecieIdSelect.id = $scope.findTurtle($stateParams.turtleId).id;
    } else {
      $scope.chosenSpecieIdSelect.id = $scope.turtles[0].id;

    }

    $scope.optionClick = function (option) {
      if (option === "op1")
      {

        if (this.currentOption.nextIdOption1 > 0)
        {//case there is a next option
          this.currentOption = this.turtleOptions.getOption(this.currentOption.nextIdOption1);
          this.refreshView();

        } else
        {//case there is a turtle
          $scope.modal.hide();

          $scope.chosenSpecieId = $scope.findTurtle(this.currentOption.turtleOption1);
          $scope.setTurtleOnSelect($scope.chosenSpecieId.id);
          console.log($scope.chosenSpecieId);
          this.currentOption = this.initialOption;
          $scope.$apply();


        }
      }
      else
      {
        if (this.currentOption.nextIdOption2 > 0)
        {//case there is a next option
          this.currentOption = this.turtleOptions.getOption(this.currentOption.nextIdOption2);
          this.refreshView();
        } else
        {//case there is a turtle

          $scope.modal.hide();
          $scope.chosenSpecieId = $scope.findTurtle(this.currentOption.turtleOption2);//$scope.findTurtle(this.currentOption.turtleOption2);
          $scope.setTurtleOnSelect($scope.chosenSpecieId.id);
          this.currentOption = this.initialOption;
          $scope.$apply();

          console.log($scope.chosenSpecieId);
        }
      }
    };



    // Create the identify modal that we will use later
    $ionicModal.fromTemplateUrl('js/routes/identify/identify.html', {
      scope: $scope
    }).then(function (modal) {
      $scope.modal = modal;
    });

    $scope.closeModal = function ()
    {
      $scope.modal.hide();
    }

    $scope.identify = function () {
      $scope.modal.show();
    };








    $scope.takePicture = function () {
      try {
        PhotoService.takePicture().then(function (imageURI) {
          //console.log(imageURI);
          $scope.data.imageURI = imageURI;
          var image = document.getElementById('myImage');
          image.src = "data:image/jpeg;base64," + imageURI;

        }, function (err) {
          console.err(err);
        });
      } catch (err)
      {
        console.log(err);
        $ionicPopup.alert({
          title: 'Erro',
          template: err.message
        });

      }
    };

    $scope.getPicture = function () {
      var options = {
        maximumImagesCount: 1,
        width: 800,
        height: 800,
        quality: 80
      };

      try {

        var photoDeviceSource = PhotoService.getPhotoSource();



        PhotoService.getPhoto(photoDeviceSource.pictureSource.PHOTOLIBRARY).then(function (imageURI) {
          //console.log(imageURI);

          $scope.data.imageURI = imageURI;

          var image = document.getElementById('myImage');
          image.src = "data:image/jpeg;base64," + imageURI;
          $scope.$apply();

        }, function (err) {
          console.err(err);
          $ionicPopup.alert({
            title: 'Erro',
            template: err
          });
        });

      } catch (err)
      {
        console.log(err);
        $ionicPopup.alert({
          title: 'Erro',
          template: err.message
        });

      }

    };



    $scope.init = function ()
    {
      $scope.data = {
        imageURI: "",
        comment: "",
        userName: "",
        userId: 0,
        date: new Date()
      };



      $scope.image = {};
      $scope.location = {};
      $scope.location.lat = "Desconhecida";
      $scope.location.lng = "Desconhecida";

    }


    /**
    * Center map on user's current position
    */
    $scope.locate = function () {


      if (navigator.geolocation)
      {
        navigator.geolocation.getCurrentPosition(function (position) {
          $scope.location.position = position;
          $scope.location.lat = position.coords.latitude;
          $scope.location.lng = position.coords.longitude;
          document.getElementById("lat").innerHTML = position.coords.latitude;
          document.getElementById("lon").innerHTML = position.coords.longitude;
          $scope.$apply();

        }, function (err) {
          // error
          console.log("Location error!");
          console.log(err);
          $ionicPopup.alert({
            title: 'Erro localização',
            template: 'Ocorreu um erro ao identificar sua localização:' + err.message
          });
          $ionicPopup.alert({
            title: 'Erro localização',
            template: 'Tente novamente ou ative o ser GPS!'
          });
        });
      }
      else
      {
        $ionicPopup.alert({
          title: 'Erro localização',
          template: 'Ative seu GPS'
        });

      }


    };

    $scope.setTurtleOnSelect=function(id)
    {
      $scope.chosenSpecieIdSelect.id = $scope.findTurtle(id).id;
    };

    $scope.viewTurtle=function(id)
    {
      $state.go("app.turtleListView",{turtleId:$scope.chosenSpecieIdSelect.id},{reload:true});

    }



    $scope.isValid = function ()
    {
      if ($rootScope.isLogged())
      {
        var msg = "";
        if (isNaN($scope.location.lat) || isNaN($scope.location.lng))
        {
          msg += "Localização desconhecida - Ative o GPS.</br>";
        }
        if (!$scope.data.date)
        {
          msg += "Data não inserida.</br>";
        }

        if ($scope.data.imageURI=="")
        {
          msg += "Imagem não inserida.</br>";
        }

        if (msg != "")
        {
          $rootScope.showAlert("Dados incompletos!", msg);
          return false;
        }
        return true;
      } else
      {
        $rootScope.showAlert("", "Usuário necessita estar logado!");
        $rootScope.login();
        return false;
      }

      return true;
    }



    $scope.send = function ()
    {
      try{

        if ($scope.isValid())
        {
          var register = {
            id: 0,
            comment: $scope.data.comment,
            when: $scope.data.date,
            location: {lat: $scope.location.lat, lng: $scope.location.lng},
            specieId: $scope.chosenSpecieIdSelect.id,
            specie: $scope.findTurtle($scope.chosenSpecieIdSelect.id).nameLt,
            userName: $rootScope.currentUser.email,
            imgUrl: "",
            userId: $rootScope.currentUser.id

          };

          $rootScope.showLoad("Enviando imagem...");

          var blob = $rootScope.dataURItoBlob($scope.data.imageURI);
          var fd = new FormData();
          var currentTime = new Date().toLocaleString().split("/").join("_").split(" ").join("t").split(":").join("_").split(",").join("");
          var fileName = "u_" + $rootScope.currentUser.id + "_d" + currentTime + ".jpg";
          fd.append("myFile", blob, fileName);

          UploadService.uploadFile(fd,"turtle").success(function (res) {
            $rootScope.hideLoad();
            $rootScope.showLoad("Registrando tartaruga...");

            var fileUrl = "/containers/turtle/download/" + fileName;
            register.imgUrl = fileUrl;

            Turtle.create(register, function (res) {
              $rootScope.hideLoad();

              $rootScope.showAlert("Registrado", "Tartaruga Registrada com sucesso");
              $scope.cleanData();
              $state.reload();
              //$state.go('app.home');

              console.log(res);
            }, function (err) {
              $rootScope.hideLoad();
              // error
              var erro = "Erro ao realizar registro:";

              erro+=$rootScope.erroMessage(err);

              $rootScope.showAlert("Erro", erro);
              console.log(res);
            });

          })
          .error(function (res) {
            $rootScope.showAlert("Erro", "Ocorreu um erro ao realizar upload do arquivo:"+ $rootScope.erroMessage(res));
            console.log(res);
            $rootScope.hideLoad();
          });

          console.log(register);
        }


      }
      catch (err)
      {
        $rootScope.hideLoad();
        $rootScope.showAlert("Erro", err.message);
      }
    };

    $scope.changedTurtle=function(chosenSpecieIdSelect){
      $scope.setTurtleOnSelect(chosenSpecieIdSelect);
      $scope.$apply();
    };
    $scope.cleanData=function()
    {
      $scope.init();
      $scope.locate();
      var image = document.getElementById('myImage');
      image.src = "";

    }



  }


  angular
  .module('app')
  .controller('RegisterTurtleCtrl', RegisterTurtleCtrl);
})();
