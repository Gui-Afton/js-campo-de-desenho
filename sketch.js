function setup() {
    createCanvas(600, 600);
     background("purple");
  }
  
  function draw() {
    
    stroke("brown");
    fill("yellow");
   
    //console.log(mouseIsPressed);
   
    if(mouseIsPressed){
      rect(mouseX, mouseY, 20, 35);
    }
    
  }