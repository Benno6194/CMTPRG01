/// <reference path="gameobject.ts" />

class Car extends GameObject {

    private movement = 0;
        
    constructor() {
        super("car");

        window.addEventListener("keydown", (e:KeyboardEvent) => this.onKeyDown(e))
        window.addEventListener("keyup", (e:KeyboardEvent) => this.onKeyUp(e))
        
        this.posx = -100
        this.posy = 480
    }

    onKeyDown(event:KeyboardEvent):void {
        console.log(event.keyCode);
        switch(event.keyCode){
        case 37:
            this.movement = 5
            break
        case 39:
            this.movement = 5
            break
        }
    }
    
    onKeyUp(event:KeyboardEvent):void {
        switch(event.keyCode){
        case 37:
            this.movement = 0
            break
        case 39:
            this.movement = 0
            break
        }
    }

    public update():void {
        this.posx += this.movement;
        if (this.posx > window.innerWidth) {
            this.posx = -50 - Math.random() * 200;
        }
        
        super.update();
    }
}