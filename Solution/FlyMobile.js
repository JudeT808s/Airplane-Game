class FlyMobile {
  constructor(afWidth, afHeight) {
    this.speed = createVector(random(-1, 1), random(-1, 1));
    this.pos = createVector(random(-afWidth / 2, afWidth / 2), random(-afHeight / 2, afHeight / 2));
    this.afWidth = afWidth;
    this.afHeight = afHeight;
    this.altitude = Math.random() >= 0.5 ? 1000 : 2000;
    this.alert = false;
    this.rotation = createVector(atan2(this.speed.y, this.speed.x), 0, 0);
    this.size = 1;
    this.angle = 1;
    this.rotationSpeed = 0.05;
  }

  render() {
    push();
    translate(this.pos.x, this.pos.y);
    if (this.alert == true) {
      noFill();
      stroke(255, 0, 0);
      circle(0, 0, 50);
    }
    fill(255);
    rotate(this.rotation.x);
    scale(this.size);
    pop();
  }

  turn() {
    if (keyIsPressed) {
      if (keyCode === LEFT_ARROW) {
        this.rotation.setHeading(-135); // -135 degrees
        this.speed.setHeading(this.rotation.heading());
      } else if (keyCode === RIGHT_ARROW) {
        this.rotation.setHeading(45); // 45 degrees
        this.speed.setHeading(this.rotation.heading());
      } else if (keyCode === UP_ARROW) {
        this.rotation.setHeading(-45); // -45 degrees
        this.speed.setHeading(this.rotation.heading());
      } else if (keyCode === DOWN_ARROW) {
        this.rotation.setHeading(135); // 135 degrees
        this.speed.setHeading(this.rotation.heading());
      }
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
