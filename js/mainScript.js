// setbutton class
const $fadeTop = document.querySelector('.fadeTop');

const $contentFloat = document.querySelector('.contentFloat');
const $itemFloat = document.querySelector('.itemFloat');
const $hoverImg = document.querySelector('.hoverImg');
const $boxItem = document.querySelector('.boxItem');
const $boxText = document.querySelector('.boxText');

const $contentBtn = document.getElementsByClassName('contentBtn');
const $mainMenu = document.getElementById('mainMenu');
const $mainBtn = document.getElementById('mainBtn');
const $closeBtn = document.getElementById('closeBtn');
const $mobileBtn = document.getElementById('mobileBtn');




// 캐러셀
// $('.carousel').carousel()


// 모바일 메뉴버튼

for (let i = 0; i < $contentBtn.length; i++) {
    
    $contentBtn[i].addEventListener('click', function () {
        mainMenu.classList.remove('on');
        mobileBtn.style.display = 'block';
        closeBtn.style.display = 'none';
    });
   
}
console.log($contentBtn.length) 


$mobileBtn.addEventListener('click', function (e) {
    mainMenu.classList.add('on');
    // mainMenu.style.display = 'block';
    mobileBtn.style.display = 'none';
    closeBtn.style.display = 'block';
});

$closeBtn.addEventListener('click', function (e) {
    mainMenu.classList.remove('on');
    // mainMenu.style.display = 'none';
    mobileBtn.style.display = 'block';
    closeBtn.style.display = 'none';
});
