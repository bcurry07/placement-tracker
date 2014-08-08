angular.module('app').controller('newPlacementCtrl', function($scope, $location, notifier, PlacementData) {

    //cancel button returns user to main page
    $scope.cancelEdit = function() {
        $location.url('/');
    };


    //sets data on model to be displayed on new placement form as default values
    $scope.placement = {};
    $scope.placement.onBilling = "Yes";
    $scope.placement.type = "Contract";

    //add new placement to db
    $scope.addNewPlacement = function(placement) {

        PlacementData.post(placement);
        $location.url('/');
        notifier.notify('Placement added - yay!');
    };



});

