'use strict'

    const enemy = document.querySelector('.enemy');
    let cooldown_flag = false;
    const fadeSound = document.querySelector('.fade');

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

    function getConfig()
    {
        return [
            { id:'ENCOUNT', val: 10},
            { id:'bigMoney', val: 20},
            { id:'miniMoney', val: 70},
        ];
    }

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

    function cooldown(time)
    {
        cooldown_flag = true;
        window.setTimeout(()=> {
            cooldown_flag = false;
            console.log('hi');
        }, time);
    }


