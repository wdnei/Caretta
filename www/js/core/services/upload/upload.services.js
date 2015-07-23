/**
* Locations service.
*
* @author Wdnei Paixao {@link https://github.com/wdnei/caretta}
*/
(function () {
  'use strict';

  /**
  * @ngdoc service
  * @name UploadService
  * @module app.core
  *
  * @description
  * Service to upload a file to loopback.
  *
  * @ngInject
  */
  function UploadService($http,APIlb) {

    return {
      uploadFile: function (formData,folderName)
      {
        return $http.post(APIlb.url + "/Containers/"+folderName+"/upload", formData, {
          transformRequest: angular.identity,
          headers: {'Content-Type': undefined}
        });
      }
    };



  }

  angular
  .module('app.core')
  .factory('UploadService', ["$http","APIlb",UploadService]);



})();
