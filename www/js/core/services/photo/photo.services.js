/**
 * Photo service.
 *
 * @author Wdnei Paixao {@link https://github.com/wdnei/caretta}
 */
(function () {
    'use strict';

    /**
     * @ngdoc service
     * @name PhotoService
     * @module app.core
     * 
     * @description
     * Service to get the photo data.
     *
     * @ngInject
     */
    function PhotoService($q/*, $cordovaImagePicker*/) {
        // Might use a resource here that returns a JSON array
        var devicePhotoSource = {};
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // device APIs are available
        //
        function onDeviceReady() {
            devicePhotoSource = {
                pictureSource: navigator.camera.PictureSourceType,
                destinationType: navigator.camera.DestinationType
            };
        }


        return {
            takePicture: function (options) {
                var q = $q.defer();

                navigator.camera.getPicture(function (result) {
                    // Do any magic you need
                    q.resolve(result);
                }, function (err) {
                    q.reject(err);
                }, options);

                return q.promise;
            },
            getPicture1: function (options) {
                var q = $q.defer();

                navigator.camera.getPicture(function (result) {
                    // Do any magic you need
                    q.resolve(result);
                }, function (err) {
                    q.reject(err);
                }, options);

                return q.promise;
            },
            getPhotoSource: function ()
            {
                return devicePhotoSource;
            }

            ,
            getPicture2: function (options) {
//                var q = $q.defer();
//                $cordovaImagePicker.getPictures(function (result) {
//                    // Do any magic you need
//                    q.resolve(result);
//                    for (var i = 0; i < results.length; i++) {
//                        console.log('Image URI: ' + results[i]);
//                    }
//                }, function (err) {
//                    q.reject(err);
//                }, options);
//                return q.promise;
            },
            
            getPhoto: function (source) {
                var q = $q.defer();
                // Retrieve image file location from specified source
                navigator.camera.getPicture(function (result) {
                    // Do any magic you need
                    q.resolve(result);
                }, function (err) {
                    q.reject(err);
                }, {quality: 80,
                    destinationType: devicePhotoSource.destinationType.DATA_URL,
                    sourceType: source});
                return q.promise;
                
            }
        };
    }

    angular
            .module('app.core')
            .factory('PhotoService', PhotoService);

})();

