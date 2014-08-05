angular.module('app', ['ngResource','ngRoute']);

angular.module('app').config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
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

