
// setbutton class
const $fadeTop = document.querySelector('.fadeTop');
const $introDivideLayout = document.querySelector('.introDivideLayout');
const $figure = document.querySelector('.figure');
const $figureContent = document.querySelector('.figureContent');
const $closeBtn = document.querySelector('.closeBtn');
const fadeTopOn = () => ([...$introDivideLayout.classList].includes('fadeTopOn'));


// const $startWindow = function(){
// 	fadeTopOn();
// }
const setClick = () =>{
        $figureContent.style.display = 'block';
        $figure.style.background ='rgba(0,0,0,0.7)';
        $closeBtn.style.display = 'block';
};
$figure.addEventListener('click', setClick);

// $fadeTop.addEventListener('load', () => $fadeTopOn());
// 페이지 열릴 시 위에서 올라오는 스크립트 실행

/*font-typing*/
// $('#introPage h2').typeIt({
// 	strings: 'Portfolio',
// 	speed:75,
// 	autoStart: false,
// 	cursor: false
// });





