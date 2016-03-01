// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();



// get the value of the bottom of the #main element by adding the offset of that element plus its height, set it as a variable
var mainbottom = $('#main').offset().top + $('#main').height();

// on scroll, 
$(window).on('scroll',function(){

    // we round here to reduce a little workload
    var stop = Math.round($(window).scrollTop());

    if (stop > mainbottom) {
        $('.nav.fixed.contain-to-grid').addClass('past-main');
    } else {
        $('.nav.fixed.contain-to-grid').removeClass('past-main');
    }

    if (stop > mainbottom) {
        $('.nav.icon-bar').addClass('past-main');
    } else {
        $('.nav.icon-bar').removeClass('past-main');
    }




});