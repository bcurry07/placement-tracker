//highcharts plug-in to create graphs using a directive as an attribute in the html tag

angular.module('app').directive('highChart', function(PlacementData, $filter) {
    return {
        restrict: 'A',
        link: function (scope, elem, attrs) {

            var year = attrs.year; //get years from attribute in html tag
            //initialize object variable to hold placement data for each month of the year
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

            PlacementData.query().$promise.then(function (data) { //get all placement data
                for (var month = 0; month < 12; month++) { //iterate through each month
                    var monthCount = 0;
                    data.forEach(function (item) { //iterate through each placement

                        var date = new Date(item.date); //typecast placement date value to an actual Date variable type
                        //var date = $filter('dateFilter')(itemDate);


                        //if the current placement matches the year and month then increment the monthCount
                        if ((date.getUTCFullYear() == year) && (date.getUTCMonth() == month)) {

                            monthCount++;

                        }

                    });

                    //after month has iterated through all placements, set month count value to the .month variable
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

                //after all necessary data is collected, use the highcharts plugin
                elem.highcharts({
                    title: {
                        text: year + ' Placements', //use year variable to display on chart title
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
                            data: [data_year.jan, data_year.feb, data_year.mar, data_year.apr, data_year.may, data_year.jun,
                                data_year.jul, data_year.aug, data_year.sep, data_year.oct, data_year.nov, data_year.dec]
                        }
                    ]
                });

            });
        }
    };
});
