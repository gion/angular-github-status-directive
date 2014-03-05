'use strict';

angular.module('githubStatus')
  .factory('githubStatusService', ['$http', 'githubApiUrl', function ($http, githubApiUrl) {

    var api = {
      refresh: function() {
        api.status = api.last_updated = undefined;

        $http.jsonp(githubApiUrl + '?callback=JSON_CALLBACK')
          .success(function(statusObj) {
            angular.extend(api, statusObj);
          });
      }
    };

    api.refresh();

    return api;
  }]);
