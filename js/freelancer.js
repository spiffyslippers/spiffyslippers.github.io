/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('body').on('click', '.page-scroll a', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

//accordian
//show one @ a time? - data-multiopen=false on the <dl>
(function($) { 
  
var $accordian = $('.accordian'),
    allowMulti = $accordian.data('multiopen');
  
$accordian.find('dt').each(function() {
  var $t = $(this),
      $def = $t.next('dd');
  $t.on('click', function() {
    var $tt = $(this),
        $openSibs = $tt.siblings('.is-open'),
        isOpen = $tt.hasClass('is-open'),
        slide = isOpen ? 'slideUp' : 'slideDown',
        dur = isOpen ? 150 : 350;
    if (!allowMulti && $openSibs.length) {
      $tt.siblings('.is-open').removeClass('is-open');
      $tt.siblings('dd').velocity('slideUp',{duration:150});
    }
    $def.velocity(slide, {duration:dur});
    $tt.toggleClass('is-open');
  });
});
  
});
