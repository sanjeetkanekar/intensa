// ------- PRELOADER -------//
$(window).load(function () {
  $('.preloader').fadeOut("slow"); // set duration in brackets    
});
// ----- GOOGLE MAP ----- //
var map = '';
var center;

function initialize() {

  var myLatLng = {
    lat: 15.424782,
    lng: 73.979776
  };

  var mapOptions = {
    zoom: 16,
    center: myLatLng,
    scrollwheel: false
  };

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: "Hello World!"
  });

  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  google.maps.event.addDomListener(map, 'idle', function () {
    calculateCenter();
  });

  google.maps.event.addDomListener(window, 'resize', function () {
    map.setCenter(center);
  });
}

function calculateCenter() {
  center = map.getCenter();
}

function loadGoogleMap() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyC3tD4M2-GSiqrbAWQ71HZKIptaSxaKOlc&' + 'callback=initialize';
  document.body.appendChild(script);
}

/* HTML document is loaded. DOM is ready. 
-------------------------------------------*/
$(function () {

  // --------- HIDE MOBILE MENU AFTER CLIKING ON A LINK ------- //
  $('.navbar-collapse a').click(function () {
    $(".navbar-collapse").collapse('hide');
  });

  // --------- PORTFOLIO IMAGE ----- //
  $('#newsletter a').nivoLightbox({
    effect: 'fadeScale',
  });

  $('#gallery a').nivoLightbox({
    effect: 'fadeScale',
  });

  // ------- WOW ANIMATED ------ //
  wow = new WOW({
    mobile: false
  });
  wow.init();

  // ------- GOOGLE MAP ----- //
  loadGoogleMap();

  // ------- JQUERY PARALLAX ---- //
  function initParallax() {
    $('#home').parallax("100%", 0.3);
    $('#team').parallax("100%", 0.3);
    $('#contact').parallax("100%", 0.1);

  }
  initParallax();

});

$(document).ready(function () {
  // Load the first 4 list items from another HTML file
  //$('#myList').load('externalList.html li:lt(3)');
  $('.our-webcoderskull ul li').slice(0, 4).show();
  $(".loadmore").click(function (e) { // click event for load more
    e.preventDefault();
    $(".our-webcoderskull ul li:hidden").slice(0, 4).show(); // select next 10 hidden divs and show them
    if ($(".our-webcoderskull ul li:hidden").length == 0) {
      $(".loadmore").fadeOut('slow');
    }
  });
});

// event timeline
var $element = $('#eventtimeline .each-event');
var $window = $(window);
$window.on('scroll resize', check_for_fade);
$window.trigger('scroll');

function check_for_fade() {
  var window_height = $window.height();

  $.each($element, function (event) {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_offset = $element.offset().top;
    space = window_height - (element_height + element_offset - $(window).scrollTop());
    if (space < 60) {
      $element.addClass("non-focus");
    } else {
      $element.removeClass("non-focus");
    }

  });
};

//gallery filter
$(window).load(function () {
  var $container = $('.gallery_items');
  $container.isotope({
    filter: '*',
    animationOptions: {
      duration: 750,
      easing: 'linear',
      queue: false
    }
  });

  $('.cat .filtrbtn').click(function () {
    $('.cat .active').removeClass('active');
    $(this).addClass('active');
    var selector = $(this).attr('data-filter');
    $container.isotope({
      filter: selector,
      animationOptions: {
        duration: 750,
        easing: 'linear',
        queue: false
      }
    });
    return false;
  });
});

$(document).ready(function () {

  var scrollLink = $('.smoothScroll');

  // Smooth scrolling
  scrollLink.click(function (e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000);
  });

  // Active link switching
  $(window).scroll(function () {
    var scrollbarLocation = $(this).scrollTop();

    scrollLink.each(function () {

      var sectionOffset = $(this.hash).offset().top - 20;

      if (sectionOffset <= scrollbarLocation) {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      }
    });
  });
});


// function updateCounter() {
//   fetch('https://api.countapi.xyz/update/gecintensa/gecintensa?amount=-1')
//       .then(res => res.json())
//       .then(data => counterElement.innerHTML = data.value)
// }

// updateCounter()



// counterElement = document.getElementsByClassName('visitcount')[0];