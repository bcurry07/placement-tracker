//this service defines 'notifier' as our angular service to call the toastr plug-in for notifications

angular.module('app').value('toastr', toastr);

angular.module('app').factory('notifier', function(toastr) {
   return {
       notify: function(msg) {
           toastr.success(msg);
       }
   }
});