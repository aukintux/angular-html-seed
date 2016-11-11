// Single page application
var app = angular.module('receiptApp', ['ngRoute']);

// configure our routes
app.config(function($routeProvider) {

    $routeProvider.otherwise('/page_1')

    $routeProvider

        // route for the page_1 page
        .when('/page_1', {
            templateUrl : 'pages/page_1.html',
            controller  : 'page_1Controller'
        });

});

// page_1Controller
app.controller('page_1Controller', function($scope) {
   
});