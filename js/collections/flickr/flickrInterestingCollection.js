define([

        'jquery',
        'underscore',
        'backbone',

        'collections/flickr/abstractFlickrCollection',
        'models/flickr/flickrPhotoModel'

], function(

        $,
        _,
        Backbone,

        AbstractFlickrCollection,
        FlickrPhotoModel

) {

    var flickrInterestingCollection = AbstractFlickrCollection.extend({

        method : 'flickr.interestingness.getList',

        model : FlickrPhotoModel,

        parse : function(response) {
            return response.photos.photo;
        }

    });

    return flickrInterestingCollection;

});