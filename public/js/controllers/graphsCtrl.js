angular.module('app').controller('graphsCtrl', function($scope, $location, periodsSchedule) {
  $.material.init();

        //declare years array to hold year data for graphs page so it can be called using ng-repeat in html
        $scope.years = [];

        var today = new Date();

    var periods = periodsSchedule.getPeriodsSchedule();

    _.forEach(periods, function (period) {
        /*if (period.fiscalYear === 2016 && period.number === 8) {
            console.log(today.getTime());
        }*/
       if (today.getTime() > period.startDate.getTime() && today.getTime() < period.endDate.getTime()) {
           $scope.years.push(period.fiscalYear, period.fiscalYear - 1, period.fiscalYear - 2);
       }
    });

});






