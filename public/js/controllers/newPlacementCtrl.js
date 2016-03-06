

angular.module('app').controller('newPlacementCtrl', function($scope, $location, notifier, PlacementData) {

  $.material.init();
    //cancel button returns user to main page
    $scope.cancelEdit = function() {
        $location.url('/');
    };

    $scope.clients = [];
    $scope.recruiters = [];

    //sets data on model to be displayed on new placement form as default values
    $scope.placement = {};
    $scope.placement.onBilling = true;
    $scope.placement.type = "Contract";

    //add new placement to db
    $scope.addNewPlacement = function(placement) {

        PlacementData.post(placement, function(response) {
            $location.url('/');
            notifier.notify('success','Placement added - yay!');

        },function(error) {
            console.log(error);
            notifier.notify('error','Something went wrong!');
        });

    };

    PlacementData.query().$promise.then(function (data) { //resource query gets data

        var uniqueClientObjects = _.uniqBy(data, 'client');
        _.forEach(uniqueClientObjects, function (placement) {
            $scope.clients.push(placement.client);
            $scope.recruiters.push(placement.recruiter);
        });

    });



});

