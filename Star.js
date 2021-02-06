class Star {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false
      }
    }
    display(){
     this.body.position.x = mouseX;
     this.body.position.y = mouseY;

     if(keyDown("DOWN_ARROW"))
        star.velocityY = -12;
    }
  }