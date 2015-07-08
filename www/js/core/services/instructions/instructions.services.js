/**
 * InstructionsService service.
 *
 * @author Wdnei Paixao {@link https://github.com/wdnei/caretta}
 */
(function () {
    'use strict';

    /**
     * @ngdoc service
     * @name InstructionsService
     * @module app.core
     * 
     * @description
     * Service to get the InstructionsService data.
     *
     * @ngInject
     */
    function InstructionsService() {

        var instructionsObj = {};

        instructionsObj.instructions = {
            newLocations: {
                text: 'To add a new location, tap and hold on the map',
                seen: false
            }
        };

        return instructionsObj;

    }


    angular
            .module('app.core')
            .factory('InstructionsService', InstructionsService);

})();