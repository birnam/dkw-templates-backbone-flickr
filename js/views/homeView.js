define([

    'jquery',
    'underscore',
    'backbone',

    'views/abstractView',
    'views/flickr/thumbnailListView',
    'views/flickr/flickrPhotoView',
    'views/menu/menuView',

    'collections/flickr/flickrInterestingCollection',
    'collections/flickr/flickrSearchCollection',
    'collections/flickr/flickrSizeCollection',

    'util/util'

], function(

    $,
    _,
    Backbone,

    AbstractView,
    ThumbnailListView,
    FlickrPhotoView,
    MenuView,

    FlickrInterestingCollection,
    FlickrSearchCollection,
    FlickrSizeCollection,

    Util

    ){

    var homeView = AbstractView.extend({

        events : {
            "flickr:interesting": "showInteresting",
            "flickr:search": "showSearch",
            "flickr:photo": "showPhoto"
        },

        defaults: {},

        initialize: function() {
            AbstractView.prototype.initialize.apply(this, _.rest(arguments));

            this.nav = new MenuView({ el: $("#nav"), collection: this.options.navitems });
            this.flickrlist = {};
            this.flickrpic = {};
        },

        render: function() {
            return this;
        },

        showInteresting: function() {
            var slug = Util.slugify("interesting");
            if (_.isUndefined(this.flickrlist[slug])) {
                this.flickrlist[slug] = new ThumbnailListView({ collection: new FlickrInterestingCollection });
            } else {
                this.flickrlist[slug].delegateEvents();
            }
            this.$el.html(this.flickrlist[slug].el);
        },

        showSearch: function(search_text) {
            var slug = Util.slugify(search_text);
            if (_.isUndefined(this.flickrlist[slug])) {
                this.flickrlist[slug] = new ThumbnailListView({ collection: new FlickrSearchCollection({ search_text: search_text }) });
            } else {
                this.flickrlist[slug].delegateEvents();
            }
            this.$el.html(this.flickrlist[slug].el);
        },

        showPhoto: function(photo_id) {
            if (_.isUndefined(this.flickrpic["pic"+photo_id])) {
                this.flickrpic["pic"+photo_id] = new FlickrPhotoView({ collection: new FlickrSizeCollection({ photo_id: photo_id }) });
            }
            this.$el.html(this.flickrpic["pic"+photo_id].el);
        }
    });

    return homeView;
});