'use strict';

{

    const buttonYellow = document.querySelector('.yellow');
    const buttonBlue = document.querySelector('.blue');









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

            playWalkSound();

            const searchRandom = Search(getConfig());

            // caseに確率が入る
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
                        // encountEnemy();
                        // encount = true;
                break;
                case 70:
                    getMoney(10);
                        //dev
                        // encountEnemy();
                        // encount = true;
                break;
            }
            cooldown(500);
        }
    });




}





