(function () {
    'use strict';

    angular
        .module('paperoni')
        .controller('booksController', booksController);

    function booksController() {
        var vm = this;
        vm.message = 'book 1';

        activate();

        function activate() {
            $('ul.nav li a').click(function (e) {
                e.preventDefault();
                $(this).parent().addClass('active').siblings().removeClass('active');
                $(this).parent().parent().tab('show');
            });
        }
    }

})();