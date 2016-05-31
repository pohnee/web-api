(function () {
    'use strict';

    angular
        .module('paperoni')
        .controller('Main', main);

    function main() {
        var vm = this;
        vm.food = 'pizza';
    }

})();