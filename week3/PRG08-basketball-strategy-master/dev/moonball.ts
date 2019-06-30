/// <reference path="moonStrategy.ts">
class MoonBall extends Ball {
    constructor(minWidth : number, maxWidth : number) {
        super(minWidth, maxWidth)

        this.setStrategy(new MoonStrategy(this));
    }
}

window.customElements.define("moonball-component", MoonBall)