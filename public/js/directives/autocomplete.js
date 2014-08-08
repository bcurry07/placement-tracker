angular.module('app').directive('autoComplete', function($timeout, OnBillCountByClient) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {

            OnBillCountByClient.getClients().then(function(clients) {



                element.autocomplete({
                    source: clients,
                    select: function() {
                        $timeout(function() {
                            element.trigger('input');
                        }, 10000);
                    }
                });

            });



        }

    }
});