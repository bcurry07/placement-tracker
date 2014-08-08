angular.module('app', ['ngResource','ngRoute']);

angular.module('app').config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
        //this routes the user to the various html pages
        //when the url takes the user to the 'when' location then it diverts them to the template url
        //which uses the controller shown
        //this ultimately pings the server-side routing which further directs the user along their way
        .when('/',
        {
            templateUrl: '/partials/main',
            controller: 'placementTableCtrl'
        }).when('/new',
        {
            templateUrl: '/partials/addPlacementForm',
            controller: 'newPlacementCtrl'
        }).when('/edit/:placementId',
        {
            templateUrl: '/partials/EditPlacementForm',
            controller: 'editPlacementCtrl'
        }).when('/graphs',
        {
            templateUrl: '/partials/graphs',
            controller: 'graphsCtrl'
        });

});

