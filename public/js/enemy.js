'use strict'

 class Enemy {

    constructor (name, hp, atk, def, money, url)
    {
        this.name = name;
        this.hp = Number(hp);
        this.atk = Number(atk);
        this.def = Number(def);
        this.money = Number(400);
        this.url = url;
    }

}

const bird = new Enemy('bird', '100', '10', '5', '400', '/tori5-full.png');

console.log(bird.name);
