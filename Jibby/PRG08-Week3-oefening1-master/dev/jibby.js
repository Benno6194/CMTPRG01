var Jibby = /** @class */ (function () {
    function Jibby(parent) {
        var _this = this;
        this.div = document.createElement("jibby");
        parent.appendChild(this.div);
        // start instellingen
        this.x = 0;
        this.y = 220;
        this.hygiene = this.food = this.happyness = 50;
        // afbeelding voor idle - vervang dit door het gedrag
        this.div.style.backgroundImage = "url('images/idle.png')";
        // this.myBehavior = new Idle()
        // click listeners
        this.div.addEventListener("click", function () { return _this.onPet(); });
        document.getElementsByTagName("foodbutton")[0].addEventListener("click", function () { return _this.onEat(); });
        document.getElementsByTagName("washbutton")[0].addEventListener("click", function () { return _this.onWash(); });
    }
    Jibby.prototype.update = function () {
        // hier het gedrag updaten
        //
        // dit moet in het gedrag staan
        this.hygiene -= 0.01;
        this.food -= 0.02;
        this.happyness -= 0.015;
        // check of de waarden te laag zijn
        // 
    };
    Jibby.prototype.onPet = function () {
        console.log("you clicked on jibby!");
        this.div.style.backgroundImage = "url('images/happy.png')";
    };
    Jibby.prototype.onWash = function () {
        console.log("washing jibby!");
        this.div.style.backgroundImage = "url('images/washing.png')";
    };
    Jibby.prototype.onEat = function () {
        console.log("jibby is eating!");
        this.div.style.backgroundImage = "url('images/eating.gif')";
    };
    return Jibby;
}());
