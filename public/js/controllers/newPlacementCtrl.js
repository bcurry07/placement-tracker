angular.module('app').controller('newPlacementCtrl', function($scope, $location, notifier, PlacementData) {

    $scope.cancelEdit = function() {
        $location.url('/');
    };


    $scope.add_new = true;
    $scope.placement = {};
    $scope.placement.onBilling = "Yes";
    $scope.placement.type = "Contract";

    $scope.addNewPlacement = function(placement) {

        PlacementData.post(placement);
        $location.url('/');
        notifier.notify('Placement added - yay!');
    };

});

