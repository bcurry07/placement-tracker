angular.module('app').filter('dateFilter', function($filter) {
   return function(item) {

       var ngFilteredDate = $filter('date')(item, 'd');
       var trueDate = new Date(item).getUTCDate();
        console.log("ngFilteredDate is " + ngFilteredDate + " and trueDate (UTC) is " + trueDate + " and item was " + item);
       if (ngFilteredDate == trueDate) {
           console.log('the ng filter was right');
           return $filter('date')(item, 'shortDate');

       }
       else {

//           var hour = new Date(item).getHours();
//           item.setHours(hour + 24);
           console.log('the ng filter was NOT right');
           return $filter('date')(item, 'shortDate');
       }

   };
});
