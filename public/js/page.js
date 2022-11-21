'use strict'

{

    console.log('hi');

// フェードイン
const main = document.querySelector('main');

const battle = document.querySelector('.battle');

window.setTimeout(() => {
    main.classList.remove('fadeout');
}, 50);

battle.addEventListener('click', e => {
    console.log('fusu');
    e.preventDefault();
    main.classList.add('fadeout');

    window.setTimeout(() => {
        window.open('/battle', '_self');
    }, 800);
});




const selectSe = document.querySelector('.selectSe');
const back = document.getElementById('back');

back.addEventListener('click', e => {
    e.preventDefault();
    main.classList.add('fadeout');
    selectSe.play();
    window.setTimeout(() => {
        window.open('/', '_self');
    }, 800)
});



// battlebtnクリックアニメーション


}

