define([

    'underscore',
    'backbone'

], function(

    _,
    Backbone

) {
   "use strict";

    var Broadcast = function() {

        if (!Broadcast.prototype.allowInstantiation) {
            throw "use Broadcast.getInstance()";
        } else {
            this.dispatch = _.clone(Backbone.Events);
        }

        this.super = function(callback, context) {
            this.dispatch.on("broadcast", callback, context);
        }

        this.unsuper = function(callback, context) {
            this.dispatch.off("broadcast", callback, context);
        }

        this.on = function(event, callback, context) {
            this.dispatch.on("__broadcast__::"+event, callback, context);
        }

        this.off = function(event, callback, context) {
            this.dispatch.off("__broadcast__::"+event, callback, context);
        }

        this.trigger = function() {
            this.dispatch.trigger("broadcast", arguments);
            this.dispatch.trigger.apply(this.dispatch, ["__broadcast__::"+arguments[0]].concat(_.rest(arguments)));
        }

    }

    Broadcast.getInstance = function() {
        if (typeof(Broadcast.prototype._instance) == "undefined") {
            Broadcast.prototype.allowInstantiation = true;
            Broadcast.prototype._instance = new Broadcast();
            Broadcast.prototype.allowInstantiation = false;
        }
        return Broadcast.prototype._instance;
    }

    return Broadcast;
});