angular.module('app').controller('editPlacementCtrl', function($scope, $location, PlacementData, $routeParams, $route, $filter, notifier) {

    $scope.cancelEdit = function() {
        $location.url('/');
    };

    $scope.add_new = false;

    $scope.updatePlacement = function(placement) {
        notifier.notify('Placement updated!');
    };
    var placement_id = $route.current.pathParams.placementId;



        PlacementData.query( {_id: placement_id}).$promise.then(function(data) {
            var placement = data[0];
            placement.date = $filter('date')(placement.date, 'shortDate');
            $scope.placement = placement;
        });





});

