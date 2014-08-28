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

        PlacementData.post(placement, function(response) {
            $location.url('/');
            notifier.notify('success','Placement added - yay!');
            console.log(response);
        },function(error) {
            console.log(error);
            notifier.notify('error','Something went wrong!');
        });

    };



});

