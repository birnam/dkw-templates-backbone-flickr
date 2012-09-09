require.config({
    paths: {
        jquery: 'libs/jquery/jquery-1.8.1',
        underscore: 'libs/underscore/underscore-1.3.3',
        backbone: 'libs/backbone/backbone-0.9.2',
        history: 'libs/history/bundled/html4+html5/jquery.history',
        scrollto: 'libs/jquery/plugins/scrollto/jquery.scrollto',
        json: 'libs/JSON-js/json2',
        mustache: 'libs/mustache/mustache',
        jasmine: 'libs/jasmine/jasmine',
        'jasmine-html': 'libs/jasmine/jasmine-html',
        broadcast: 'util/broadcast',
        tester: 'util/tester',
        app: 'applications/app'
    },
    shim: {
        'jquery': {
            exports: '$'
        },
        'underscore': {
            deps: ['jquery'],
            exports: '_'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },

        'history': {
            deps: ['jquery'],
            exports: 'History'
        },

        'scrollto': {
            deps: ['jquery']
        },

        'json': {
            exports: 'JSON'
        },

        'jasmine': {},

        'jasmine-html': {
            deps: ['jasmine']
        },

        'tests/testingtests': {
            deps: ['jasmine', 'jasmine-html']
        },

        'tests/body-elements': {
            deps: ['jasmine', 'jasmine-html']
        }
    },

    waitSeconds: 60

});

require([
    'app',

    'domReady',

    'history',
    'scrollto',

    'json'

], function(

    App,
    DomReady

    ){
    DomReady(function() {
        App.initialize();

//        $("#blue").scrollTo();
//        console.log("History", History);
//        console.log("$.History", $.History);
//        console.log("scrollto", $.ScrollTo);
    });
})