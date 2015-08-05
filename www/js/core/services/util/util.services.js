/**
* Util service.
*
* @author Wdnei Paixao {@link https://github.com/wdnei/caretta}
*/
(function () {
  'use strict';

  /**
  * @ngdoc service
  * @name UtilService
  * @module app.core
  *
  * @description
  * Service to get the util data.
  *
  * @ngInject
  */
  function UtilService() {
    // Might use a resource here that returns a JSON array
    return {
      //            getPicture: function (options) {
      //                var q = $q.defer();
      //
      //                navigator.camera.getPicture(function (result) {
      //                    // Do any magic you need
      //                    q.resolve(result);
      //                }, function (err) {
      //                    q.reject(err);
      //                }, options);
      //
      //                return q.promise;
      //            },
      // isOnline: function () {
      //   var isConnected = false;
      //   var networkConnection = navigator.connection;
      //   if (!networkConnection.type) {
      //     console.log('networkConnection.type is not defined');
      //     return false;
      //   }
      //
      //   switch (networkConnection.type.toLowerCase()) {
      //     case 'ethernet':
      //     case 'wifi':
      //     case 'cell_2g':
      //     case 'cell_3g':
      //     case 'cell_4g':
      //     case '2g':
      //     case '3g':
      //     case '4g':
      //     case 'cell':
      //     case 'cellular':
      //     isConnected = true;
      //     break;
      //   }
      //
      //   console.log('isOnline? ' + isConnected);
      //   return isConnected;
      // },
      erroMessage:function(err,data){
        var message="";

        if(err.status==0)
        {
          message+="Falha ao realizar ação. Verifique sua conexão";
        }

        if(err.status==422)
        {
          message+=err.data.error.message;
        }
        if(err.status==404)
        {
          message+="Dados não encontrado!";
        }
        if(err.status==401)
        {
          message+="Usuário não autorizados";
        }else {
          if(err.data && err.data.error)
          {
            message+=res.data.error.message;
          }
        }
        return message;
      }
      //
    }
  };

  angular
  .module('app.core')
  .factory('UtilService', UtilService);

})();
