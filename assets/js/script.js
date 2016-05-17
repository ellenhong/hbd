$(document).ready(function() {
	setTimeout(function () {
	    $('#hbd1').show().addClass('hbd fadeInUp');}, 50
	);
	setTimeout(function () {
	    $('#hbd2').show().addClass('hbd fadeInUp');}, 1500
	);
	setTimeout(function () {
	    $('#jul').show().addClass('hbd fadeInUp');}, 3000
	);
	setTimeout(function () {
	    $('#text-wrapper').addClass('slideUpAnim');}, 5000
	);

	$('a').click(function() {
	    $('html, body').animate({
	      scrollTop: $( $.attr(this, 'href')).offset().top
	    }, 1000);
	    return false;
  	});

  	setTimeout(function () {
	    $('#click-arrow').fadeIn(3000);
	    $('#click').fadeIn(3000);
	}, 7000);

  	var $animation_elements = $('.anim');
	var $window = $(window);

	function check_if_in_view() {
	  var window_height = $window.height();
	  var window_top_position = $window.scrollTop();
	  var window_bottom_position = (window_top_position + window_height);
	 
	  $.each($animation_elements, function() {
	    var $element = $(this);
	    var element_height = $element.outerHeight();
	    var element_top_position = $element.offset().top;
	    var element_bottom_position = (element_top_position + element_height);
	 
	    //check to see if this current container is within viewport
	    if ((element_bottom_position >= window_top_position) &&
	        (element_top_position <= window_bottom_position)) {
	      $element.addClass('in-view');
	    } else {
	      $element.removeClass('in-view');
	    }
	  });
	}

	$window.on('scroll resize', check_if_in_view);
	$window.trigger('scroll');

})