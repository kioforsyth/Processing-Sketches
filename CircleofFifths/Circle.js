function setup(){
  createCanvas(2000, 1000);
}

function draw(){
  background(0);
  stroke(255);
  noFill()
  ellipse(900, 250, 300, 300);

  if (mouseY > 540) {
    quad(905, 100, 905, 398);}                         //Flatted fifth shape
    else if(mouseY > 490) {
    quad(900, 100, 995, 136);}                         //Power chord shape                          
  else if(mouseY > 440) {                              //Augmented chord shape
    quad(904, 100, 1032, 320, 770, 324);}               
  else if(mouseY > 390) {                              //Half Dimished shape
    quad(900, 100, 750, 250, 905, 398);}                               
  else if(mouseY > 340) {
    quad(900, 100, 998, 137, 750, 250, 1050, 260);}    //Minor 6 Shape    
  else if(mouseY > 290) {
    quad(900, 100, 995, 136, 1030, 320, 1048, 260);}   //Major 6 Shape
  else if(mouseY > 240) {
    quad(900, 100, 998, 137, 765, 190, 750, 250);}     //Minor 7 Shape
  else if (mouseY > 190) {
   quad(900, 100, 995, 137, 765, 185, 1032, 320);}     //Dominant 7 Shape
  else if (mouseY > 140){
     quad(900, 100, 998, 137, 980, 375, 1032, 320);}   //Major 7 Shape
  else if (mouseY > 90) {
    quad(900, 100, 998, 137, 750, 250);                //Minor Third Shape
  }
  else if (mouseY > 45) {
    quad(900, 100, 995, 136, 1032, 320);               //Major Triad Shape
     }

  
  text("Chord Shapes: ", 20, 25);                      //chord types
  text("Major Triad", 200, 50);
  text("Minor Triad", 200, 100);
  text("Major Seventh (maj7)", 200, 150);
  text("Dominant Seven (7)", 200, 200);
  text("Minor Seven (m7)", 200, 250);
  text("Major Sixth", 200, 300);
  text("Minor Sixth", 200, 350);
  text("Half Diminished", 200, 400);
  text("Augmented", 200, 450);
  text("Power Chord", 200, 500);
  text("Flatted 5th", 200, 550);

                                                       //note letters
  text("c", 900, 95);
  text("g", 1002, 136);
  text("d", 1042, 190);
  text("a", 1054, 260);
  text("e", 1035, 330);
  text("b", 982, 390);
  text("f #", 900, 415);
  text("Db", 800, 390);
  text("Ab", 750, 330);
  text("Eb", 730, 260);
  text("Bb", 743, 190);
  text("f", 790, 139);
  


  
}
