window.beerApp = (window.beerApp || {});
window.beerApp.beerViewModel = (function($, Beer) {
    "user strict";
    "use strict";
    
    var BeerViewModel = function(beer) {
        this.beer = (beer instanceof Beer) || null;
    };

    _.extend(BeerViewModel.prototype, {
        initialize: function() {

        },

        render: function() {

        }
    });

    return BeerViewModel;

})( window.jQuery, window.beerApp.Beer );