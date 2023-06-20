class FlyMobile {
    constructor(afWidth, afHeight) {
        this.speed = createVector(random(-1, 1), random(-1, 1));
        this.pos = createVector(random(-afWidth / 2, afWidth / 2), random(-afHeight / 2, afHeight / 2));
        this.afWidth = afWidth;
        this.afHeight = afHeight;
        this.altitude = Math.random() >= 0.5 ? 1000 : 2000;
        this.alert = false;
        this.rotation = createVector(atan2(this.speed.y, this.speed.x) + 90, 0, 0);
        this.size = 1; // Add the size property and initialize it
    }
    render() {
        push()
        translate(this.pos.x, this.pos.y)
        if (this.alert == true) {
            noFill()
            stroke(255, 0, 0)
            circle(0, 0, 50)
        }
        fill(255)
        rotate(this.rotation.x)
        scale(this.size)
    }
    turn() {
        let rand = random(1, 60);
        this.rotation.setHeading(this.rotation.heading() * rand + 180); // Use heading() to set the rotation angle
        this.speed.setHeading(this.rotation.heading() * rand);
    }

    slow() {
        this.speed.mult(random(-0.5, -1.5));
    }

    speedUp() {
        this.speed.mult(random(0.5, 1.5));
    }

    step() {
        this.pos.x += this.speed.x;
        this.pos.y += this.speed.y;
    }

    checkLimits() {
        if (this.pos.x > this.afWidth / 2) {
            this.pos.y = map(this.pos.y, -this.afHeight, this.afHeight, this.afHeight, -this.afHeight);
            this.pos.x = -this.afWidth / 2;
        }

        if (this.pos.x < -this.afWidth / 2) {
            this.pos.y = map(this.pos.y, -this.afHeight, this.afHeight, this.afHeight, -this.afHeight);
            this.pos.x = this.afWidth / 2;
        }

        if (this.pos.y > this.afHeight / 2) {
            this.pos.x = map(this.pos.x, -this.afWidth, this.afWidth, this.afWidth, -this.afWidth);
            this.pos.y = -this.afHeight / 2;
        }

        if (this.pos.y < -this.afHeight / 2) {
            this.pos.x = map(this.pos.x, -this.afWidth, this.afWidth, this.afWidth, -this.afWidth);
            this.pos.y = this.afHeight / 2;
        }
    }
}

