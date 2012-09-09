define([

    'jquery',
    'underscore',
    'backbone',
    'mustache',

    'history',

    'views/abstractView',

    'text!templates/menu-item.html'

], function (

    $,
    _,
    Backbone,
    Mustache,

    History,

    AbstractView,

    Template

) {

    var MenuItemView = AbstractView.extend({

        tagName : "a",

        events: {
            "click": "goto"
        },

        defaults : {
        },

        initialize : function() {
            AbstractView.prototype.initialize.apply(this, _.rest(arguments));

            if (this.model) {
                this.$el.html(Mustache.render(Template, this.model.toJSON()));
            }
        },

        render : function() {
            return this;
        },

        goto : function(event) {
            event.preventDefault();

            History.pushState(null, this.model.get('title'), this.model.get('link'));
        }

    });

    return MenuItemView;

});