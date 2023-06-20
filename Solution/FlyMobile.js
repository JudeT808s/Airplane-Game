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
        this.angle = 1;

        this.rotationSpeed = 0.05; // Adjust the rotation speed as needed

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
        if (keyIsPressed) {
          if (keyCode === LEFT_ARROW && !this.rotatingLeft) {
            let rand = random(1, 60);
            this.rotation.setHeading(this.rotation.heading() - (rand + 90));
            this.speed.setHeading(this.rotation.heading() * rand);
            this.rotatingLeft = true;
          } else if (keyCode === RIGHT_ARROW && !this.rotatingRight) {
            let rand = random(1, 60);
            this.rotation.setHeading(this.rotation.heading() - (rand + 180));
            this.speed.setHeading(this.rotation.heading() * rand);
            this.rotatingRight = true;
          } else if (keyCode === UP_ARROW && !this.rotatingUp) {
            let rand = random(1, 60);
            this.rotation.setHeading(this.rotation.heading() - (rand + 90));
            this.speed.setHeading(this.rotation.heading() * rand);
            this.rotatingUp = true;
          } else if (keyCode === DOWN_ARROW && !this.rotatingDown) {
            let rand = random(1, 60);
            this.rotation.setHeading(this.rotation.heading() - (rand + 180));
            this.speed.setHeading(this.rotation.heading() * rand);
            this.rotatingDown = true;
          }
        } else {
          // Reset the rotation flags when the key is released
          this.rotatingLeft = false;
          this.rotatingRight = false;
          this.rotatingUp = false;
          this.rotatingDown = false;
        }
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


