define([

    'jquery',
    'underscore',
    'backbone',

    'views/abstractView',
    'views/sectionBoxView',
    'views/menuView'

], function(

    $,
    _,
    Backbone,

    AbstractView,
    SectionBoxView,
    MenuView

    ){

    var homeView = AbstractView.extend({

        defaults: {},

        initialize: function() {
            AbstractView.prototype.initialize.apply(this, _.rest(arguments));

            this.nav = new MenuView({ el: $("#nav"), collection: this.options.navitems });

            this.boxRed = new SectionBoxView({id: "red", attributes: {"data-event": "section:color", "data-args": "red"}});
            this.$el.append(this.boxRed.el);

            this.boxGreen = new SectionBoxView({id: "green", attributes: {"data-event": "section:color", "data-args": "green"}});
            this.$el.append(this.boxGreen.el);

            this.boxBlue = new SectionBoxView({id: "blue", attributes: {"data-event": "section:color", "data-args": "blue"}});
            this.$el.append(this.boxBlue.el);
        },

        render: function() {
            return this;
        }
    });

    return homeView;
});