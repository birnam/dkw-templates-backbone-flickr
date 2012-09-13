define([

        'jquery',
        'underscore',
        'backbone',

        'collections/flickr/abstractFlickrCollection',
        'models/flickr/flickrSizeModel',

        'util/util'

], function(

        $,
        _,
        Backbone,

        AbstractFlickrCollection,
        FlickrSizeModel,

        Util

) {

    var flickrSizeCollection = AbstractFlickrCollection.extend({

        // http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=07180da552a02601e03255280e1f9183&text=blue+ridge+parkway&format=json&nojsoncallback=1

        photo_id : '',

        method : 'flickr.photos.getSizes',

        model : FlickrSizeModel,

        initialize : function(options) {
            AbstractFlickrCollection.prototype.initialize.apply(this, _.rest(arguments));

            _.extend(this, options);
        },

        parse : function(response) {
            return response.sizes.size;
        },

        fetch : function(options) {
            if (this.photo_id != '') {
                options = _.extend({}, options, {
                    data : _.extend({}, (options?options.data:{}), {
                        photo_id: Util.dataEncode(this.photo_id)
                    })
                });
            }

            AbstractFlickrCollection.prototype.fetch.call(this, options);
        },

        largest : function() {
            var _size = 0;
            var _largest = this.models[0];

            this.each(function(model) {
                var modelsize = parseInt(model.get("width")) * parseInt(model.get("height"));
                if (modelsize > _size) {
                    _size = modelsize;
                    _largest = model;
                }
            }, this);

            return _largest;
        },

        getSize : function(size) {
            var _match = this.models[0];
            this.each(function(model) {
                if (model.get("label").toLowerCase() == size.toLowerCase()) {
                    _match = model;
                }
            }, this);

            return _match;
        }

    });

    return flickrSizeCollection;

});