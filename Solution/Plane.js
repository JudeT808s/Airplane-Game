class Plane extends FlyMobile {
    constructor(afWidth,afHeight) {
        super(afWidth, afHeight)
        this.size = 0.3;
    }

    render() {
        push()
        beginShape()
        translate(this.pos.x, this.pos.y)
        if (this.alert == true) {
            noFill()
            stroke(255, 0, 0)
            circle(0, 0, 50)
        }
        fill(255)
        rotate(this.rotation)
        scale(this.size)
        vertex(0, 0)
        vertex(apWidth / 2, apTail)
        vertex(0, -apHeight)
        vertex(-(apWidth / 2), apTail)
        vertex(0, 0)
        endShape()
        pop()
    }

    
}