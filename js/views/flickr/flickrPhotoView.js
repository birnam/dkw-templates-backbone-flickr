define([

    'jquery',
    'underscore',
    'backbone',
    'mustache',

    'views/abstractView'

], function (

    $,
    _,
    Backbone,
    Mustache,

    AbstractView

) {

    var FlickrPhotoView = AbstractView.extend({

        tagName : "img",

        events: {
        },

        defaults : {
            photo_id : ''
        },

        initialize : function() {
            AbstractView.prototype.initialize.apply(this, _.rest(arguments));

            if (this.collection) {
                this.collection.fetch({photo_id: this.options.photo_id});
            }
        },

        render : function() {
            if (this.collection) {
                this.$el.attr("src", this.collection.getSize("Large").get("source"));
            }
            return this;
        }

    });

    return FlickrPhotoView;

});