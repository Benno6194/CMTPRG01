class Score {
    private static instance:Score;
    private score:number;


    private constructor(){
        this.score = 0;
    }

    public static getInstance(): Score{
        if(!Score.instance)
        {
            Score.instance = new Score();
        }

        return Score.instance;
    }

    public addScore(n: number){
        this.score += 1;
    }
}