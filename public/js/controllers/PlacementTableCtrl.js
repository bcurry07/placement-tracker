angular.module('app').controller('placementTableCtrl', function($scope, $location, PlacementData, onBillCount) {


    PlacementData.query().$promise.then(function(data) {
       $scope.placements = data;
       $scope.onBillingCount = onBillCount.getCount(data);
    });



    $scope.addNew = function() {
        $location.url('/new');
    };

    $scope.editPlacement = function(placement) {
      var placementId = placement._id;
        $location.url('/edit/' + placementId);
    };
});

