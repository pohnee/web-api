//navbar does not collapse for single page applications
$(document).ready(function () {
    $('.nav').on('click', function (e) {
        if ($(e.target).is('a')) {
            $(this).parent().removeClass('in').addClass('collapse');
        }
    });

    $('.navbar-brand').on('click', function (e) {
        if ($(e.target).is('a.navbar-brand')) {
            $(this).parent().siblings('.navbar-collapse').removeClass('in').addClass('collapse');
        }
    });
});