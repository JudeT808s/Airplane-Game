class AirField {
    constructor(afWidth, afHeight, num) {
        this.planes = [];
        this.airFieldWidth = afWidth;
        this.airFieldHeight = afHeight;
        this.num = num;
        this.generatePlanes(this.num);
        this.color = color(255, 0, 0, 100);
        this.startTime = millis(); // Store the start time
        this.timer = 0; // Initialize the timer to 0
    }

    checkPlanes() {
        for (let i = 0; i < this.planes.length; i++) {
            for (let j = i + 1; j < this.planes.length; j++) {
                let distance = p5.Vector.sub(this.planes[i].pos, this.planes[j].pos).mag();
                this.timer = Math.round((millis() - this.startTime) / 1000); // Calculate elapsed time in seconds

                if (distance <= 10) {
                    console.log("Game over after " + this.timer + " seconds");
                    this.startTime = millis(); // Reset the start time
                } else if (distance < 40) {
                    this.planes[i].alert = true;
                    this.planes[j].alert = true;
                }
            }
        }
    }

    showLabels() {
        fill(255, 255, 255);
        textSize(15);
        textAlign(CENTER, CENTER);
        this.planes.forEach((plane, i) => {
            push();
            text(i, plane.pos.x + width / 2, plane.pos.y + height / 2 - 20);
            pop();
        });
        fill(255, 255, 255);
        textAlign(CENTER, CENTER);
        text("Time alive: " + this.timer + " seconds", width / 2, height - 25);
    }

    generatePlanes(num) {
        for (let i = 0; i < this.num; i++) {
            this.planes.push(new Plane(this.airFieldWidth, this.airFieldHeight), new Helicopter(this.airFieldWidth, this.airFieldHeight));
        }
    }

    flyPlanes() {
        push();
        translate(width / 2, height / 2);
        noStroke();
        fill(this.color);
        rectMode(CENTER);
        rect(0, 0, this.airFieldWidth, this.airFieldHeight);

        this.planes.forEach((plane) => {
            plane.step();
            plane.render();
            plane.checkLimits();
            plane.alert = false;
        });
        pop();
    }
}
