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
})