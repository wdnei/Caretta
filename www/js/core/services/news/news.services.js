/**
* News service.
*
* @author Wdnei Paixao {@link https://github.com/wdnei/caretta}
*/
(function () {
  'use strict';

  /**
  * @ngdoc service
  * @name NewsService
  * @module app.core
  *
  * @description
  * Service to get the InstructionsService data.
  *
  * @ngInject
  */
  function NewsService($http) {

    var promise = {};
    this.getRSSq= function () {

      promise=$http.get("http://www.tamar.org.br/arquivos/tamar.rss");

      return promise;
    };

    return {
      getRSS:this.getRSSq

    };


  }





  angular
  .module('app.core')
  .factory('NewsService', NewsService);

})();
