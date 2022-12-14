'use strict';

{
    const button = document.querySelector('button');
    const ul = document.querySelector('ul');
    const defaultValue = document.getElementById('defaultvalue').textContent;
    let place = Number(defaultValue);



    // ボタンクリック処理
    button.addEventListener('click', () => {
        const ul = document.querySelector('ul');
        ul.firstElementChild.remove();
        place = place + 1;
        const li = document.createElement('li');
        li.textContent = place;
        ul.appendChild(li);
    });

    // お金セーブ
    function saveMoney()
    {
        fetch(
            'api/action',
            {
                method: 'PATCH',
                body: new URLSearchParams({
                    id: 2,
                    newPrice: place,
                }),
            }
        );
    }

    // オートセーブ
    setInterval(() => {
        saveMoney();
    }, 1000);






}
