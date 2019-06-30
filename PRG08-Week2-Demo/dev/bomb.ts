/// <reference path="gameobject.ts" />

class Bomb extends GameObject{
    
    private speed:number;
        
    constructor() {
        super("bomb");

        this.element.addEventListener("click", () => { this.onClick() })
        
        this.resetBomb();
        
    }

    public update():void {
        this.posy += this.speed;
        if (this.posy > window.innerHeight) {
            this.resetBomb();
        }
        
        super.update();
    }

    private onClick() {
        Game.getInstance().scorePoint();
        this.resetBomb();
    }

    public resetBomb() {
        this.posy = -500
        this.posx = Math.random() * (window.innerWidth - this.element.getBoundingClientRect().width);
        this.speed = Math.random() * 5 + 2;
    }
}