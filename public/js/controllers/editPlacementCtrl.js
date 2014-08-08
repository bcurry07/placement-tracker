angular.module('app').controller('editPlacementCtrl', function($scope, $location, PlacementData, $routeParams, $route, $filter, notifier, editingPlacement) {

    $scope.cancelEdit = function() {
        $location.url('/');
    };

    $scope.add_new = false;



            var placement = editingPlacement.selectedPlacement;
           placement.date = $filter('dateFilter')(placement.date);
            $scope.placement = placement;



    $scope.updatePlacement = function(placement) {
        var placement_id = $route.current.pathParams.placementId;
        if (!placement.notes) placement.notes="";

        PlacementData.update({_id: placement_id}, placement);

            $location.url('/');
            notifier.notify('Placement updated!');
        };



});

