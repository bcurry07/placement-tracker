angular.module('app').factory('PlacementData', function($resource) {
    return $resource('/api/placements/:_id', {_id: "@id"}, {
        update: {method:'PUT', isArray:false},
        get: {method: 'GET', isArray:true}
    });

});