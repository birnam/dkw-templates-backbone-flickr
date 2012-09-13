define([

    'jquery',
    'underscore',
    'backbone',

    'views/abstractView',
    'views/menu/menuItemView'

], function (
    $,
    _,
    Backbone,

    AbstractView,
    MenuItemView

) {

    var MenuView = AbstractView.extend({

        tagName : "nav",

        events : {
        },

        initialize : function() {
            AbstractView.prototype.initialize.apply(this, _.rest(arguments));

            if (this.collection) {
                this.render();
            }
        },

        render : function() {
            this.$el.html("");

            if (this.collection) {
                var lastone = this.collection.at(this.collection.length - 1);

                this.collection.each(function(menuItem, key) {
                    var item = new MenuItemView({model: menuItem, showSeparator: (menuItem != lastone)});
                    this.$el.append(item.$el);
                }, this);
            }

            return this;
        }

    });

    return MenuView;

});