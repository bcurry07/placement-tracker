angular.module('app').controller('placementTableCtrl', function($scope, $location, PlacementData, onBillCount, OnBillCountByClient, notifier, editingPlacement) {

    $scope.filtered = false;
    $scope.reverseSort = false;
    $scope.placementSortOrder = "-date";
    $scope.billingCountSortOrder = "-count";



    $scope.sortTable = function(item) {
        $scope.filterOnBilling = "yes";
        $scope.filterClient = item.client;
        $scope.selected = item;
    };

    $scope.isSelected = function(item){
        return $scope.selected === item;
    };

    var getData = function() {

        PlacementData.query().$promise.then(function (data) {

            $scope.placements = data;

            $scope.onBillingCount = onBillCount.getCount(data);

            OnBillCountByClient.getList($scope.placements).then(function (list) {
                $scope.list = list;
            });
        });
    };

    $scope.removeFilter = function() {
        $scope.filterOnBilling = "";
        $scope.filterClient = "";
        $scope.selected = "";
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


        getData();
        notifier.notify('Placement deleted');
    };


    getData();


});

