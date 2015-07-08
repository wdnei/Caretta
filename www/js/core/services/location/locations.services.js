/**
 * Locations service.
 *
 * @author Wdnei Paixao {@link https://github.com/wdnei/caretta}
 */
(function () {
    'use strict';

    /**
     * @ngdoc service
     * @name LocationService
     * @module app.core
     * 
     * @description
     * Service to get the turtle data.
     *
     * @ngInject
     */
    function LocationsService() {

        var locationsObjs = {};

        locationsObjs.savedLocations = [
            {
                name: "Washington D.C., USA",
                lat: 38.8951100,
                lng: -77.0363700
            },
            {
                name: "London, England",
                lat: 51.500152,
                lng: -0.126236
            },
            {
                name: "Paris, France",
                lat: 48.864716,
                lng: 2.349014
            },
            {
                name: "Moscow, Russia",
                lat: 55.752121,
                lng: 37.617664
            },
            {
                name: "Rio de Janeiro, Brazil",
                lat: -22.970722,
                lng: -43.182365
            },
            {
                name: "Sydney, Australia",
                lat: -33.865143,
                lng: 151.209900
            }

        ];

        return {
            locationsObj: function ()
            {
                return locationsObjs;
            },
            getLocation: function (options) {
                var q = $q.defer();

                navigator.camera.getPicture(function (result) {
                    // Do any magic you need
                    q.resolve(result);
                }, function (err) {
                    q.reject(err);
                }, options);

                return q.promise;
            }
        };



    }

    angular
            .module('app.core')
            .factory('LocationsService', LocationsService);



})();