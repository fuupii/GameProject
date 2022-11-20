'use strict';

{
    const buttonYellow = document.querySelector('.yellow');
    const buttonBlue = document.querySelector('.blue');
    const defaultValue = document.getElementById('defaultvalue').textContent;
    let place = Number(defaultValue);
    let encount = false;

    const sound = document.querySelector('.bgm');
    const attackSound = document.querySelector('.attack');



    function NowTime()
    {
        let nowDate = new Date();
        return '（' + nowDate.getHours() + ':' + nowDate.getMinutes() + '）';
    }



    // 青ボタンクリック処理
    buttonBlue.addEventListener('click', () => {
        fetch(
            'api/update',
            {
                method: 'PATCH',
                body: new URLSearchParams({
                    item_id: 1,
                    quantity: 2,
                    name: 'Herb',
                }),
            }
        );

    });

    // 黄ボタンクリック処理
    buttonYellow.addEventListener('click', () => {
        if(!encount && !cooldown_flag) {
            const searchRandom = Search(getConfig());
            switch(searchRandom.val) {
                case 10:
                    if(!encount && cooldown ) {
                        encountEnemy();
                        encount = true;

                    }
                break;
                case 20:
                    getMoney(20);
                        //dev
                        encountEnemy();
                        encount = true;
                break;
                case 70:
                    getMoney(10);
                        //dev
                        encountEnemy();
                        encount = true;
                break;
            }
            cooldown(500);
        }
    });

    function updateLi(value)
    {
        const ul = document.querySelector('ul');
        ul.lastElementChild.remove();
        place = place + value;
        const li = document.createElement('li');
        li.textContent = place;
        ul.appendChild(li);
    }

    function getMoney(value)
    {
        updateLi(value);
        const text = document.querySelector('textarea');
        text.textContent = text.textContent + `${value}円獲得しました` + NowTime() + '\n';
        text.scrollTop = text.scrollTop + 1000;
        text.scrollTop = text.scrollTop - 20;
    }

    function encountEnemy()
    {
        showEnemy();
        hp += 50;
    }

    const enemy = document.querySelector('.enemy')
    enemy.addEventListener('click', () => {
        hit();
    });

    // 攻撃
    function hit()
    {
        attackSound.currentTime = 0;
        attackSound.play();
        if(hp > 0) {
            hp -= myAtk;
            updateEnemyHitPoint();
            if(hp <= 0) {
                fadeEnemy();
                getMoney(400);
                encount = false;
            }
        } else {
            fadeEnemy();
            getMoney(400);
            encount = false;
        }
    }

    function showEnemy()
    {
        const encountEnemy = document.createElement('img');
        const showhp = document.createElement('li');
        const hpindicator = document.createElement('progress');

        hpindicator.setAttribute('value', Number(50));
        hpindicator.setAttribute('max', Number(50));
        encountEnemy.setAttribute('src', '/tori5-full.png');
        showhp.textContent = Number(50);
        showhp.classList.add = 'HP';
        // encountEnemy.classList.add = 'atack';
        enemy.appendChild(encountEnemy);
        enemy.appendChild(showhp);
        enemy.appendChild(hpindicator);
    }


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





