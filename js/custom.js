
$(function () {
    'use strict';
    // navbar fixed bluer
    $(window).scroll(function () {
        var navbar = $('.navbar');
        console.log(navbar.height());
        console.log($(window).scrollTop());
        
        if ($(window).scrollTop() >= navbar.height()) {
            navbar.addClass('scrolling')
        } else {
            navbar.removeClass('scrolling')
        }
    });

    // Deal With Tabs Section
    $('.tap-switch li').on('click', function () {
        // add selected class to active link
        $(this).addClass('selected').siblings().removeClass('selected');
        // hide all divs
        $('.Tab-Section .tabs-content > div').hide();
        // show div conected with this link
        $('.' + $(this).data('class')).show();
    });

    // wow js
    new WOW().init();

    // nice scroll
    $("body").niceScroll({
        cursorcolor:"rgb(255, 155, 81)",
        cursorwidth:"5px",
    });

    // smooth scroll
    var scroll = new SmoothScroll('a[href*="#"]');
});