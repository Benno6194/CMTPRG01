var Main = /** @class */ (function () {
    function Main() {
        this.balls = [];
        this.balls.push(new EarthBall(0, window.innerWidth / 2));
        this.balls.push(new MoonBall(window.innerWidth / 2, window.innerWidth));
        this.basketBall = new BasketBall(0, window.innerWidth);
        this.gameLoop();
    }
    Main.prototype.gameLoop = function () {
        var _this = this;
        for (var _i = 0, _a = this.balls; _i < _a.length; _i++) {
            var ball = _a[_i];
            ball.update();
        }
        this.basketBall.update();
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    return Main;
}());
window.addEventListener("load", function () { return new Main(); });
