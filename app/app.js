(function(){
	'use strict';

	angular.module('todo-ng', [ 'ngRoute','todo-ng-main','templates' ])
	  .config(function ($routeProvider) {
	    $routeProvider
	      .otherwise({
	        redirectTo: '/'
	      });
	  });
	  
})();