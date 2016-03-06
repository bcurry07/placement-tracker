
//highcharts plug-in to create graphs using a directive as an attribute in the html tag

angular.module('app').directive('highChart', function (PlacementData, periodsSchedule) {
    return {
        restrict: 'A',
        link: function (scope, elem, attrs) {

            var fiscalYear = parseInt(attrs.year); //get years from attribute in html tag
            //initialize object variable to hold placement data for each month of the year
            var periods = periodsSchedule.getPeriodsSchedule();
            var periodsThisFiscalYear = _.filter(periods, {fiscalYear: fiscalYear });
            var placementsThisFiscalYear = [];

            PlacementData.query().$promise.then(function (data) { //get all placement data

                _.forEach(data, function (placement) {
                    _.forEach(periodsThisFiscalYear, function (period) {
                        var placementDate = new Date(placement.date); //typecast placement date value to an actual Date variable type
                        if (placementDate.getTime() > period.startDate.getTime() && placementDate.getTime() < period.endDate.getTime()) {
                            placement.fiscalYear = period.fiscalYear;
                            placement.period = period.number;
                            if (period.fiscalYear === fiscalYear) {
                                placementsThisFiscalYear.push(placement);
                            }
                        }
                    });
                });


                //after all necessary data is collected, use the highcharts plugin
                elem.highcharts({
                    title: {
                        text: fiscalYear + ' Placements', //use year variable to display on chart title
                        x: -20 //center
                    },
                    xAxis: {
                        categories: ['1', '2', '3', '4', '5', '6',
                            '7', '8', '9', '10', '11', '12', '13']
                    },
                    yAxis: {
                        title: {
                            text: '# of Placements'
                        },
                        allowDecimals: false,
                        min: 0,
                        plotLines: [
                            {
                                value: 0,
                                width: 1,
                                color: '#808080'
                            }
                        ]
                    },
                    tooltip: {
                        valueSuffix: ''
                    },
                    legend: {
                        layout: 'vertical',
                        align: 'right',
                        verticalAlign: 'middle',
                        borderWidth: 0
                    },
                    series: [
                        {
                            name: 'placements',
                            //input data into graph
                            data: [_.filter(placementsThisFiscalYear, {period: 1}).length,
                                _.filter(placementsThisFiscalYear, {period: 2}).length,
                                _.filter(placementsThisFiscalYear, {period: 3}).length,
                                _.filter(placementsThisFiscalYear, {period: 4}).length,
                                _.filter(placementsThisFiscalYear, {period: 5}).length,
                                _.filter(placementsThisFiscalYear, {period: 6}).length,
                                _.filter(placementsThisFiscalYear, {period: 7}).length,
                                _.filter(placementsThisFiscalYear, {period: 8}).length,
                                _.filter(placementsThisFiscalYear, {period: 9}).length,
                                _.filter(placementsThisFiscalYear, {period: 10}).length,
                                _.filter(placementsThisFiscalYear, {period: 11}).length,
                                _.filter(placementsThisFiscalYear, {period: 12}).length,
                                _.filter(placementsThisFiscalYear, {period: 13}).length]
                        }
                    ]
                });

            });
        }
    };
});
