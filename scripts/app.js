var myApp = angular.module('myApp', ['ngRoute']);

myApp.constant('URL', 'https://api.parse.com/1/classes/Job');

myApp.config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'temps/table.html',
            controller: 'showController'
        })
        .when('/add', {
            templateUrl: 'temps/single.html',
            controller: 'submitController'
        })
        .otherwise({
            redirectTo: '/'
        });
});