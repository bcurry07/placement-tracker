angular.module('app').controller('placementTableCtrl', function($scope, $location, PlacementData) {


    $scope.placements = PlacementData.query();

    $scope.addNew = function() {
        $location.url('/new');
    }
});

