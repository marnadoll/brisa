jQuery(document).ready(function($) {
  
  // Smooth scrolling
    $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
  
  //mobile scripts
if( jQuery(this).width() < 1100 ) {
	    
// Mobile menu
jQuery('#menu a#toggle').click(function(e) {
  e.preventDefault();
  
  jQuery('#menu ul').slideToggle(200, function() {
    // Animation complete.
  });
});

    };


//Desktop scritps
if( jQuery(this).width() >= 1100 ) {
	    
// Hide sticky nav
jQuery(document.getElementById('menu')).hide();

// Show and hide the menu. uses waypoint.js
jQuery('.middle').waypoint(function(direction) {
       if (direction === 'down') {
     jQuery(document.getElementById('menu')).fadeIn( 500 );
       }     
      }, { offset: -120 });
     
    
jQuery('.middle').waypoint(function(direction) {
       if (direction === 'up') {  
    jQuery(document.getElementById('menu')).fadeOut( 100 );
       }     
      }, { offset: -121 });
    };

  
});

jQuery('#block-rates').waypoint(function() {
   alert('You have scrolled to the comments.');
});

var waypoint = new Waypoint({
  element: document.getElementById('#waypoint'),
  handler: function(direction) {
    console.log('Scrolled to waypoint!')
  }
})
