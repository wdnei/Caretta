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
    function NewsService($q, $http) {

        var rss = {};

        return {
            getRss: function () {
                var q = $q.defer();

                $http.get("http://ajax.googleapis.com/ajax/services/feed/load", {params: {"v": "1.0", "q": "http://www.tamar.org.br/arquivos/tamar.rss"}})
                        .success(function (data) {
                            console.log(data.responseData);
                            rss.rssTitle = data.responseData.feed.title;
                            rss.rssUrl = data.responseData.feed.feedUrl;
                            rss.rssSiteUrl = data.responseData.feed.link;
                            rss.entries = data.responseData.feed.entries;
                            q.resolve(rss);

                        })
                        .error(function (data) {
                            console.log("ERROR: " + data);
                            q.reject(data);
                        });



                return q.promise;
            }
        };


    }



    angular
            .module('app.core')
            .factory('NewsService', NewsService);

})();