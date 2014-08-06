angular.module('app').factory('onBillCount', function() {

    return {
        getCount: function(data) {

            var count = 0;
            data.forEach(function(placement) {
                if (placement.onBilling === "Yes") count++;
            });
            return count;
        }

    }

});

angular.module('app').factory('OnBillCountByClient', function($http, $q) {
    return {
        getClients: function() {
            var deferred = $q.defer();

            $http.get('/api/billingclients').then(function(response) {

                deferred.resolve(response.data);
            });

            return deferred.promise;
        },

        getList: function(placements) {

            var deferred = $q.defer();

            this.getClients().then(function(uniqueClientList) {
                var list = [];


                uniqueClientList.forEach(function(client) {
                    var clientBillCount = 0;
                    placements.forEach(function(placement) {

                       if ((placement.client === client) && (placement.onBilling === "Yes")) clientBillCount++;

                    });


                    if (clientBillCount > 0) list.push({"client": client, "count": clientBillCount});
                });
               deferred.resolve(list);
            });

            return deferred.promise;
        }
    };
});

