angular.module('app').controller('mainMenuCtrl', function($scope) {

    $scope.homePage = true;

    $scope.setActive = function() {
        $scope.homePage = !$scope.homePage;
        $scope.graphsPage = !$scope.graphsPage;
    };





});

