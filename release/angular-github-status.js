// @autor: bogdan.gradinariu@gmail.com
// @github: https://github.com/gion/angular-github-status-directive

;(function(){
'use strict';
	angular.module('githubStatus', []).constant('githubApiUrl', 'https://status.github.com/api/status.json');

	angular.module('githubStatus').directive('githubStatus', [
	  'githubStatusService',
	  function (githubStatusService) {
	    return {
	      scope: { refresh: '=' },
	      template: '<a href="https://status.github.com" target="_blank" class="status-{{status.status}}" title="GitHub API Status: {{status.status}}. Last checked on {{status.last_updated}}. Click for details."><span class="github-status-text">GitHub API Status: {{status.status}}</span></a>',
	      restrict: 'ACE',
	      link: function postLink(scope, element, attrs) {
	        element.addClass('github-status');
	        scope.status = githubStatusService;
	        // pull the status again whenever the "refresh" variable from the outerscope changes
	        // NOTE! this will refresh the status for ALL the directives
	        scope.$watch('refresh', function () {
	          githubStatusService.refresh();
	        });
	      }
	    };
	  }
	]);

	angular.module('githubStatus').factory('githubStatusService', [
	  '$http',
	  'githubApiUrl',
	  function ($http, githubApiUrl) {
	    var api = {
	        refresh: function () {
	          api.status = api.last_updated = undefined;
	          $http.jsonp(githubApiUrl + '?callback=JSON_CALLBACK').success(function (statusObj) {
	            angular.extend(api, statusObj);
	          });
	        }
	      };
	    api.refresh();
	    return api;
	  }
	]);