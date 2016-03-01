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


// external js: isotope.pkgd.js, classie.js

// ----- getText helper ----- //

var textProp = document.documentElement.textContent !== undefined ? 'textContent' : 'innerText';

function getText( elem ) {
  return elem[ textProp ];
}

// -----  ----- //

docReady( function() {
  // init Isotope
  var iso = new Isotope( '.grid', {
    itemSelector: '.element-item',
    layoutMode: 'fitRows'
  });

  // filter functions
  var filterFns = {
    // show if number is greater than 50
    numberGreaterThan50: function( itemElem ) {
      var number = getText( itemElem.querySelector('.number') );
      return parseInt( number, 10 ) > 50;
    },
    // show if name ends with -ium
    ium: function( itemElem ) {
      var name = getText( itemElem.querySelector('.name') );
      return name.match( /ium$/ );
    }
  };

  // bind filter button click
  var filtersElem = document.querySelector('.filter-group');
  eventie.bind( filtersElem, 'click', function( event ) {
    // only work with buttons
    if ( !matchesSelector( event.target, 'button' ) ) {
      return;
    }
    var filterValue = event.target.getAttribute('data-filter');
    // use matching filter function
    filterValue = filterFns[ filterValue ] || filterValue;
    iso.arrange({ filter: filterValue });
  });

});


$('.filter-group button').on('click', function(){
    $(this).siblings().removeClass('active')
    $(this).addClass('active');
})

$("a[href^='http://']").attr("target","_blank");
