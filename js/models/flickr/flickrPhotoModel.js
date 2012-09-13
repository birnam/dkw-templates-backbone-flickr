define([

        'jquery',
        'underscore',
        'backbone',

        'models/flickr/abstractFlickrModel'

], function(

        $,
        _,
        Backbone,

        AbstractFlickrModel

) {

    var FlickrPhotoModel = AbstractFlickrModel.extend({

        parse: function(response) {
            response.url = this._photourl(response);
            response.link = this._pageurl(response);
            response.fullsize = this._fullsizeurl(response);
            return response;
        },

        _photourl : function(model) {
            /*

                The letter suffixes are as follows:

                s	small square 75x75
                q	large square 150x150
                t	thumbnail, 100 on longest side
                m	small, 240 on longest side
                n	small, 320 on longest side
                -	medium, 500 on longest side
                z	medium 640, 640 on longest side
                c	medium 800, 800 on longest side†
                b	large, 1024 on longest side*
                o	original image, either a jpg, gif or png, depending on source format

            */

            return "http://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}_{size}.jpg"
                    .replace("{farm-id}", model.farm)
                    .replace("{server-id}", model.server)
                    .replace("{id}", model.id)
                    .replace("{secret}", model.secret)
                    .replace("{size}", "t");
        },

        _pageurl : function(model) {
            return "http://www.flickr.com/photos/{owner}/{id}/"
                        .replace("{owner}", model.owner)
                        .replace("{id}", model.id);
        },

        _fullsizeurl : function(model) {
            return "/photo/" + model.id;
        }

    });

    return FlickrPhotoModel;

});