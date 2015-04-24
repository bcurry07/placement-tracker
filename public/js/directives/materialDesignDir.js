angular.module('app').directive('materialDesign', function($timeout) {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {


      scope.$watch("placements", function (value) {//I change here
        var val = value || null;
        if (val) {

//          var spanToggle = element.find('span.toggle');
//          console.log(spanToggle);
         $.material.init();

//          element.togglebutton();
//          $.material.togglebutton();
//          $.material.togglebutton(element);
        }
      });


    }

  }
});
