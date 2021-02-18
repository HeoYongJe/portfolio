// setbutton class
const $fadeTop = document.querySelector('.fadeTop');

const $contentFloat = document.querySelector('.contentFloat');
const $itemFloat = document.querySelector('.itemFloat');
const $hoverImg = document.querySelector('.hoverImg');
const $boxItem = document.querySelector('.boxItem');
const $boxText = document.querySelector('.boxText');

const $closeBtn = document.getElementById('closeBtn');
const $mobileBtn = document.getElementById('mobileBtn');
const $contentBtn = document.querySelectorAll('contentBtn');


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

focusMethod = function getFocus() {
    if($boxItem.focus()){
        boxText.style.display = 'flex';
        // mainMenu.classList.add('on');
    }
  }



// 모바일 메뉴버튼

$contentBtn.addEventListener('click', function (e) {
    mainMenu.style.display = 'none';
    mobileBtn.style.display = 'block';
    closeBtn.style.display = 'none';
});

$mobileBtn.addEventListener('click', function (e) {
    // mainMenu.classList.add('on');
    mainMenu.style.display = 'block';
    mobileBtn.style.display = 'none';
    closeBtn.style.display = 'block';
});

$closeBtn.addEventListener('click', function (e) {

    mainMenu.style.display = 'none';
    mobileBtn.style.display = 'block';
    closeBtn.style.display = 'none';
});

