define([

    'jquery',
    'underscore',
    'backbone',
    'mustache',

//    'history',

    'views/abstractView',

    'text!templates/flickr/thumbnail-item.html'

], function (

    $,
    _,
    Backbone,
    Mustache,

//    History,

    AbstractView,

    Template

) {

    var ThumbnailItemView = AbstractView.extend({

        tagName : "li",

        events: {
            "click": "goto"
        },

        defaults : {
        },

        initialize : function() {
            AbstractView.prototype.initialize.apply(this, _.rest(arguments));

            this.render();
        },

        render : function() {
            if (this.model) {
                this.$el.html(Mustache.render(Template, this.model.toJSON()));
            }
            return this;
        },

        goto : function(event) {
            if (!event.metaKey) {
                event.preventDefault();
                History.pushState(null, this.model.get('title'), this.model.get('fullsize'));
            }
        }

    });

    return ThumbnailItemView;

});