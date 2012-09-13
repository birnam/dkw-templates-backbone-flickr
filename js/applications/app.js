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
            new MenuItemModel({ title: 'Interesting', link: '/interesting.html' }),
            new MenuItemModel({ title: 'Blue Ridge Parkway', link: '/parkway.html' }),
            new MenuItemModel({ title: 'Wood Turning', link: '/woodturning.html' }),
            new MenuItemModel({ title: 'Hummingbirds', link: '/hummingbirds.html' }),
            new MenuItemModel({ title: 'Nebula', link: '/nebula.html' })
        ]);

        this.home = new HomeView({el: $("#main"), navitems: navitems});

        Router.initialize();
    }

    return {
        initialize: initialize
    };
});