$(function() {

    $('a#Africa').on('click', function() {
        $('.Africa').show();
        $('.Americas').hide();
        $('.Asia').hide();
        $('.Americas').hide();
        $('.Europe').hide();
        $('.Featured-card').hide();
    });

    $('a#Europe').on('click', function() {
        $('.Africa').hide();
        $('.Americas').hide();
        $('.Asia').hide();
        $('.Americas').hide();
        $('.Europe').show();
        $('.Featured-card').hide();
    });
    $('a#Americas').on('click', function() {
        $('.Africa').hide();
        $('.Americas').hide();
        $('.Asia').hide();
        $('.Americas').show();
        $('.Europe').hide();
        $('.Featured-card').hide();
    });
    $('a#Asia').on('click', function() {
        $('.Africa').hide();
        $('.Americas').hide();
        $('.Asia').show();
        $('.Americas').hide();
        $('.Europe').hide();
        $('.Featured-card').hide();
    });
    $('a#Europe').on('click', function() {
        $('.Africa').hide();
        $('.Americas').hide();
        $('.Asia').hide();
        $('.Americas').hide();
        $('.Europe').show();
        $('.Featured-card').hide();
    });
    $('h1.logo').on('click', function() {
        $('.Africa').hide();
        $('.Americas').hide();
        $('.Asia').hide();
        $('.Americas').hide();
        $('.Europe').hide();
        $('.Featured-card').show();
    });

})
