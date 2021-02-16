// setbutton class
const $fadeTop = document.querySelector('.fadeTop');

const $contentFloat = document.querySelector('.contentFloat');
const $itemFloat = document.querySelector('.itemFloat');
const $figures = document.querySelectorAll('.figure');
const $figureContent = document.querySelector('.figureContent');
const $hoverImg = document.querySelector('.hoverImg');
const $menuOut = document.querySelector('.menuOut');
const $figcaption = document.getElementsByTagName('figcaption');

const $closeBtn = document.getElementById('closeBtn');
const $mobileBtn = document.getElementById('mobileBtn');
const $mainMenu = document.getElementById('mainMenu');


    // for(let i = 0; i < $figures.length;++i) {
    //     const $figure = $figures[i];
    //     $figure.addEventListener('click', function() {
    //         $figureContent.style.display = 'block';
    //         $hoverImg.style.opacity = '0.3';
    //     });     
    // console.log($figure.length);    
    // };


// figureClick.addEventListener('click', function () {
//     figureContent.style.display = 'block';
//     hoverImg.style.opacity = '0.3';
//     figcaption.style.display = 'none';

// });




// 모바일 메뉴버튼
$mobileBtn.addEventListener('click', function (e) {
    mainMenu.classList.add('on');
    mobileBtn.style.display = 'none';
    closeBtn.style.display = 'block';
});

$closeBtn.addEventListener('click', function (e) {
    mainMenu.classList.remove('on');
    mobileBtn.style.display = 'block';
    closeBtn.style.display = 'none';
});

