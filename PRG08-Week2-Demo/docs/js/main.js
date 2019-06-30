"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var GameObject = (function () {
    function GameObject(g, objectType) {
        this.game = g;
        this.element = document.createElement(objectType);
        var foreground = document.getElementsByTagName("foreground")[0];
        foreground.appendChild(this.element);
    }
    GameObject.prototype.update = function () {
        this.element.style.transform = "translate(" + this.posx + "px, " + this.posy + "px)";
    };
    return GameObject;
}());
var Bomb = (function (_super) {
    __extends(Bomb, _super);
    function Bomb(g) {
        var _this = _super.call(this, g, "bomb") || this;
        _this.element.addEventListener("click", function () { _this.onClick(); });
        _this.resetBomb();
        return _this;
    }
    Bomb.prototype.update = function () {
        this.posy += this.speed;
        if (this.posy > window.innerHeight) {
            this.resetBomb();
        }
        _super.prototype.update.call(this);
    };
    Bomb.prototype.onClick = function () {
        this.game.scorePoint();
        this.resetBomb();
    };
    Bomb.prototype.resetBomb = function () {
        this.posy = -500;
        this.posx = Math.random() * (window.innerWidth - this.element.getBoundingClientRect().width);
        this.speed = Math.random() * 5 + 2;
    };
    return Bomb;
}(GameObject));
var Car = (function (_super) {
    __extends(Car, _super);
    function Car(g) {
        var _this = _super.call(this, g, "car") || this;
        _this.posx = -100;
        _this.posy = 480;
        return _this;
    }
    Car.prototype.update = function () {
        this.posx++;
        if (this.posx > window.innerWidth) {
            this.posx = -50 - Math.random() * 200;
        }
        _super.prototype.update.call(this);
    };
    return Car;
}(GameObject));
var Game = (function () {
    function Game() {
        this.score = 0;
        this.destroyed = 0;
        this.NUMBER_OF_BOMBS = 4;
        this.textfield = document.getElementsByTagName("textfield")[0];
        this.statusbar = document.getElementsByTagName("bar")[0];
        this.car = new Car();
        this.bombs = [];
        for (var i = 0; i < this.NUMBER_OF_BOMBS; i++) {
            this.bombs.push(new Bomb(this));
        }
        this.gameLoop();
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        for (var _i = 0, _a = this.bombs; _i < _a.length; _i++) {
            var b = _a[_i];
            b.update();
        }
        this.car.update();
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    Game.prototype.destroyBuilding = function () {
        this.destroyed++;
        console.log("buildings destroyed " + this.destroyed);
    };
    Game.prototype.scorePoint = function () {
        this.score++;
        this.textfield.innerHTML = "Score: " + this.score;
    };
    return Game;
}());
window.addEventListener("load", function () { return new Game(); });
//# sourceMappingURL=main.js.map