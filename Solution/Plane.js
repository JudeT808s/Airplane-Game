class Plane {
    constructor(afWidth,afHeight) {

        this.speed = createVector(random(-1, 1), random(-1, 1));
        this.pos = createVector(random(-afWidth/2, afWidth/2), random(-afHeight/2, afHeight/2))
        this.afWidth = afWidth;
        this.afHeight = afHeight;
        this.altitude = Math.random() >= 0.5 ? 1000 : 2000;
        this.size = 0.3;
        this.rotation = atan2(this.speed.y, this.speed.x) + 90;
         //this.alert = bool;
         this.alert = false;
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

    slow() {
        // console.log(this.speed.x)
        this.speed.mult(random(-0.5, -1.5))
        // console.log(this.speed.x)
    }
    speed() {
        this.speed.mult(random(0.5, 1.5))
    }
    step() {
        this.pos.x += this.speed.x
        this.pos.y += this.speed.y
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