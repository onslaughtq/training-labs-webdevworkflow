window.beerApp = (function() {

    var App = function( options ) {
        options = options || {};

        this.resources = options.resources || [];
        this.debug = true;

        if (options.viewModel) {
            this.activeViewModel = new options.viewModel();
            this.activeViewModel.initialize((options.complete || function(){}).bind(this));
        } else {
            (options.complete || function() {}).bind(this)();
        }
    };

    App.prototype = {
        constructor: App,
        activeViewModel: null,

        getName: function() {
            return "Beers";
        }
    };

    return App;

})();