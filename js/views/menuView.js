define([

    'jquery',
    'underscore',
    'backbone',

    'views/abstractView',
    'views/menuItemView'

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
            'section:color' : '_sectionClick'
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
                    menuItem.set("showSeparator", (menuItem.cid != lastone.cid));
                    var item = new MenuItemView({model: menuItem});
                    this.$el.append(item.$el);
                }, this);
            }

            return this;
        },

        _sectionClick : function(event, args) {
            console.log(event, args);
        }

    });

    return MenuView;

});