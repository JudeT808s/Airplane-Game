class Helicopter extends FlyMobile {
    constructor(afWidth, afHeight) {
        super(afWidth, afHeight)
        this.size = 0.6;
        this.heliSize = 30
        this.width = this.size * this.heliSize
         this.height = (this.size * this.heliSize) / 1.8
    }

    render() {
        super.render()
        // this.turn()
         rect(0, 0, this.width, this.height, 2)
        // rect(-this.width, -this.height, 0, 0, 2)
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