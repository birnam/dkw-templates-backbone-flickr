define([

    'jquery',
    'underscore',
    'backbone',

    'views/abstractView'

], function(

    $,
    _,
    Backbone,

    AbstractView

    ){

    var sectionBoxView = AbstractView.extend({

        tagName: 'section',

        events: {
            'click' : '_broadcast'
        },

        initialize: function() {
            AbstractView.prototype.initialize.apply(this, _.rest(arguments));
        },

        render: function(){
            return this;
        }
    });

    return sectionBoxView;
});