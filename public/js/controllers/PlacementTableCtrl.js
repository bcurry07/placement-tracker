angular.module('app').controller('placementTableCtrl', function($scope, PlacementData) {
    $scope.myVar = "Hello from Angular, placement table will go here";

    $scope.placements = PlacementData.query();
});

