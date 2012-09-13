define([

        'jquery',
        'underscore',
        'backbone',

        'jasmine',
        'jasmine-html',

        'tests/body-elements'

], function (

        $,
        _,
        Backbone

) {

    var Tester = function() {

        this.jasmineEnv = jasmine.getEnv();
        this.jasmineEnv.updateInterval = 1000;

        this.htmlReporter = new jasmine.HtmlReporter();
        var htmlReporter = this.htmlReporter;

        this.jasmineEnv.addReporter(this.htmlReporter);

        this.jasmineEnv.specFilter = function(spec) {
            return htmlReporter.specFilter(spec);
        };

        this.run = function() {
            this.jasmineEnv.execute();
        }

    };
    return Tester;

});