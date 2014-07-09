angular.module('app').controller('newPlacementCtrl', function($scope, $location) {

    $scope.cancelEdit = function() {
        $location.url('/');
    };

    $scope.addNewPlacement = function(placement) {

    };

});

