define([
    'jquery',
    'underscore',
    'backbone'
], function(
    $,
    _,
    Backbone
    ){

    var AppRouter = Backbone.Router.extend({
        routes: {
            // Define some URL routes
            'red.html': 'showRed',
            'green.html': 'showGreen',
            'blue.html': 'showBlue',

            // Default
            '*actions': 'defaultAction'
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