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
    }, 50);

    const modal = document.getElementById('modal');

    shop.addEventListener('click', () => {
        modal.classList.remove('hidden');
    });

    document.getElementById('close').addEventListener('click', () => {
        modal.classList.add('hidden');
    });




}
