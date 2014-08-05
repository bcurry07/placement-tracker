angular.module('app').directive('highChart', function(PlacementData) {
    return {
        restrict: 'A',
        link: function (scope, elem, attrs) {

            var year = attrs.year;
            var data_year = {
                "jan": 0,
                "feb": 0,
                "mar": 0,
                "apr": 0,
                "may": 0,
                "jun": 0,
                "jul": 0,
                "aug": 0,
                "sep": 0,
                "oct": 0,
                "nov": 0,
                "dec": 0

            };

            PlacementData.query().$promise.then(function (data) {
                for (var month = 0; month < 12; month++) {
                    var monthCount = 0;
                    data.forEach(function (item) {

                        var date = new Date(item.date);

                        //console.log('year is ' + date.getFullYear() + ' and month is ' + date.getMonth());

                        if ((date.getFullYear() == year) && (date.getMonth() == month)) {

                            monthCount++;

                        }

                    });

                    if (month == 0) data_year.jan = monthCount;

                    if (month == 1) data_year.feb = monthCount;

                    if (month == 2) data_year.mar = monthCount;

                    if (month == 3) data_year.apr = monthCount;

                    if (month == 4) data_year.may = monthCount;

                    if (month == 5) data_year.jun = monthCount;

                    if (month == 6) data_year.jul = monthCount;

                    if (month == 7) data_year.aug = monthCount;

                    if (month == 8) data_year.sep = monthCount;

                    if (month == 9) data_year.oct = monthCount;

                    if (month == 10) data_year.nov = monthCount;

                    if (month == 11) data_year.dec = monthCount;


                }


                elem.highcharts({
                    title: {
                        text: year + ' Placements',
                        x: -20 //center
                    },
                    xAxis: {
                        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                    },
                    yAxis: {
                        title: {
                            text: '# of Placements'
                        },
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
                            data: [data_year.jan, data_year.feb, data_year.mar, data_year.apr, data_year.may, data_year.jun,
                                data_year.jul, data_year.aug, data_year.sep, data_year.oct, data_year.nov, data_year.dec]
                        }
                    ]
                });

            });
        }
    };
});
