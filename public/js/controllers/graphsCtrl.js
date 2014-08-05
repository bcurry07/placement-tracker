angular.module('app').controller('graphsCtrl', function($scope, $location, yearlyData) {

        $scope.years = [];

        var currentYear = new Date().getFullYear();
        var prevYear = currentYear - 1;

        yearlyData.getData(currentYear).then(function(data) {
            var currentYear_contract = data.contract;
            var currentYear_perm = data.perm;

            $scope.years.push({
                year: currentYear,
                contractCount: currentYear_contract,
                permCount: currentYear_perm
            });


        });

        yearlyData.getData(prevYear).then(function(data) {
            var prevYear_contract = data.contract;
            var prevYear_perm = data.perm;

            $scope.years.push({
                year: prevYear,
                contractCount: prevYear_contract,
                permCount: prevYear_perm
            });


    });


    });






