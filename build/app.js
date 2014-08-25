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
'app controller goes here';
'common service goes here';
(function(){
  'use strict';


  angular.module('todo-ng-main',['ngRoute'])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'main/main.html',
          controller: 'ToDoCtrl'
        });
    })
    .controller('MainCtrl', function ($scope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    })

    .controller('ToDoCtrl', function ($scope){
      $scope.toDo = [];
      $scope.greeting = 'My To-Dos';

      $scope.addToDo = function(value){
        $scope.toDo.push({
          item: value,
        });
        $scope.ToDo = '';
      };
      $scope.remove = function(){   
        console.log(this);
        $scope.toDo.splice(this.$index, 1);
      };
    });

})();