angular.module('app').controller('mainMenuCtrl', function($scope, $location) {



    $scope.isActive = function(viewLocation) {
      return viewLocation === $location.path();
    };

});

