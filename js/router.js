define([
    'jquery',
    'underscore',
    'backbone',

    'tester'
], function(
    $,
    _,
    Backbone,

    Tester
    ){

    var AppRouter = Backbone.Router.extend({
        routes: {
            // Load Jasmine tests
            'test': 'test',

            // Define some URL routes
            'red.html': 'showRed',
            'green.html': 'showGreen',
            'blue.html': 'showBlue',

            // Default
            '*actions': 'defaultAction'
        },

        test: function() {
            this.tester = new Tester();
            this.tester.run();
        },

        showRed: function(){
            $("#red").ScrollTo();
        },

        showGreen: function(){
            $("#green").ScrollTo();
        },

        showBlue: function(){
            $("#blue").ScrollTo();
        },

        defaultAction: function(action){
            $("body").ScrollTo();
        }
    });

    var initialize = function(){
        var app_router = new AppRouter();
        Backbone.history.start({
            pushState: true
        });
    };

    return {
        initialize: initialize
    };
});