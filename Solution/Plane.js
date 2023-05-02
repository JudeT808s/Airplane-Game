class Plane extends FlyMobile {
    constructor(afWidth,afHeight) {
        super(afWidth, afHeight)
        this.size = 0.3;
    }

    render() {
       super.render()
        vertex(0, 0)
        vertex(apWidth / 2, apTail)
        vertex(0, -apHeight)
        vertex(-(apWidth / 2), apTail)
        vertex(0, 0)
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