define([
    'jquery'
    , 'underscore'
    , 'backbone'
    , 'router'

    , 'history'

    , 'views/homeView'

    , 'models/menuItemModel'
    , 'collections/menuItemCollection'
], function(

    $
    , _
    , Backbone
    , Router

    , History

    , HomeView

    , MenuItemModel
    , MenuItemCollection

    ){

    var initialize = function() {
        var navitems = new MenuItemCollection([
            new MenuItemModel({ title: 'home', link: '/' }),
            new MenuItemModel({ title: 'rrr', link: '/red.html' }),
            new MenuItemModel({ title: 'ggg', link: '/green.html' }),
            new MenuItemModel({ title: 'bbb', link: '/blue.html' })
        ]);

        this.home = new HomeView({el: $("#main"), navitems: navitems});

        Router.initialize();
    }

    return {
        initialize: initialize
    };
});