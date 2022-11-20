'use strict'

{
    const battle = document.querySelector('.battle');
    const shop = document.querySelector('.shop');
    const gear = document.querySelector('.gear');

    window.setTimeout(() => {
        battle.classList.add('appear');
        window.setTimeout(() => {
            shop.classList.add('appear');
            window.setTimeout(() => {
                gear.classList.add('appear');
            }, 200)
        }, 200)
    }, 1);




}
