define([

    'jquery',
    'underscore',
    'backbone',
    'mustache',

    'views/abstractView',
    'views/flickr/thumbnailItemView'

], function (

    $,
    _,
    Backbone,
    Mustache,

    AbstractView,
    ThumbnailItemView

) {

    var ThumbnailListView = AbstractView.extend({

        tagName : "ul",

        events: {
        },

        defaults : {
        },

        initialize : function() {
            AbstractView.prototype.initialize.apply(this, _.rest(arguments));

            this.items = [];

            if (this.collection) {
                this.collection.fetch();
            }
        },

        render : function() {
            if (this.collection) {
                this.collection.each(function(model) {
                    var item = new ThumbnailItemView({model: model});
                    this.items.push(item);
                    this.$el.append(item.el);
                }, this);
            }
            return this;
        },

        delegateEvents : function() {
            for (var i in this.items) {
                this.items[i].delegateEvents();
            }

            AbstractView.prototype.delegateEvents.call(this);
        }

    });

    return ThumbnailListView;

});