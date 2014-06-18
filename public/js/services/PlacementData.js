angular.module('app').factory('PlacementData', function($resource) {
    var PlacementResource = $resource('/api/placements/:_id', {_id: "@id"}, {
        update: {method:'PUT', isArray:false}
    });
    return PlacementResource;
});