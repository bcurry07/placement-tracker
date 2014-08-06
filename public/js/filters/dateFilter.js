angular.module('app').filter('dateFilter', function($filter) {
   return function(item) {

       var ngFilteredDate = $filter('date')(item, 'd');
       var trueDate = new Date(item).getDate();
        console.log("ngFilteredDate is " + ngFilteredDate + " and trueDate is " + trueDate);
       if (ngFilteredDate == trueDate) return $filter('date')(item, 'shortDate');
       else {
           var hour = item.getHours();
           item.setHours(hour + 24);
           return $filter('date')(item, 'shortDate');
       }

   } ;
});
