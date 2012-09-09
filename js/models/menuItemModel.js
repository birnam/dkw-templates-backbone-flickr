define([

    'jquery',
    'underscore',
    'backbone'

], function (

    $,
    _,
    Backbone

) {

    var MenuItemModel = Backbone.Model.extend({

        defaults: {
            title: "",
            link: "",
            showSeparator: true
        },

        initialize: function() {
            _.defaults(this.attributes, this.defaults);
        }

    });

    return MenuItemModel;

});