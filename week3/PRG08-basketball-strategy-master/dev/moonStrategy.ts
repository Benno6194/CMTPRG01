class MoonStrategy extends moveStrategy{
    public constructor(b:Ball){
        super(b);
    }

    public move(){
        this.myBall.x += this.myBall.speedX
        this.myBall.y += this.myBall.speedY
        
        if (this.myBall.x < this.myBall.minWidth || this.myBall.x > this.myBall.maxWidth)
        {
            this.myBall.speedX *= -1
            
        }
        if (this.myBall.y < 0 || this.myBall.y > this.myBall.maxHeight)
        {
            this.myBall.speedY *= -1
        }
    }
}