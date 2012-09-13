define([

        'jquery',
        'underscore',
        'backbone',

        'collections/abstractCollection'

], function(

        $,
        _,
        Backbone,

        AbstractCollection

) {

    var AbstractFlickrCollection = AbstractCollection.extend({

        key : '6aaa22c83e444410c01046e3865e03c8',
        format : 'json',

        url : 'http://api.flickr.com/services/rest/',

        fetch : function(options) {
            options = _.extend({}, options, {
                dataType : "jsonp",
                jsonp : "jsoncallback",
                data : _.extend({}, (options?options.data:{}), {
                    method: encodeURIComponent(this.method),
                    api_key: encodeURIComponent(this.key),
                    format: encodeURIComponent(this.format)
                })
            });

            AbstractCollection.prototype.fetch.call(this, options);
        }

    });

    return AbstractFlickrCollection;

});