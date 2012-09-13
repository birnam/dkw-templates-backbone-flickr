define([

        'jquery',
        'underscore',
        'backbone',

        'views/homeView',

        'models/menuItemModel',
        'collections/menuItemCollection',

        'jasmine'

], function(

        $,
        _,
        Backbone,

        HomeView,

        MenuItemModel,
        MenuItemCollection

) {

    describe("Body Elements", function() {

        var navitems = new MenuItemCollection([
            new MenuItemModel({ title: 'home', link: '/' }),
            new MenuItemModel({ title: 'rrr', link: '/red.html' }),
            new MenuItemModel({ title: 'ggg', link: '/green.html' }),
            new MenuItemModel({ title: 'bbb', link: '/blue.html' })
        ]);
       var home = new HomeView({el: $("#main"), navitems: navitems});

       it("should contain multiple sections", function() {
           expect($("#main section").length).toBeGreaterThan(0);
       });

   });

});