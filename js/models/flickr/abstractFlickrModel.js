define([

        'jquery',
        'underscore',
        'backbone',

        'models/abstractModel'

], function(

        $,
        _,
        Backbone,

        AbstractModel

) {

    var AbstractFlickrModel = AbstractModel.extend({

        key : '6aaa22c83e444410c01046e3865e03c8',
        secret : 'cb40b281f13d2403',
        baseurl : 'http://api.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=6f2f7a8fe8a1cb8745ba938de6f490a5&format=json'

    });

    return AbstractFlickrModel;

});