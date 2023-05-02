class Helicopter extends FlyMobile {
    constructor(afWidth,afHeight) {
        super(afWidth, afHeight)
        this.size = 0.6;
        this.heliSize = 30
        this.width = this.size * this.heliSize
    }

    render() {
       super.render()
       ellipse(0,0,this.width)
        endShape()
        pop()
    }
    slow() {
        super.slow()
    }
    speed() {
        super.speed()
    }
    step() {
        super.step()
    }

    checkLimits() {
    super.checkLimits()
    }
}