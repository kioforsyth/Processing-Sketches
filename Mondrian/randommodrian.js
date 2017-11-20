function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  
  var randomHeight = random(windowHeight - windowHeight/10);  //random y location for rects, horizontal line 
  var randomX = random(windowWidth - windowWidth/10);        //random x location for rects, vertical line
  var randomYellow = random(windowHeight - windowHeight/10);  //random y location for yellow rect
  var randomYellowX = random(windowWidth - windowWidth/10);
  var blue = color(10, 10, 255);														
  var red = color(255, 10, 10);
  var yellow = color(255, 255, 10);


  strokeWeight(5);
  line(1, randomHeight, windowWidth, randomHeight);   //shifting, thinner horizontal line

  strokeWeight(5);                                    //shifting, thinner vertical line
  line(randomX, 1, randomX, windowHeight); 
    
  strokeWeight(5);                                    //white rectangle to complicate grid
  rect(randomX, randomHeight, randomX, randomHeight);
  
  fill(blue)
  rect(windowWidth/10, randomHeight, 500, randomHeight); //randomly place blue rectangle
  
  fill(red)
  rect(randomX, 100, randomX/2, windowHeight/4);         //randomly place red rectangle
  
  fill(yellow)
  rect(randomYellowX, randomYellow, randomX/2, randomYellow);   //randomly place yellow rect

}

  

function draw() {
  
  strokeWeight(10);
  line(windowWidth/3, 1, windowWidth/3, windowHeight);  //static vertical line
  
  strokeWeight(10);
  line(1, 1, windowWidth, 1);                           //static horizontal line
  
  strokeWeight(10);
  line(1, windowHeight/3, windowWidth, windowHeight/3); //static horizontal line
  
  strokeWeight(10);
  line(1, windowHeight * .8, windowWidth, windowHeight * .8);  //static horizontal line

}
