/**
 * Map controller.
 *
 * @author Wdnei Paixao {@link https://github.com/wdnei/caretta}
 */
(function () {
    //'use strict';
    /**
     * @ngdoc controller
     * @name MapCtrl
     * @module app.map
     * @description
     * Controller for the map page.
     *
     * @ngInject
     */
    function MapCtrl(
            $scope,
            $ionicModal,
            $ionicPopup,
            LocationsService,
            InstructionsService
            ) {

        /**
         * Once state loaded, get put map on scope.
         */
        $scope.$on("$stateChangeSuccess", function () {

            $scope.locations = LocationsService.savedLocations;
            $scope.newLocation;

            if (!InstructionsService.instructions.newLocations.seen) {

                var instructionsPopup = $ionicPopup.alert({
                    title: 'Add Locations',
                    template: InstructionsService.instructions.newLocations.text
                });
                instructionsPopup.then(function (res) {
                    InstructionsService.instructions.newLocations.seen = true;
                });

            }

            $scope.map = {
                defaults: {
                    tileLayer: 'https://api.tiles.mapbox.com/v4/wdneipaixao.9d4fa182/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoid2RuZWlwYWl4YW8iLCJhIjoibGxxYTdnMCJ9.4K3njZmUSbQzL8AfxotmIQ',
                    maxZoom: 18,
                    zoomControlPosition: 'bottomleft'
                },
                markers: {},
                events: {
                    map: {
                        enable: ['context'],
                        logic: 'emit'
                    }
                }
            };

            $scope.goTo(0);

        });

        var Location = function () {
            if (!(this instanceof Location))
                return new Location();
            this.lat = "";
            this.lng = "";
            this.name = "";
        };

        $ionicModal.fromTemplateUrl('templates/addLocation.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.modal = modal;
        });

        /**
         * Detect user long-pressing on map to add new location
         */
        $scope.$on('leafletDirectiveMap.contextmenu', function (event, locationEvent) {
            $scope.newLocation = new Location();
            $scope.newLocation.lat = locationEvent.leafletEvent.latlng.lat;
            $scope.newLocation.lng = locationEvent.leafletEvent.latlng.lng;
            $scope.modal.show();
        });

        $scope.saveLocation = function () {
            LocationsService.savedLocations.push($scope.newLocation);
            $scope.modal.hide();
            $scope.goTo(LocationsService.savedLocations.length - 1);
        };

        /**
         * Center map on specific saved location
         * @param locationKey
         */
        $scope.goTo = function (locationKey) {

            var location = LocationsService.savedLocations[locationKey];

            $scope.map.center = {
                lat: location.lat,
                lng: location.lng,
                zoom: 12
            };

            $scope.map.markers[locationKey] = {
                lat: location.lat,
                lng: location.lng,
                message: location.name,
                focus: true,
                draggable: false
            };

        };

        /**
         * Center map on user's current position
         */
        $scope.locate = function () {

            navigator.geolocation.getCurrentPosition(function (position) {
                        $scope.map.center.lat = position.coords.latitude;
                        $scope.map.center.lng = position.coords.longitude;
                        $scope.map.center.zoom = 15;

                        $scope.map.markers.now = {
                            lat: position.coords.latitude,
                            lng: position.coords.longitude,
                            message: "You Are Here",
                            focus: true,
                            draggable: false
                        };

                    }, function (err) {
                        // error
                        console.log("Location error!");
                        console.log(err);
                    });

        };

    }

    angular
            .module('app.map')
            .controller('MapCtrl', MapCtrl);
})();

