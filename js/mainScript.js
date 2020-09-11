
// setbutton class
const $fadeTop = document.querySelector('.fadeTop');
const $introDivideLayout = document.querySelector('.introDivideLayout');
const $contentFloat = document.querySelector('.contentFloat');
const $figureContent = document.querySelector('.figureContent');
const $closeBtn = document.querySelector('.closeBtn');
const $titleAndContent = document.querySelector('.titleAndContent');
const fadeTopOn = () => ([...$introDivideLayout.classList].includes('fadeTopOn'));


// const $startWindow = function(){
// 	fadeTopOn();
// }
const render = () =>{
   for (let i = 0; i < contentFloat.length; i++) {
        let item = contentFloat[i];
        item.addEventListener('click', setClick);
    } 

    for (let i = 0; i < closeBtn.length; i++) {
        let closeBtn = closeBtn[i];
        closeBtn.addEventListener('click', closeClick);
    }
}

const setClick = () => {
        $titleAndContent.style.display = 'block';
        $contentFloat.style.opacity ='0.5';
};

const closeClick = () => {
    $titleAndContent.style.display = 'none';
    $contentFloat.style.opacity ='1';

};
// $contentFloat.addEventListener('click', setClick);
// $closeBtn.addEventListener('click', closeClick);

// $fadeTop.addEventListener('load', () => $fadeTopOn());
// 페이지 열릴 시 위에서 올라오는 스크립트 실행

/*font-typing*/
// $('#introPage h2').typeIt({
// 	strings: 'Portfolio',
// 	speed:75,
// 	autoStart: false,
// 	cursor: false
// });





