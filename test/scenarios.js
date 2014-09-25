'use strict';

describe('placement tracker app', function() {


//    it('should expect 3 to equal 3', function() {
//       expect(3).toBe(3);
//    });

    describe('placements table', function() {

        var numBilling = 0;

        beforeEach(function() {
            browser().navigateTo('/placements');
        });

        it('should render the placements table', function() {

            expect(repeater('table.table-striped tr').count()).toBe(21);
        });



        it ('should filter the table when typing into the search box', function() {
           input('filterText').enter('man');

           expect(repeater('table.table-striped tr').count()).toBe(5);
        });



        it ('should filter the table when clicking a client name in the right-panel table', function() {

            element('.numBilling:first').query(function($el, done) {
                var elText = $el.text();
                numBilling = parseInt(elText);
                done();
            });

        });

        it ('should filter the table when clicking a client name in the right-panel table', function() {

            element('td.clientName:first').query(function($el, done) {
                console.log($el);
                $el.click();
                done();
            });

            expect(repeater('table.table-striped tr').count()).toBe(numBilling+1);
        });



    });

});