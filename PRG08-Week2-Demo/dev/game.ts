class Game {
    
    private destroyed:number = 0
    private textfield:HTMLElement
    private statusbar:HTMLElement
    private bombs:Bomb[]
    private car:Car;
    private static instance:Game;

    readonly NUMBER_OF_BOMBS:Number = 4;
    
    private constructor() {
        this.textfield = document.getElementsByTagName("textfield")[0] as HTMLElement
        this.statusbar = document.getElementsByTagName("bar")[0] as HTMLElement

        this.car = new Car();

        this.bombs = [];

        for(let i = 0; i < this.NUMBER_OF_BOMBS; i++) {
            this.bombs.push(new Bomb());
        }


        this.gameLoop()
    }

    public static getInstance():Game {
        if(!Game.instance){
            Game.instance = new Game();
        }
        return Game.instance;
    }
    
    private gameLoop():void{
        //console.log("updating the game")
        this.car.update();

        for(let b of this.bombs) {
            b.update();

            //check collision
            if(this.checkCollision(this.car.getBoundingRect(), b.getBoundingRect())){
                console.log("Collision!");
            }
        }

        requestAnimationFrame(() => this.gameLoop())
    }

    private checkCollision(a: ClientRect, b: ClientRect) {
        return (a.left <= b.right &&
              b.left <= a.right &&
              a.top <= b.bottom &&
              b.top <= a.bottom)
    }

    public destroyBuilding(){
        this.destroyed ++
        console.log("buildings destroyed " + this.destroyed)
    }
       
    public scorePoint() {
        Score.getInstance().addScore(1);
        this.textfield.innerHTML = "Score: " + Score;
    }

} 

window.addEventListener("load", () => Game.getInstance())