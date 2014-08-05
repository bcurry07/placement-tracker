angular.module('app').controller('editPlacementCtrl', function($scope, $location, PlacementData, $routeParams, $route, $filter, notifier) {

    $scope.cancelEdit = function() {
        $location.url('/');
    };

    $scope.add_new = false;

    var placement_id = $route.current.pathParams.placementId;

        PlacementData.query( {_id: placement_id}).$promise.then(function(data) {
            console.log(data);
            var placement = data[0];
            console.log(placement);
            placement.date = $filter('date')(placement.date, 'shortDate');
            $scope.placement = placement;
        });


    $scope.updatePlacement = function(placement) {

        PlacementData.update({_id: placement_id}, placement);

            $location.url('/');
            notifier.notify('Placement updated!');
        };



});

