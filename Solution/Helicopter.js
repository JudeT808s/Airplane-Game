class Helicopter extends FlyMobile {
    constructor(afWidth, afHeight) {
        super(afWidth, afHeight)
        this.size = 0.6;
        this.heliSize = 30
        this.angle = 1;
        this.width = this.size * this.heliSize
        this.height = (this.size * this.heliSize) / 1;
    }

    render() {
        super.render()
        // this.turn()
        ellipse(0, 0, this.width, this.height, 2)
            rotate(frameCount * 8  ); 
            rect(0, 0, 10, 40);
            rect(0, 0, 40, 10);
        //  ellipse(0, 0, this.width)
        pop()
    }
    turn() {
        super.turn()
    }
    slow() {
        super.slow()
    }
    speed() {
        super.speedUp()
    }
    step() {
        super.step()
    }

    checkLimits() {
        super.checkLimits()
    }
}