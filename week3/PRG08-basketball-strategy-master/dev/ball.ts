abstract class Ball extends HTMLElement{

    public readonly gravity    : number = 0.1
    public readonly friction   : number = 0.9

    public x           : number = 0
    public y           : number = 0
    public speedX      : number = 5
    public speedY      : number = -3
    public minWidth    : number = 0
    public maxWidth    : number = 0
    public maxHeight   : number = 0

    private myMoveStrategy: moveStrategy;
    public get X() : number { return this.x }
    
    constructor(minWidth : number, maxWidth : number) {
        super()

        let content = document.getElementsByTagName("content")[0]
        content.appendChild(this)

        maxWidth -= this.clientWidth
        this.x = (Math.random() * (maxWidth - minWidth)) + minWidth
        this.y = 100

        this.minWidth   = minWidth
        this.maxWidth   = maxWidth
        this.maxHeight  = window.innerHeight - this.clientHeight

        this.myMoveStrategy = this.setStrategy(ms);
    }

    public setStrategy(ms)
    {

    }

    public update(){
        this.myMoveStrategy.move();
        this.draw();
    }

    public draw() {
        this.style.transform = "translate("+this.x+"px, "+this.y+"px)"
    }
}