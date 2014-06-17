/*jshint forin:true, noarg:true, noempty:true, eqeqeq:true, bitwise:true,
 strict:true, curly:true, browser:true, jquery:true, maxerr:50 */
//smooth scroll on page
$(document).ready(function() {
  'use strict';

  $('.navbar a, .navbar li a, .brand, #footer li a, .more a, a.go-top')
  .bind('click', function(event) {
    var $anchor = $(this),
    scrollVal = $($anchor.attr('href')).offset().top - 60;

    if (scrollVal < 0) {
      scrollVal = 0;
    }

    $('[data-spy="scroll"]').each(function() {
      $(this).scrollspy('refresh');
    });

    $.scrollTo(scrollVal, {
      easing: 'easeInOutExpo',
      duration: 1500
    });

    event.preventDefault();
  });

  //responsive embed videos
  $('.video').fitVids();

  //Device Holder
    $("div.bhoechie-tab-menu>div.list-group>a").click(function(e) {
        e.preventDefault();
        $(this).siblings('a.active').removeClass("active");
        $(this).addClass("active");
        var index = $(this).index();
        $("div.bhoechie-tab>div.bhoechie-tab-content").removeClass("active");
        $("div.bhoechie-tab>div.bhoechie-tab-content").eq(index).addClass("active");
    });

  //make intro carousel height of window
  $('#carousel_intro .item').css({'height': ($(window).height()) + 'px'});
  $(window).resize(function() {
    $('#carousel_intro .item').css({'height': ($(window).height()) + 'px'});
  });

  //carousel swipe and autoslide
  var carousels = [
    'intro',
    'content',
    'modal',
    'header_1',
    'header_3'
  ];

  $.each(carousels, function() {
    var suffix = Array.prototype.slice.call(this).join(''),
    element = '#carousel_' + suffix;
    $(element).carousel({
      interval: 0,
      pause: false
    });
    jQuery(element).touchwipe({
      wipeLeft: function() { jQuery(element).carousel('next'); },
      wipeRight: function() { jQuery(element).carousel('prev'); },
      min_move_x: 20,
      preventDefaultEvents: false
    });
  });

  //Handles menu drop down
    $('.dropdown-menu').find('form').click(function (e) {
        e.stopPropagation();
    });

  //animated elements
  if ($('.no-touch').length) {
    skrollr.init({
      edgeStrategy: 'set',
      easing: {
        WTF: Math.random,
        inverted: function(p) {
          return 1 - p;
        }
      },
      smoothScrolling: true,
      forceHeight: false
    });
  }
});

$(function(){
  $('div.product-chooser').not('.disabled').find('div.product-chooser-item').on('click', function(){
    $(this).parent().parent().find('div.product-chooser-item').removeClass('selected');
    $(this).addClass('selected');
    $(this).find('input[type="radio"]').prop("checked", true);
    
  });
});

$(window).load(function() {
  'use strict';
  //preloader
  $(window).scrollTop(0);
  $('#status').fadeOut();
  $('#preloader').delay(350).fadeOut('slow');

  //modal trigger
  $('.modal').bigmodal('hide');

  //tooltip and popover trigger
  $('[data-thumb=tooltip]').tooltip();
  $('[data-thumb=popover]').popover();

  //if link points to nowhere (aka #) then don't go to top of page
  $('a[href="#"]').click(function() {
    return false;
  });

});