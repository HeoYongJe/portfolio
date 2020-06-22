$(document).ready(function(){
    $('#fullpage').fullpage({
        autoScrolling:true,
        scrollHorizontally:true
    });
});

// $(function(){
//     $('body').on('click', '.page-scroll a', function(event) {
//         var $anchor = $(this);
//         $('html, body').stop().animate({
//             scrollTop: $($anchor.attr('href')).offset().top+40
//         }, 1300, 'easeInOutQuint');
//         event.preventDefault();
//     });
// });


// $(window).scroll(function () {
// 	var scrolled = $(window).scrollTop(), eleBtm, winBtm;
// 	$('#wrap').css('background-position-y', -(scrolled*0.1) + 'px');

// 	$('#wrap .fade-left01').each(function(){
// 		eleBtm = $(this).offset().top + 300;
// 		winBtm = scrolled + $(window).height();
// 		if( winBtm > eleBtm ){
// 			$(this).delay(300).animate({'opacity':'1','left':'0'},1000);
// 		}
// 	}); 

// 		$('#wrap .fade-right01').each(function(){
// 		eleBtm = $(this).offset().top + 300;
// 		winBtm = scrolled + $(window).height();
// 		if( winBtm > eleBtm ){
// 			$(this).delay(300).animate({'opacity':'1','right':'0'},1000);
// 		}
//     })
