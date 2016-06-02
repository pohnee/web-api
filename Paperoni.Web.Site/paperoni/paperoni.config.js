(function () {
    'use strict';

    var app = angular.module('paperoni');
    app.config(function ($locationProvider) {
        $locationProvider.html5Mode(true);
    });

})();