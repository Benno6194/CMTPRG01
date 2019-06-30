abstract class moveStrategy {
    protected myBall:Ball;


    constructor(b:Ball) {
        this.myBall = b;
    }

    public abstract move() : void;
}