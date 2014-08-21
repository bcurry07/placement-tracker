angular.module('app').controller('editPlacementCtrl', function($scope, $location, PlacementData, $routeParams, $route, $filter, notifier, editingPlacement) {
    //Cancel button returns to main page
    $scope.cancelEdit = function() {
        $location.url('/');
    };

    //set the placement that was clicked on the table to the scope placement for this page
            var placement = editingPlacement.selectedPlacement;
           placement.date = $filter('dateFilter')(placement.date); //filter date from ISO to MM/DD/YY
            $scope.placement = placement;


    //save edits to placement
    $scope.updatePlacement = function(placement) {
        var placement_id = $route.current.pathParams.placementId;
        if (!placement.notes) placement.notes = ""; //set notes to "" so that it doesnt send a null back and cause an error

        PlacementData.update({_id: placement_id}, placement, function () {
            $location.url('/');
            notifier.notify('Placement updated!');
        }, function (error) {

            console.log(error);
            notifier.notify("Something went wrong!");


        });

    };

});

