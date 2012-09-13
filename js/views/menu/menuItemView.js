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
            showSeparator: true
        },

        initialize : function() {
            AbstractView.prototype.initialize.apply(this, _.rest(arguments));

            this.render();
        },

        render : function() {
            if (this.model) {
                this.$el.html(Mustache.render(Template, _.extend({}, this.model.toJSON(), {showSeparator: this.options.showSeparator})));
            }
            return this;
        },

        goto : function(event) {
            event.preventDefault();

            History.pushState(null, this.model.get('title'), this.model.get('link'));
        }

    });

    return MenuItemView;

});