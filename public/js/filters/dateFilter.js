angular.module('app').filter('dateFilter', function($filter) {
   return function(item) {

       var ngFilteredDate = $filter('date')(item, 'd');
       var trueDate = new Date(item).getUTCDate();
        console.log("ngFilteredDate is " + ngFilteredDate + " and trueDate (UTC) is " + trueDate + " and item was " + item);
       if (ngFilteredDate == trueDate) {
           var date = $filter('date')(item, 'shortDate');
           return date;
       }
       else {
           var hour = item.getHours();
           item.setHours(hour + 24);
           var date = $filter('date')(item, 'shortDate');
           return date;
       }

   } ;
});
