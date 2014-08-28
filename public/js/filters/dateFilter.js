//angular oob filter was outputting wrong date - it was converting 8/1/14 00:00:00 to 7/31/13 due to timezone issue
//therefore I created this custom filter to correct date display value

angular.module('app').filter('dateFilter', function($filter) {
   return function(item) {

//       var ngFilteredDate = $filter('date')(item, 'd'); //get the date value that the angular filter is getting, which was incorrect in the prod env
//       var ngFilteredMonth = $filter('date')(item, 'M')+1;
       var trueDate = new Date(item).getUTCDate(); //get true date using UTC
       var trueMonth = new Date(item).getUTCMonth();

       var trueDateValue = new Date(item);
       trueDateValue.setDate(trueDate);
       trueDateValue.setMonth(trueMonth);

        return $filter('date')(trueDateValue, 'shortDate');

//       if (ngFilteredDate == trueDate) { //compare the two dates. they were always wrong in prod and always right in dev
//
//           return $filter('date')(item, 'shortDate'); //returns the standard angular date filter based on the inputted date (for dev)
//
//       }
//       else { //else if the angular filter was incorrectly altering the inputted date
//
//           var newDate = new Date(item);
//           newDate.setDate(trueDate); //set date to true UTC date
//
//           return $filter('date')(newDate, 'shortDate'); //use angular filter but with the true UTC date (for prod)
//       }

   };
});
