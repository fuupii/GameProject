'use strict'

    //  冒険ボタン定義
    let encount = false;
    let cooldown_flag = false;

    //  定義
    const enemy = document.querySelector('.enemy');
    const fadeSound = document.querySelector('.fade');
    const span = document.querySelector('main');

    //  BGM関連
    const sound = document.querySelector('.bgm');
    sound.volume = 0.5;
    const attackSound = document.querySelector('.attack');

    //  お金関連
    const defaultValue = document.getElementById('defaultvalue').textContent;
    let place = Number(defaultValue);


    //ログの時間を取得
    function NowTime()
    {
        let nowDate = new Date();
        return '（' + nowDate.getHours() + ':' + nowDate.getMinutes() + '）';
    }

    // 敵HPの更新
    function updateEnemyHitPoint()
    {
        enemy.children[1].remove();
        const showhp = document.createElement('li');
        const hpindicator = document.querySelector('.enemy').lastElementChild;
        hpindicator.setAttribute('value', Number(hp));
        showhp.textContent = Number(hp);
        showhp.classList.add = 'HP';
        hpindicator.before(showhp);
    }

    // 敵撃破
    function fadeEnemy(enemyName)
    {
        enemy.firstElementChild.remove();
        enemy.firstElementChild.remove();
        enemy.firstElementChild.remove();
        fadeSound.volume = 0.3;
        fadeSound.play();
        const text = document.querySelector('textarea');
        text.textContent = text.textContent + `${enemyName}を撃破` + NowTime() + '\n';

    }

    // 確率の定義
    function getConfig()
    {
        return [
            { id:'ENCOUNT', val: 10},
            { id:'bigMoney', val: 20},
            { id:'miniMoney', val: 70},
        ];
    }

    // 乱数生成
    function Search(config)
    {
        const min = 1;
        const max = 100;

        const SearchRandom = Math.floor(Math.random() * (max + 1 - min)) + min;

        let result = [];
        let total = 0;
        for(let i = 0;  i < config.length; i++) {
            total += config[i].val;
            if( SearchRandom <= total ) {
                result = config[i];
                break;
            }
        };
        return result;
    }

    //クールダウン
    function cooldown(time)
    {
        cooldown_flag = true;
        window.setTimeout(()=> {
            cooldown_flag = false;
            console.log('hi');
        }, time);
    }

    //歩く音楽を流す
    function playWalkSound()
    {
        const walkSound = document.querySelector('.walk');
        walkSound.currentTime = 0;
        walkSound.play();
        window.setTimeout(() => {
            if(walkSound.currentTime > 1.5)
            {
                walkSound.pause();
            } else {
                console.log('hi');
            }
        },1600);
    }

    // 攻撃
    function hit()
    {
        attackSound.currentTime = 0;
        attackSound.volume = 0.2;
        attackSound.play();
        if(hp > 0) {
            hp -= myAtk;
            updateEnemyHitPoint();
            if(hp <= 0) {
                fadeEnemy('コケコッコー');
                getMoney(400);
                encount = false;
            }
        } else {
            fadeEnemy('コケコッコー');
            getMoney(400);
            encount = false;
        }
    }

    //  敵要素を配置
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

    function updateLi(value)
    {
        const ul = document.querySelector('ul');
        ul.lastElementChild.remove();
        place = place + value;
        const li = document.createElement('li');
        li.textContent = place;
        ul.appendChild(li);
    }

    // 引数の数のお金を増やす
    function getMoney(value)
    {
        updateLi(value);
        const text = document.querySelector('textarea');
        text.textContent = text.textContent + `${value}円獲得しました` + NowTime() + '\n';
        text.scrollTop = text.scrollTop + 1000;
        text.scrollTop = text.scrollTop - 20;
    }

    // 敵に遭遇
    function encountEnemy()
    {
        showEnemy();
        hp += 50;
    }


    // 敵要素をクリックした時の処理
    enemy.addEventListener('click', () => {
        hit();
    });

