(function () {
    'use strict';

    var app = angular.module('paperoni');
    app.config(function ($routeProvider) {
        $routeProvider

        .when('/', {
            templateUrl: '/paperoni/home/views/about.html',
            controller: 'homeController'
        })

        .when('/books', {
            templateUrl: '/paperoni/books/views/index.html',
            controller: 'booksController',
            controllerAs: 'vm'
        })

        .otherwise({ redirectTo: '/' });
    });

})();