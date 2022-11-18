'use strict';

{
    const button = document.querySelector('button');
    const defaultValue = document.getElementById('defaultvalue').textContent;
    let place = Number(defaultValue);
    let searchRandom = 0;



    // ボタンクリック処理
    button.addEventListener('click', () => {
        let searchRandom = Math.floor(Math.random() * 3);
        switch(searchRandom) {
            case 0:
                getMoney(3);
                updateLi(3);
            break;
            case 1:
                getMoney(10);
                updateLi(10);
            break;
            case 2:
                getMoney(20);
                updateLi(20);
            break;
        }
    });

    function updateLi(value)
    {
        const ul = document.querySelector('ul');
        ul.firstElementChild.remove();
        place = place + value;
        const li = document.createElement('li');
        li.textContent = place;
        ul.appendChild(li);
    }

    function getMoney(value)
    {
        fetch(
            'api/action',
            {
                method: 'PATCH',
                body: new URLSearchParams({
                    id: 2,
                    newPrice: place + value,
                }),
            }
        );
    }






}
