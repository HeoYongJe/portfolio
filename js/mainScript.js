$(document).ready(function() {
	$('#fullpage').fullpage({
		//options here
		autoScrolling:true,
		scrollHorizontally: true
	});

	//methods
	$.fn.fullpage.setAllowScrolling(true);
});


/*font-typing*/
$('#introPage h2').typeIt({
	strings: 'Portfolio',
	speed:100,
	autoStart: false,
	cursor: false
});
