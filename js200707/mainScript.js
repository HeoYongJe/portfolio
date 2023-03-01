$(document).ready(function() {
	$('#fullpage').fullpage({
		//options here
		autoScrolling:true,
		scrollHorizontally: true
	});

	//methods
	$.fn.fullpage.setAllowScrolling(true);
});


// setbutton class
const $fadeTop = document.querySelector('.fadeTop');
const $introDivideLayout = document.querySelector('.introDivideLayout');
const fadeTopOn = () => ([...$introDivideLayout.classList].includes('fadeTopOn'));

// const $startWindow = function(){
// 	fadeTopOn();
// }

$fadeTop.addEventListener('load', () => $fadeTopOn());
// 페이지 열릴 시 위에서 올라오는 스크립트 실행

/*font-typing*/
// $('#introPage h2').typeIt({
// 	strings: 'Portfolio',
// 	speed:75,
// 	autoStart: false,
// 	cursor: false
// });
