angular.module('app').controller('placementTableCtrl', function($scope, $location, PlacementData, onBillCount, OnBillCountByClient, notifier, editingPlacement) {

    $scope.reverseSort = false;
    $scope.placementSortOrder = "-date";
    $scope.billingCountSortOrder = "-count";
    $scope.sortTable = function(client) {
        $scope.filterOnBilling = "yes";
        $scope.filterClient = client;
    };

    var getData = function() {

        PlacementData.query().$promise.then(function (data) {
            //console.log(data);
            $scope.placements = data;

            $scope.onBillingCount = onBillCount.getCount(data);

            OnBillCountByClient.getList($scope.placements).then(function (list) {
                $scope.list = list;
            });
        });
    };


    $scope.addNew = function() {
        $location.url('/new');
    };

    $scope.editPlacement = function(placement) {
        editingPlacement.selectedPlacement = placement;
      var placementId = placement._id;
        $location.url('/edit/' + placementId);
    };



    $scope.setPlacementToDelete = function(placement) {
        $scope.placementToDelete = placement;
    };

    $scope.deletePlacement = function() {
        var placementId = $scope.placementToDelete._id;
        PlacementData.remove({_id: placementId});

        $location.url('/');
        getData();
        notifier.notify('Placement deleted');
    };


    getData();


});

