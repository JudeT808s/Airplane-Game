class FlyMobile  {
    constructor(afWidth, afHeight) {
        this.speed = createVector(random(-1, 1), random(-1, 1));
        this.pos = createVector(random(-afWidth/2, afWidth/2), random(-afHeight/2, afHeight/2))
        this.afWidth = afWidth;
        this.afHeight = afHeight;
        this.altitude = Math.random() >= 0.5 ? 1000 : 2000;
        this.rotation = atan2(this.speed.y, this.speed.x) + 90;
         //this.alert = bool;
         this.alert = false;
        
    }

   
    slow() {
        this.speed.mult(random(-0.5, -1.5))
    }
    speed() {
        this.speed.mult(random(0.5, 1.5))
    }
    step() {
        this.pos.x += this.speed.x
        this.pos.y += this.speed.y
    }

    checkLimits() {
        if (this.pos.x > this.afWidth / 2) {
            this.pos.y = (map(this.pos.y, -this.afHeight, this.afHeight, this.afHeight, -this.afHeight))
            this.pos.x = -this.afWidth / 2;
        }

        if (this.pos.x < -this.afWidth / 2) {
            this.pos.y = (map(this.pos.y, -this.afHeight, this.afHeight, this.afHeight, -this.afHeight))

            this.pos.x = this.afWidth / 2;
        }

        if (this.pos.y > this.afHeight / 2) {
            this.pos.x = (map(this.pos.x, -this.afWidth, this.afWidth, this.afWidth, -this.afWidth))

            this.pos.y = -this.afHeight / 2;
        }

        if (this.pos.y < -this.afHeight / 2) {
            this.pos.x = (map(this.pos.x, -this.afWidth, this.afWidth, this.afWidth, -this.afWidth))

            this.pos.y = this.afHeight / 2;
        }


    }
}

