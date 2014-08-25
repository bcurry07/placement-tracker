//this service defines 'notifier' as our angular service to call the toastr plug-in for notifications

angular.module('app').value('toastr', toastr);

angular.module('app').factory('notifier', function(toastr) {
   return {
       notify: function(type, msg) {
           if(type === "success") {
               toastr.success(msg);
           }
           else if(type === "error") {
               toastr.error(msg);
           }
       }
   }
});