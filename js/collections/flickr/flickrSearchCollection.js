define([

        'jquery',
        'underscore',
        'backbone',

        'collections/flickr/abstractFlickrCollection',
        'models/flickr/flickrPhotoModel',

        'util/util'

], function(

        $,
        _,
        Backbone,

        AbstractFlickrCollection,
        FlickrPhotoModel,

        Util

) {

    var flickrSearchCollection = AbstractFlickrCollection.extend({

        // http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=07180da552a02601e03255280e1f9183&text=blue+ridge+parkway&format=json&nojsoncallback=1

        search_text : '',

        method : 'flickr.photos.search',

        model : FlickrPhotoModel,

        initialize : function(options) {
            AbstractFlickrCollection.prototype.initialize.apply(this, _.rest(arguments));

            _.extend(this, options);
        },

        parse : function(response) {
            return response.photos.photo;
        },

        fetch : function(options) {
            if (this.search_text != '') {
                options = _.extend({}, options, {
                    data : _.extend({}, (options?options.data:{}), {
                        text: Util.dataEncode(this.search_text)
                    })
                });
            }

            AbstractFlickrCollection.prototype.fetch.call(this, options);
        }

    });

    return flickrSearchCollection;

});