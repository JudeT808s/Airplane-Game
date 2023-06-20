class Plane extends FlyMobile {
    constructor(afWidth, afHeight) {
        super(afWidth, afHeight);
        this.size = 0.3;
    }

    render() {
        push();
        beginShape();
        translate(this.pos.x, this.pos.y);
        if (this.alert) {
            noFill();
            stroke(255, 0, 0);
            circle(0, 0, 50);
        }
        fill(255);
        rotate(this.rotation.x);
        scale(this.size);
        vertex(0, 0);
        vertex(apWidth / 2, apTail);
        vertex(0, -apHeight);
        vertex(-(apWidth / 2), apTail);
        vertex(0, 0);
        endShape();
        pop();
    }

    slow() {
        this.speed.mult(random(0.5, 0.9));
    }

    speedUp() {
        this.speed.mult(random(0.5, 1.5));
    }

    step() {
        this.pos.x += this.speed.x;
        this.pos.y += this.speed.y;
    }
    checkLimits(){
      
        if(this.pos.x > this.afWidth/2){ 
            this.pos.y = (map(this.pos.y, -this.afHeight, this.afHeight, this.afHeight, -this.afHeight ) )
            console.log("yes");
            this.pos.x = -this.afWidth/2;
        }

        if(this.pos.x < -this.afWidth/2){ 
            this.pos.y = (map(this.pos.y, -this.afHeight, this.afHeight, this.afHeight, -this.afHeight ) )
            
            this.pos.x = this.afWidth/2;
        }
    
        if(this.pos.y > this.afHeight/2){ 
            this.pos.x = (map(this.pos.x, -this.afWidth, this.afWidth, this.afWidth, -this.afWidth) )
          
            this.pos.y = -this.afHeight/2;
        }

        if(this.pos.y < -this.afHeight/2){ 
            this.pos.x = (map(this.pos.x, -this.afWidth, this.afWidth, this.afWidth, -this.afWidth) )
          
            this.pos.y = this.afHeight/2;
        }

       
    }
    
}