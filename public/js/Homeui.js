'use strict'



{



    const main = document.querySelector('main');
    const townBgm = document.querySelector('.townBgm');
    const selectSe = document.querySelector('.selectSe');
    townBgm.volume = 0.5;
    townBgm.play();

    const battle = document.querySelector('.battle');
    const shop = document.querySelector('.shopbtn');
    const gear = document.querySelector('.gear');

    // battle.addEventListener('click', e => {
    //     e.preventDefault();
    //     main.classList.add('fadeout');

    //     window.setTimeout(() => {
    //         window.open('/battle', '_self');
    //     }, 700);
    // });



    window.setTimeout(() => {
        battle.classList.add('appear');
        window.setTimeout(() => {
            shop.classList.add('appear');
            window.setTimeout(() => {
                gear.classList.add('appear');
            }, 200)
        }, 200)
    }, 50);

    const modal = document.getElementById('modal');

    shop.addEventListener('click', () => {
        modal.classList.remove('hidden');
        selectSe.currentTime = 0;
        selectSe.play();
    });

    battle.addEventListener('click', () => {
        selectSe.play();
    });

    document.getElementById('close').addEventListener('click', () => {
        modal.classList.add('hidden');
    });




}
