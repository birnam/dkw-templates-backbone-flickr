define([
    'jquery',
    'underscore',
    'backbone',

    'broadcast'
], function(
    $,
    _,
    Backbone,

    Broadcast
    ){

    var AppRouter = Backbone.Router.extend({


        initialize : function() {
            this.broadcast = Broadcast.getInstance();
        },

        routes: {
            // Define some URL routes
            'interesting.html': 'showInteresting',
            'parkway.html': 'showParkway',
            'woodturning.html': 'showWoodTurning',
            'hummingbirds.html': 'showHummingbirds',
            'nebula.html': 'showNebula',

            // id
            'photo/:id': 'showPhoto',

            // Default
            '*actions': 'showInteresting'
        },

        showInteresting: function(){
            this.broadcast.trigger("flickr:interesting");
        },

        showParkway: function() {
            this.broadcast.trigger("flickr:search", "blue ridge parkway");
        },

        showWoodTurning: function() {
            this.broadcast.trigger("flickr:search", "wood turning");
        },

        showHummingbirds: function() {
            this.broadcast.trigger("flickr:search", "hummingbird");
        },

        showNebula: function() {
            this.broadcast.trigger("flickr:search", "nebula");
        },

        showPhoto: function(photo_id) {
            this.broadcast.trigger("flickr:photo", photo_id);
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