/**
 * Register Nest controller.
 *
 * @author Wdnei Paixao {@link https://github.com/wdnei/caretta}
 */
(function () {
    //'use strict';
    /**
     * @ngdoc controller
     * @name RegisterNestCtrl
     * @module app.registerNest
     * @description
     * Controller for the to register a Nest page.
     *
     * @ngInject
     */
    function RegisterNestCtrl($scope, $ionicPopup, PhotoService) {




        $scope.data = {
            date: new Date(),
            imageURI:''
        };
        
        



        $scope.takePicture = function () {
            PhotoService.takePicture().then(function (imageURI) {
                console.log(imageURI);
                $scope.data.imageURI = imageURI;
                var image = document.getElementById('myImage');
                    image.src = imageURI;
                
            }, function (err) {
                console.err(err);
            });
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
//            $ionicPopup.alert({
//                    title: 'Erro localização',
//                    template: JSON.stringify(photoDeviceSource)
//                });


                PhotoService.getPhoto(photoDeviceSource.pictureSource.PHOTOLIBRARY).then(function (imageURI) {
                    console.log(imageURI);
//                       $ionicPopup.alert({
//                    title: 'Erro',
//                    template: imageURI
//                });
                    $scope.data.imageURI = imageURI;
                    $scope.$apply(); 
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


//            PhotoService.getPicture1(options).then(function (imageURI) {
//                console.log(imageURI);
//                $scope.lastPhoto = imageURI[0];
//            }, function (err) {
//                console.err(err);
//            });
        };


        /**
         * Center map on user's current position
         */
        $scope.locate = function () {
            $scope.lat = "Deconhecida";
            $scope.lon = "Deconhecida";
            $scope.date = {
                value: new Date()
            };
            if (navigator.geolocation)
            {
                navigator.geolocation.getCurrentPosition(function (position) {
                    $scope.position = position;
                    $scope.lat = position.coords.latitude;
                    $scope.lon = position.coords.longitude;
                    document.getElementById("lat").innerHTML = position.coords.latitude;
                    document.getElementById("lon").innerHTML = position.coords.longitude;

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
                        template: 'Tente novamente!'
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

    }


    angular
            .module('app.registerNest')
            .controller('RegisterNestCtrl', RegisterNestCtrl);
})();

