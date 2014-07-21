angular.module('app').factory('onBillCount', function() {

    return {
        getCount: function(data) {
            console.log(data);
            var count = 0;
            data.forEach(function(placement) {
                if (placement.onBilling === "Yes") count++;
            });
            return count;
        }


    }

});