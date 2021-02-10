// setbutton class
const $fadeTop = document.querySelector('.fadeTop');

const contentFloat = document.querySelector('.contentFloat');
const itemFloat = document.querySelector('.itemFloat');
const figure = document.querySelector('.figure');
const figureContent = document.querySelector('.figureContent');
const hoverImg = document.querySelector('.hoverImg');
const figcaption = document.getElementsByTagName('figcaption');

const closeBtn = document.getElementById('closeBtn');
const mobileBtn = document.getElementById('mobileBtn');
const mainMenu = document.getElementById('mainMenu');




    figure.addEventListener('click', function() {
        figureContent.style.display = 'block';
        hoverImg.style.opacity = '0.3';
        hoverImg.style.hover = 'none;'
        figcaption.style.display = 'none';

    });




// 모바일 메뉴버튼
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
