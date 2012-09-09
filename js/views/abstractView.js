define([

    'jquery',
    'underscore',
    'backbone',
    'broadcast'

], function (
    $,
    _,
    Backbone,
    Broadcast

) {

    var AbstractView = Backbone.View.extend({

        initialize : function() {

            _.defaults(this.options, this.defaults);
            this.broadcast = Broadcast.getInstance();

            this.broadcast.super(this._broadcasted, this);

        },

        _broadcast : function(event) {
            var evt = $(event.target).attr("data-event");
            var args = $(event.target).attr("data-args");

            this.broadcast.trigger(evt, event, args);
        },

        _broadcasted : function() {
            if (this.events && this.events[arguments[0][0]]) {
                var cb = this.events[arguments[0][0]];
                if (_.isFunction(cb)) {
                    cb.apply(this, _.rest(arguments[0]));
                } else if (_.isString(cb)) {
                    this[cb].apply(this, _.rest(arguments[0]));
                }
            }
        }

    });

    return AbstractView;

});