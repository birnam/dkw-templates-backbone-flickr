define([

    'jquery',
    'underscore',
    'backbone',

    'models/MenuItemModel'

], function (

    $,
    _,
    Backbone,

    MenuItemModel

) {

    var MenuItemCollection = Backbone.Collection.extend({

        model: MenuItemModel,

        initialize: function() {
        }

    });

    return MenuItemCollection;

});