//need this service to provide # of contract and # of perm deals for each year to display next to graphs (7/31/14)

angular.module('app').factory('yearlyData', function($http, $q) {

        return {
            getData: function(year) {


                var deferred = $q.defer();

                $http.get('/api/placements').then(function(response) {

                    var placementTypeCount = {
                        "contract": 0,
                        "perm": 0
                    };

                    var placements = response.data;

                    placements.forEach(function(placement) {

                        var date = new Date(placement.date);

                        if((date.getFullYear() == year) && (placement.type === "Contract")) {
                            placementTypeCount.contract++;
                        }
                        else if((date.getFullYear() == year)&& (placement.type === "Perm")) {
                            placementTypeCount.perm++;
                        }

                    });

                    deferred.resolve(placementTypeCount);
                });

                return deferred.promise;
            }

        }
});