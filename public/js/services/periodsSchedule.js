
angular.module('app').factory('periodsSchedule', function() {
    return {
        getPeriodsSchedule : getPeriodsSchedule
    };

    function getPeriodsSchedule() {
        var originDate = new Date("July 1, 2013");
        var periods = [];

        for (i=1; i < 1000; i++) {
                var j = i % 13 === 0 ? 13 : i % 13;
                var period = {};
                var periodStartDate = new Date(originDate);
                var periodEndDate;
                var daysToAddToOrigin = 28 * (i - 1);
                periodStartDate.setDate(periodStartDate.getDate()+ daysToAddToOrigin);
                periodEndDate = new Date(periodStartDate);
                periodEndDate.setDate(periodStartDate.getDate()+27);
                periodEndDate.setHours(23);
                periodEndDate.setMinutes(59);
                periodEndDate.setSeconds(59);

                period.startDate = new Date(periodStartDate);
                period.endDate = new Date(periodEndDate);
                period.number = j;

                period.fiscalYear = j > 7 ? periodStartDate.getUTCFullYear() : periodStartDate.getUTCFullYear() + 1;

                periods.push(period);

        }
        return periods;
    }
});