// setbutton class
const $fadeTop = document.querySelector('.fadeTop');

const contentFloat = document.querySelector('.contentFloat');
const itemFloat = document.querySelector('.itemFloat');
const figure = document.querySelector('.figure');
const figureContent = document.querySelector('.figureContent');
const closeBtn = document.querySelector('.closeBtn');
const mobileBtn = document.getElementById('mobileBtn');
const mainMenu = document.getElementById('mainMenu');



for (let i = 0; i < itemFloat.length; ++i) {

    const figure = itemFloat[i];
    console.log(figure)
    figure.addEventListener('click', function () {
        figureContent.style.display = 'block';
    });

};



mobileBtn.addEventListener('click', function (e) {
    mainMenu.classList.add('on');
    mobileBtn.style.display = 'none';
    closeBtn.style.display = 'block';
});

closeBtn.addEventListener('click', function (e) {
    mainMenu.classList.remove('on');
    mobileBtn.style.display = 'block';
    closeBtn.style.display = 'none';
});



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