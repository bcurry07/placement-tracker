angular.module('app').controller('newPlacementCtrl', function($scope, $location, notifier) {

    $scope.cancelEdit = function() {
        $location.url('/');
    };

    $scope.add_new = true;
    $scope.placement = {};
    $scope.placement.onBilling = "Yes";
    $scope.placement.type = "Contract";

    $scope.addNewPlacement = function(placement) {
        notifier.notify('Placement added - yay!');
    };

});

